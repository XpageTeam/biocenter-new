import $ from "jquery"
// import is from "is_js"
// import Cookies from "cookie-js";

// import "./filter.js"
// import "./mobile-menu.js"


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

	

});

