export interface MenuItem {
	name: string;
	icon: React.ReactNode;
	path?: string;
	callback?: () => void;
}
