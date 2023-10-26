export enum RoutePaths {
	HOMEPAGE = '/',
	CONTACT = '/contact'
}

export type NavLink = {
	href: string;
	title: string;
	isExternal?: boolean;
};

export const createNavLink = (title: string, href: string, isExternal?: boolean): NavLink => ({
	title,
	href,
	isExternal
});

export type EnterKeyHint =
	| 'search'
	| 'enter'
	| 'done'
	| 'go'
	| 'next'
	| 'previous'
	| 'send'
	| null
	| undefined;

export type AlertType = 'success' | 'error' | 'warning' | 'info';

export type AlertMessage = {
	alertType: AlertType;
	alertText: string;
};
