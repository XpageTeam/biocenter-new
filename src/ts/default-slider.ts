import domReady from "./xpage/ready";
import { sameHeights, App } from "./xpage/index";

/** Слайдер внизу страницы */
domReady(async () => {
    App.each(".default-slider", (slider: HTMLElement) => {
        window.defaultSlideInit(slider);
    })
});



window.defaultSlideInit = async (slider: HTMLElement) => {
    if (!slider) return;
    
    const {Swiper, Navigation, Pagination, Keyboard, Scrollbar} = await import("swiper/dist/js/swiper.esm");

    Swiper.use([Navigation, Keyboard, Pagination, Scrollbar]);

    new Swiper(slider.querySelector(".swiper-list") as HTMLElement, {
        slidesPerView: slider.closest(".catalog_slider-sets") ? 4 : 5,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        spaceBetween: 26,
        keyboard: {
            enabled: true,
            onlyInViewport: true
        },
        scrollbar: {
            el: '.swiper-scrollbar',
            draggable: true,
        },
        navigation: {
            nextEl: slider.querySelector('.swiper-button-next') as HTMLElement,
            prevEl: slider.querySelector('.swiper-button-prev') as HTMLElement,
        },
        breakpoints: {
            1000: {
              slidesPerView: 3,
            },
            667: {
              slidesPerView: 2,
            },
            370: {
              slidesPerView: 1,
            },
        },
        on: {
            init(){
                sameHeights(slider, ".item__title")
                sameHeights(slider, ".item__img")
                sameHeights(slider, ".item__prices")
            }
        }
    });
}