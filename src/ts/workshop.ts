import domReady from "./xpage/ready";
import { EventListener } from "./xpage/index";

domReady(() => {
    new EventListener(".workshops__item-more span").add("click", (el: HTMLElement) => {
        const workshopItem = el.closest(".workshops__item");

        if (!workshopItem)
            return;

        if (workshopItem.classList.contains("js__open")){
            el.innerText = 'Читать подробнее';

            workshopItem.classList.remove("js__open");
        }else {
            el.innerText = "Свернуть";
            workshopItem.classList.add("js__open");
        }
    });
});