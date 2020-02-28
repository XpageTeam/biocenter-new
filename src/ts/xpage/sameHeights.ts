import {App, Element} from "./index";

function setSameHeights(containerSelector: HTMLElement, targetSelector: string): void
function setSameHeights(containerSelector: string, targetSelector: string): void
function setSameHeights(containerSelector: any, targetSelector: string): void {	
	App.each(containerSelector, (el: HTMLElement) => {
		const targetElements = new Element(el).find(targetSelector);
		targetElements.height(
			Math.max(...targetElements.map(
				(value: HTMLElement) => parseInt(
					getComputedStyle(value).height
					)
				)
			)
		);
		
	})
}

export default setSameHeights