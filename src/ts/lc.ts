import domReady from "./xpage/ready";
import { EventListener } from "./xpage/index";

domReady(() => {
    new EventListener(".lc-order__item-repeat:not(a)").add("click", (el: HTMLElement) => {
        const currentOrder = el.closest(".lc-order__item");

        el.innerText = currentOrder.classList.contains("js__opened") 
            ? "Развернуть"
            : "Свернуть"

        currentOrder.classList.toggle("js__opened");
        window.$(currentOrder).find(".lc-order__item-bot-cont").slideToggle(300);
    })
})