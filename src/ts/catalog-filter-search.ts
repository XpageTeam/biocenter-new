import domReady from "./xpage/ready";
import App from "./xpage/core";
import { EventListener } from "./xpage/index";

domReady(() => {
	new EventListener(".more-filter").add("click", (moreLink: HTMLElement) => {
		const targetContainer = moreLink.closest(".filter__item-content");

		if (!targetContainer) return;

		if (targetContainer.classList.contains("js__checkbox--open")) {
			targetContainer.classList.remove("js__checkbox--open");

			moreLink.innerText = "Показать все";
		} else {
			targetContainer.classList.add("js__checkbox--open");

			moreLink.innerText = "Свернуть";
		}
	});
});

domReady(() => {
	App.each(".filter__item .filter-search", (filterSearch: HTMLElement) => {
		const searchInput = filterSearch.querySelector(".search-form__input"),
			searchContent = filterSearch
				.closest(".filter__item")
				.querySelector(".filter__item-content"),
			moreBtn = searchContent.querySelector(".filter__item-btn");

		if (!searchInput || !searchContent) return;

		new EventListener(searchInput).add("input", (input: HTMLInputElement) => {
			const curValue = input.value
					.trimLeft()
					.trimRight()
					.toLowerCase(),
				listOfSearch = App.transformNodeListToArray(
					searchContent.querySelectorAll(
						".filter-link, .default-input--checkbox .default-input__label"
					)
				);

			if (!curValue) {
				searchContent.classList.remove("js__checkbox--open");

				moreBtn.removeAttribute("style");

				for (const item of listOfSearch) {
					item.closest("div").removeAttribute("style");
				}
			} else {
				searchContent.classList.add("js__checkbox--open");
				for (const item of listOfSearch) {
					if (
						item.innerText
							.trimLeft()
							.trimRight()
							.toLowerCase()
							.indexOf(curValue) == -1
					)
						item.closest("div").style.display = "none";
				}

				moreBtn.setAttribute("style", "display: none;");
			}
		});
	});
});
