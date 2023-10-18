import { SystemLogger } from '../../../../../server/lib/logger/system';
import { CloudWorkspaceAccessTokenError } from '../getWorkspaceAccessToken';
import { getCachedSupportedVersionsToken } from '../supportedVersionsToken/supportedVersionsToken';
import { announcementSync } from './announcementSync';
import { syncCloudData } from './syncCloudData';

export async function syncWorkspace() {
	try {
		await syncCloudData();
		await announcementSync();
	} catch (err) {
		if (err instanceof CloudWorkspaceAccessTokenError) {
			// TODO: Remove License if there is no access token
		}
		SystemLogger.error({ msg: 'Error during workspace sync', err });
	}

	await getCachedSupportedVersionsToken.reset();
}
