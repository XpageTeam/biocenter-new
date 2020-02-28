import $ from "jquery"

document.addEventListener("DOMContentLoaded", function(){

	$('.burger').click(function(){
		$('body').toggleClass('js__menu--open');
	})



	$('.mobile-menu__list').prepend('<li class="mobile-menu__item"><a class="mobile-menu__link" href="/catalog/">Каталог</a></li>')
})