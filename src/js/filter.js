import $ from "jquery"
import "jquery-ui/ui/widgets/slider.js"
import "./touch-for-ui-slider.js"

document.addEventListener("DOMContentLoaded", function () {
	/** Свернуть развернуть фильтр */


	if(window.matchMedia("(max-width: 1000px)").matches){

		$('.filter__item.aside-category').removeClass('js__open');
		
		$("body").on("click", ".filter__item-title", function () {
			const $this = $(this),
				$list = $this.nextAll("div");

			if ($this.hasClass("js__open")) {
				$list.slideUp(300)
				$this.removeClass("js__open")
			} else {
				$list.slideDown(300)
				$this.addClass("js__open")
			}
		});
	}

	

	/** ul-slider Для цены в фильтре*/
	// if ($(".price-filter").length){
	// 	console.log(1);
	// }

	$(".price-filter").each(function () {
		const $this = $(this),
			min = +$this.find(".price-min").val() || 0,
			max = +$this.find(".price-max").val() || 0,

			step = +$this.find(".price-step").val() || 1,

			curMin = +$this.find(".price-min-cur").val() || min,
			curMax = +$this.find(".price-max-cur").val() || max,

			$maxInput = $this.find(".price-max-cur"),
			$minInput = $this.find(".price-min-cur");

		$this.find(".price-filter__slider").slider({
			animate: "normal",
			min: min,
			max: max,
			values: [parseInt(curMin), parseInt(curMax)],
			range: true,
			step: step,
			change: (e, ui) => {
				if (parseInt(ui.values[0]))
					$minInput.val(parseInt(ui.values[0])).trigger("change");
				else
					$minInput.val(min).trigger("change");

				if (parseInt(ui.values[1]))
					$maxInput.val(parseInt(ui.values[1])).trigger("change");
				else
					$maxInput.val(max).trigger("change");
			},
			slide: (e, ui) => {
				// setMinHandle($this, parseInt(ui.values[0]))
				// setMaxHandle($this, parseInt(ui.values[1]))

			}

		});

		// setMinHandle($this, parseInt(curMin))
		// setMaxHandle($this, parseInt(curMax))

		$maxInput.on("blur", function(){
			const value = (+$(this).val() >= max ? max : +$(this).val());

			$this.find(".price-filter__slider").slider("values", 1, value);
		});

		$minInput.on("blur", function(){
			const value = (+$(this).val() < min ? min : +$(this).val());

			$this.find(".price-filter__slider").slider("values", 0, value);
		});
	});
});

// const partNumber = number => number.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, "$1 "),
// 	setMinHandle = ($uiSlider, count) => {
// 		$uiSlider.attr("data-count-min", partNumber(count))
// 	},
// 	setMaxHandle = ($uiSlider, count) => {
// 		$uiSlider.attr("data-count-max", partNumber(count))
// 	}