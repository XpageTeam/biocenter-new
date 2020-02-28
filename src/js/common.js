import $ from "jquery"
// import is from "is_js"
// import Cookies from "cookie-js";

// import "./filter.js"
import "./mobile-menu.js"


window.$ = $;
window.jQuery = $;
// window.is = is;

// require("./jquery.menu-aim.js");

window.get$ = (element) => {
	return $(element)
};

require("../css/jquery.fancybox.css")

require("./jquery.fancybox.js")

document.addEventListener("DOMContentLoaded", function(){

	$(".fancybox").fancybox({
		// trapFocus: false,
		// touch: false,
		// buttons: ["fullscreen", "slideShow", "close"],
		// transitionEffect: "slide",
		trapFocus: false,
		touch : {
			vertical : false,
		},
		// smallBtn : true,
		loop: true,
		clickSlide: false,
  		clickOutside: false,
		buttons: ["fullscreen", "slideShow", "close", "thumbs"],
		image: {
			preload: true,
		},
		transitionEffect: "slide",

	});
});


document.addEventListener("DOMContentLoaded", function(){
	const reviewSlider = document.querySelector('.review__list .swiper-list');
	
	if (!reviewSlider)
		return


	import("swiper/dist/js/swiper.esm.js").then(function(Module){	

		const {Swiper, Navigation, EffectFade, Thumbs, Lazy} = Module;

		Swiper.use([Navigation, EffectFade, Thumbs, Lazy]);

		
		var brands = new Swiper(reviewSlider, {
			slidesPerView: 1,
			spaceBetween: 100,
			autoHeight: true,
			loop: true,
			navigation: {
		        nextEl: '.review__list .swiper-button-next',
		        prevEl: '.review__list .swiper-button-prev',
		    },

		});

	})
})



document.addEventListener("DOMContentLoaded", function(){

	if($(window).width() > 1000){

		$('.main-nav__submenu-list .main-nav__sub-submenu').height(Math.max.apply(null, $('.main-nav__submenu-list .main-nav__sub-submenu').map(function(){
			return $(this).height();
		})))

	}

	if(is.ios())
		$('.item__price:contains("₽"), .price:contains("₽"), .item__price--old:contains("₽")').each(function(){
			const $this = $(this);

			$this.html($this.html().replace('₽', '<span class="rub">Р</span>'));
		});



	var banners = $('.main-slider .banners').clone();
	$('.main-catalog-cont').after("<div class='banners-cont'><div class='wrapper'></div></div>");
	$('.banners-cont .wrapper').prepend(banners);


	var allCatalog = $('.main-catalog .tabs__top .default-btn').clone();
	$('.main-catalog').append('<div class="main-catalog__btn--mobile"></div>');
	$('.main-catalog .main-catalog__btn--mobile').prepend(allCatalog);



	var cardTitle = $('.card-title').clone();
	var cardRaiting = $('.card .rating').clone();
	$('.card--left').prepend(cardRaiting);
	$('.card--left').prepend(cardTitle);

	var cardBonus = $('.card-bonus').clone();
	var cardLink = $('.card-links').clone();

	$('.card-property-cont .card-property').after(cardBonus);
	$('.card .presence').after(cardLink);



	$('.vacancy__item-top').click(function(){
		$(this).nextAll('.vacancy__item-bot').slideToggle();
		$(this).toggleClass('js__open');
	})

	$('.card-info').prevAll('.card-row').css({
		'position': 'static',
	})

	if($(window).width() < 1000){
		$('body').addClass('bx-touch');
	}

	$('.aside').prepend('<div class="aside__head">\
		<div class="aside__title">Фильтры</div>\
		<div class="burger"><span></span></div>\
		</div>');

	$('.mobile-menu__city, .mobile-menu__cities .back').click(function(){
		$('body').toggleClass('js__mobile-menu--open');
	})


	$('.filter-btn, .aside .burger').click(function(){
		$('body').toggleClass('js__open-filter');
	})

	if(window.matchMedia("(max-width: 1000px)").matches){
		$('.catalog-cat1__item-top').click(function(){
			$(this).nextAll('.catalog-cat1__elements').slideToggle();
			$(this).toggleClass('js__open');
		})

	}
	if(window.matchMedia("(max-width: 667px)").matches){
		$('.tabs__top').click(function(){
			$(this).toggleClass('js__opened');
		})

	}

	if($(window).width() < 1000)
		$('.f-menu__title').click(function(){
			$(this).siblings('.f-menu__list').slideToggle()
			$(this).toggleClass('js__open');
		});


	$(window).scroll(function(){
		const firstCompareItemHeader = document.querySelector(".compare__item-top");

		if (!firstCompareItemHeader)
			return;

		if (firstCompareItemHeader.getBoundingClientRect().top <= 0)
			$(".compare__item-top").addClass("js__sticked")
		else
			$(".compare__item-top").removeClass("js__sticked")
	})

	if($('.main-slider').length){
		var mainSliderHeight = $('.main-slider').height();

		console.log(mainSliderHeight)
	}

	if($(window).width() > 1000)
		$(window).on('load', function(){
		
			$('.main .category-menu__list').css({
				'max-height': mainSliderHeight,
			})
		})

});

