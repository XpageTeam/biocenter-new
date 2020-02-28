import { domReady, App, sameHeights, EventListener } from "./xpage/index";

import "./default-slider";
import "./catalog";
import "./forms";

import "./catalog-side-menu";
import "./catalog-filter-search";
// import "./catalog-filter-more"

import "./notificator.ts";

import "./top-menu";
import "./left-menu";
import "./tabs";
import "./workshop";

import "./compare";

import "./card";

import "./lc";

import "./mobile-menu"
import "./mobile-head-menu-scrolling"
import "./main-menu-scrolling"

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

	if (!window.is.touchDevice())
		(async function(){
			const select = await import ("./xpage/select");
			App.each(".workshops-filter select, .head-lang select, .head-lang select, .default-input__input--select, .bonus__input-select select", function(el: HTMLSelectElement) {
				new select.default(el);
			});
		})();

	/** Установка одинаковых высот для заголовков карточек каталог на главной */
	// ;(function() {
	// 	const mainCatalogListg = App.getElement(".main-catalog__list");

	// 	if (!mainCatalogListg) return;

	// 	sameHeights(mainCatalogListg, ".item__title");
	// })();

	new EventListener(".sort__select-label--selectized").add("click", function(
		el: HTMLElement
	) {
		const select = el
			.closest(".sort__select")
			.querySelector(".sort__select-select") as HTMLSelectElement;

		if (!select) return;

		if (!select.mySelect) return

		enum selectState{
			opened,
			closed
		}

		select.mySelect.open();
		select.mySelect._curState = selectState.closed;

		setTimeout(() => {
			select.mySelect._curState = selectState.opened;
		}, 100)
	});
});
