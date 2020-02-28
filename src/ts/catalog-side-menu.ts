import domReady from "./xpage/ready";
import { EventListener } from "./xpage/index";

domReady(() => {
    new EventListener(".aside-category__top").add("click", (el: HTMLElement) => {
        const curFilterItem = el.closest(".filter__item");

        if (!curFilterItem)
            return;

        const targetListItem = curFilterItem.querySelector(".aside-category__list");

        if (!curFilterItem)
            return;

        if (curFilterItem.classList.contains("js__open")){
            window.$(targetListItem).slideUp(300);
            curFilterItem.classList.remove("js__open");
        }else{
            window.$(targetListItem).slideDown(300);
            curFilterItem.classList.add("js__open");
        }
    });
});

domReady(() => {
    new EventListener(".filter__item:not(.filter__item--price) .filter__item-title").add("click", (el: HTMLElement) => {
        el.classList.toggle("js__opened");

        // if ()
    });
});