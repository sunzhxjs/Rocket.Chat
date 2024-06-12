import { useRoute, useRouteParameter } from '@rocket.chat/ui-contexts';
import React from 'react';

import { useOmnichannelRoom } from '../../room/contexts/RoomContext';
import ContactInfo from './ContactInfo';
import ContactEditWithData from './EditContactInfoWithData';
import ContactHistoryMessagesList from './contactHistory/MessageList/ContactHistoryMessagesList';

const PATH = 'live';

const ContactInfoRouter = (props) => {
	console.log(props);
	const room = useOmnichannelRoom();
	const directoryRoute = useRoute(PATH);
	const context = useRouteParameter('context');
	const contextId = useRouteParameter('contextId');

	const {
		v: { _id },
	} = room;

	const handleContactEditBarCloseButtonClick = (): void => {
		directoryRoute.push({ id: room._id, tab: 'contact-profile' });
	};

	if (context === 'chat-history' && contextId) {
		return <ContactHistoryMessagesList chatId={contextId} />;
	}

	if (context === 'edit') {
		return <ContactEditWithData id={_id} close={handleContactEditBarCloseButtonClick} />;
	}

	return <ContactInfo id={_id} rid={room._id} route={PATH} />;
};

export default ContactInfoRouter;
