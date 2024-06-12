import type { IRouterPaths, RouteParameters } from '@rocket.chat/ui-contexts';
import { useRouter } from '@rocket.chat/ui-contexts';

export const useContactRoute = (route: keyof IRouterPaths | undefined) => {
	const { navigate } = useRouter();

	if (!route) {
		return;
	}

	const handleNavigate = (params: RouteParameters) => {
		if (route === 'omnichannel-directory') {
			return navigate({
				name: route,
				params: {
					page: 'contacts',
					...params,
				},
			});
		}

		navigate({
			name: route,
			params,
		});
	};

	return handleNavigate;
};
