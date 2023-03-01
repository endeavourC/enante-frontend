import { DarkModeValue } from '@/common/components/DarkModeSwitch/DarkModeTypes';

export class DarkModeService {
	private static instance: DarkModeService;

	private constructor() {}

	public static getInstance(): DarkModeService {
		if (!DarkModeService.instance) {
			DarkModeService.instance = new DarkModeService();
		}
		return DarkModeService.instance;
	}

	public static get isDarkMode(): boolean {
		return (
			window.matchMedia('(prefers-color-scheme: dark)').matches ||
			localStorage.getItem('theme') === DarkModeValue.Dark
		);
	}

	public static toggleDarkMode(): void {
		if (this.isDarkMode) {
			localStorage.setItem('theme', DarkModeValue.Light);
			document.documentElement.classList.remove(DarkModeValue.Dark);
		} else {
			localStorage.setItem('theme', DarkModeValue.Dark);
			document.documentElement.classList.add(DarkModeValue.Dark);
		}
	}

	public static removeDarkMode(): void {
		localStorage.setItem('theme', DarkModeValue.Light);
	}
}
