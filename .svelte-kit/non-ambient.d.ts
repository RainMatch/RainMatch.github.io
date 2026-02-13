
// this file is generated — do not edit it


declare module "svelte/elements" {
	export interface HTMLAttributes<T> {
		'data-sveltekit-keepfocus'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-noscroll'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-preload-code'?:
			| true
			| ''
			| 'eager'
			| 'viewport'
			| 'hover'
			| 'tap'
			| 'off'
			| undefined
			| null;
		'data-sveltekit-preload-data'?: true | '' | 'hover' | 'tap' | 'off' | undefined | null;
		'data-sveltekit-reload'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-replacestate'?: true | '' | 'off' | undefined | null;
	}
}

export {};


declare module "$app/types" {
	export interface AppTypes {
		RouteId(): "/" | "/contact" | "/faq" | "/privacy" | "/verified";
		RouteParams(): {
			
		};
		LayoutParams(): {
			"/": Record<string, never>;
			"/contact": Record<string, never>;
			"/faq": Record<string, never>;
			"/privacy": Record<string, never>;
			"/verified": Record<string, never>
		};
		Pathname(): "/" | "/contact" | "/contact/" | "/faq" | "/faq/" | "/privacy" | "/privacy/" | "/verified" | "/verified/";
		ResolvedPathname(): `${"" | `/${string}`}${ReturnType<AppTypes['Pathname']>}`;
		Asset(): "/CNAME" | "/Download_on_the_App_Store_Badge_US-UK_RGB_wht_092917.svg" | "/GetItOnGooglePlay_Badge_Web_color_English.png" | "/Logo_store_transparent.png" | "/Screenshot_20251123_130311_RainMatch.jpg" | "/Screenshot_20251123_130332_RainMatch.jpg" | "/Screenshot_20251123_130339_RainMatch.jpg" | "/robots.txt" | "/sitemap.xml" | string & {};
	}
}