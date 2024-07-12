import { useUser, useSetting, useEndpoint } from '@rocket.chat/ui-contexts';
import { useQuery } from '@tanstack/react-query';

import VoIPClient from '../lib/voip-freeswitch/VoIPClient';
import { useWebRtcServers } from '../providers/OmnichannelCallProvider/hooks/useWebRtcServers';

export const useVoiceCallClient = (): { voipClient: VoIPClient | null; error: Error | null } => {
	const { _id: userId } = useUser() || {};
	const isVoipEnabled = useSetting<boolean>('VoIP_Enabled');
	const voipRetryCount = useSetting<number>('VoIP_Retry_Count');
	const enableKeepAlive = useSetting<boolean>('VoIP_Enable_Keep_Alive_For_Unstable_Networks');

	const getRegistrationInfo = useEndpoint('GET', '/v1/voip-freeswitch.extension.getRegistrationInfoByUserId');

	const iceServers = useWebRtcServers();

	const { data: voipClient, error } = useQuery<VoIPClient | null, Error>(
		['voice-call-client', isVoipEnabled, userId, voipRetryCount, enableKeepAlive, iceServers],
		async () => {
			if (!userId) {
				throw Error('Invalid user id');
			}

			const registrationInfo = await getRegistrationInfo({ userId });

			if (!registrationInfo) {
				throw Error('Registration information not found');
			}

			const {
				extension: { extension },
				credentials: { websocketPath, password },
			} = registrationInfo;

			if (!extension) {
				throw Error('User extension not found');
			}

			const config = {
				iceServers,
				authUserName: extension,
				authPassword: password,
				sipRegistrarHostnameOrIP: new URL(websocketPath).host,
				webSocketURI: websocketPath,
				connectionRetryCount: Number(voipRetryCount),
				enableKeepAliveUsingOptionsForUnstableNetworks: Boolean(enableKeepAlive),
			};

			return VoIPClient.create(config);
		},
		{
			initialData: null,
			enabled: !!userId,
		},
	);

	return { voipClient, error };
};
