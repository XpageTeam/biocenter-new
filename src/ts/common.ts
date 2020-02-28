import { domReady, App, sameHeights, EventListener } from "./xpage/index";


declare global {
	interface Window {
		$: Function;
		is: any;
		requestIdleCallback: Function;
		cancelIdleCallback: Function;
		defaultSlideInit: Function;
		swiperThumbsReady: any;
		notificator: any
	}
}

domReady(() => {

	
});
