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
