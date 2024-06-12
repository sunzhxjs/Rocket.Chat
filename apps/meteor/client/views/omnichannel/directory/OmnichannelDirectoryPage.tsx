import { Tabs } from '@rocket.chat/fuselage';
import { useRouteParameter, usePermission, useTranslation, useRouter } from '@rocket.chat/ui-contexts';
import type { ReactElement } from 'react';
import React, { useEffect, useCallback } from 'react';

import { ContextualbarDialog } from '../../../components/Contextualbar';
import { Page, PageHeader, PageContent } from '../../../components/Page';
import { queryClient } from '../../../lib/queryClient';
import NotAuthorizedPage from '../../notAuthorized/NotAuthorizedPage';
import ContextualBar from './ContextualBar';
import CallTab from './calls/CallTab';
import ChatTab from './chats/ChatTab';
import ContactTab from './contacts/ContactTab';

type DirectoryPages = 'contacts' | 'chats' | 'calls';

const OmnichannelDirectoryPage = (): ReactElement => {
	const t = useTranslation();
	const router = useRouter();
	const page = useRouteParameter('page');
	const bar = useRouteParameter('bar');
	const tab = useRouteParameter('tab');

	// useEffect(
	// 	() =>
	// 		router.subscribeToRouteChange(() => {
	// 			if (router.getRouteName() !== 'omnichannel-directory' || !!router.getRouteParameters().page) {
	// 				return;
	// 			}

	// 			router.navigate({
	// 				name: 'omnichannel-directory',
	// 				params: { page: 'contacts' },
	// 			});
	// 		}),
	// 	[router],
	// );

	useEffect(() => {
		console.log(tab);

		if (!page) {
			router.navigate(`/omnichannel-directory/contacts`);
		}
	}, [page, router]);

	const handleTabClick = useCallback((page) => router.navigate(`/omnichannel-directory/${page}`), [router]);

	const chatReload = () => queryClient.invalidateQueries({ queryKey: ['current-chats'] });

	return (
		<Page flexDirection='row'>
			<Page>
				<PageHeader title={t('Omnichannel_Contact_Center')} />
				<Tabs flexShrink={0}>
					<Tabs.Item selected={page === 'contacts'} onClick={() => handleTabClick('contacts')}>
						{t('Contacts')}
					</Tabs.Item>
					<Tabs.Item selected={page === 'chats'} onClick={() => handleTabClick('chats')}>
						{t('Chats')}
					</Tabs.Item>
					<Tabs.Item selected={page === 'calls'} onClick={() => handleTabClick('calls')}>
						{t('Calls')}
					</Tabs.Item>
				</Tabs>
				<PageContent>
					{page === 'contacts' && <ContactTab />}
					{page === 'chats' && <ChatTab />}
					{page === 'calls' && <CallTab />}
				</PageContent>
			</Page>
			{tab && (
				<ContextualbarDialog>
					<ContextualBar chatReload={chatReload} />
				</ContextualbarDialog>
			)}
		</Page>
	);
};

export default OmnichannelDirectoryPage;
