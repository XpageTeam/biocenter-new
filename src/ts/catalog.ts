import domReady from "./xpage/ready";
import App from "./xpage/core";
import { EventListener } from "./xpage/index";

domReady(async () => {
  if (window.is.touchDevice()) return;

  const select = await import("./xpage/select");

  App.each(".sort__select-select", function(el: HTMLSelectElement) {
    new select.default(el);

    el.closest(".sort__select")
      .querySelector("label")
      .classList.add("sort__select-label--selectized");
  });

  new EventListener(".filter__item-title").add("click", (el: HTMLElement) => {
	if (window.matchMedia("(min-width: 1000)").matches)
		return;
		  
	const filterItemContent = el
		.closest(".filter__item")
		.querySelectorAll("> *:not(.filter__item-title)"),
		filterItem = el.closest(".filter__item");

    if (el.classList.contains("js__opened")) {
		window.$(filterItemContent).slideUp(300);
      	el.classList.remove("js__opened");
    } else {
		window.$(filterItemContent).slideUp(300);
      	el.classList.add("js__opened");
	}
  });
});

domReady(() => {
	const mobileToggleBtns = App.transformNodeListToArray(document.querySelectorAll(".catalog-search__toggle-results, .catalog-search__toggle-catalog"));

	if (!mobileToggleBtns.length)
		return;

	for (const btn of mobileToggleBtns)
		btn.addEventListener("click", function(){
			if (this.classList.contains("active"))
				return;

			let targetScroll = 0;

			if (this.classList.contains("catalog-search__toggle-results"))
				targetScroll = window.$(".catalog-search__results").offset().top;

			if (this.classList.contains("catalog-search__toggle-catalog"))
				targetScroll = window.$(".catalog").offset().top;

			for (const btn of mobileToggleBtns)
				btn.classList.toggle("active");
			

			window.$("html, body").animate({
				scrollTop: targetScroll - 20
			}, 300)
		});
});

domReady(() => {
	const catalogSearchBtn = document.querySelector(".catalog-search__results-btn .default-btn") as HTMLAnchorElement,
		searchResults = document.querySelector(".search-results");

	if (!catalogSearchBtn || !searchResults)
		return;

	catalogSearchBtn.addEventListener("click", function(e: Event){
		e.preventDefault();

		if (searchResults.classList.contains("js__show"))
			this.innerText = "Показать всё";
		else
			this.innerText = "Свернуть";

		searchResults.classList.toggle("js__show")
	});
});

domReady(() => {
	window.$(".filter__item.open").each(function(){
		const $this = window.$(this);

		$this.find(".filter__item-title").addClass("js__opened");
	});
});