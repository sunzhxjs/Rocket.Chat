import { useRoute, useRouteParameter, useRouter, useTranslation } from '@rocket.chat/ui-contexts';
import React, { useMemo } from 'react';

import {
	Contextualbar,
	ContextualbarHeader,
	ContextualbarIcon,
	ContextualbarTitle,
	ContextualbarClose,
} from '../../../components/Contextualbar';
import ContactInfo from '../contactInfo/ContactInfo';
import ContactNewEdit from '../contactInfo/EditContactInfo';
import ContactEditWithData from '../contactInfo/EditContactInfoWithData';

const HEADER_OPTIONS = {
	new: { icon: 'user', title: 'New_contact' },
	info: { icon: 'user', title: 'Contact_Info' },
	edit: { icon: 'pencil', title: 'Edit_Contact_Profile' },
} as const;

type BarOptions = keyof typeof HEADER_OPTIONS;

const ContactContextualBar = () => {
	const t = useTranslation();

	const directoryRoute = useRoute('omnichannel-directory');
	const bar = (useRouteParameter('bar') || 'info') as BarOptions;
	const contactId = useRouteParameter('id') || '';

	const { getRouteParameters } = useRouter();
	const params = getRouteParameters();

	const handleContactsContextualbarCloseButtonClick = () => {
		directoryRoute.push({ page: 'contacts' });
	};

	const handleContactsContextualbarBackButtonClick = () => {
		directoryRoute.push({ page: 'contacts', id: contactId, bar: 'info' });
	};

	const header = useMemo(() => HEADER_OPTIONS[bar] || HEADER_OPTIONS.info, [bar]);

	console.log(params);

	// return (
	// 	<Contextualbar>
	// 		<ContextualbarHeader>
	// 			<ContextualbarIcon name={header.icon} />
	// 			<ContextualbarTitle>{t(header.title)}</ContextualbarTitle>
	// 			<ContextualbarClose onClick={handleContactsContextualbarCloseButtonClick} />
	// 		</ContextualbarHeader>
	// 		{bar === 'new' && <ContactNewEdit id={contactId} close={handleContactsContextualbarCloseButtonClick} />}
	// 		{bar === 'edit' && <ContactEditWithData id={contactId} close={handleContactsContextualbarBackButtonClick} />}

	// 	</Contextualbar>
	// );
	return <ContactInfo id={contactId} />;
};

export default ContactContextualBar;
