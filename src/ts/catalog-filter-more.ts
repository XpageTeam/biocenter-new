import domReady from "./xpage/ready";
import { EventListener } from "./xpage/index";

domReady(() => {
    new EventListener(".more-filter").add("click", (moreLink: HTMLElement) => {
        const targetContainer = moreLink.closest(".filter__item-content");

        if (!targetContainer)
            return;

        targetContainer.classList.toggle("js__show-all")
    });
})