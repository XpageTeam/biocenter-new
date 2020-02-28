import domReady from "./xpage/ready";
import { sameHeights, App } from "./xpage/index";

domReady(() => {
    const compareSlider = document.querySelector('.compare-page .swiper-list') as HTMLElement;
	
	if (!compareSlider)
		return


	import("swiper/dist/js/swiper.esm.js").then(function(Module){	

		const {Swiper, Navigation, EffectFade, Pagination} = Module;

		Swiper.use([Navigation, EffectFade, Pagination]);

		
		var compare = new Swiper(compareSlider, {
			slidesPerView: 5,
			navigation: {
		        nextEl: '.compare-page .swiper-button-next',
		        prevEl: '.compare-page .swiper-button-prev',
		    },
		    breakpoints: {
			    1200: {
			      slidesPerView: 3,
			    },
			    1000: {
			      slidesPerView: 2,
			      spaceBetween: 20,
			    },
			  }
		});

		sameHeights(".compare__list", ".compare__item-title")

		App.each(".compare__list .swiper-slide:first-child", (slide: HTMLElement) => {
			const lines = App.transformNodeListToArray(
				slide.querySelectorAll(".compare__item-el")
			);
			

			for (let i = 0; i < lines.length; i++){
				const line = lines[i];

				sameHeights(".compare__list", `.compare__item-el:nth-child(${i + 2})`)
			}
		});
	});

})