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
			localStorage.getItem('darkMode') === 'true'
		);
	}

	public static toggleDarkMode(): void {
		if (this.isDarkMode) {
			localStorage.removeItem('darkMode');
			document.documentElement.classList.remove('dark');
		} else {
			localStorage.setItem('darkMode', 'true');
			document.documentElement.classList.add('dark');
		}
	}

	public static removeDarkMode(): void {
		localStorage.removeItem('darkMode');
	}
}
