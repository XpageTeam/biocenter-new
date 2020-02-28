// import "./card-slider"
import domReady from "./xpage/ready"
import { EventListener } from "./xpage/index";

domReady(() => {
    new EventListener(".presence__top").add("click", (el: HTMLElement) => {
        const presence = el.closest(".presence");

        window.$(presence).find(".presence__bot").slideToggle(300);

        presence.classList.toggle("js__open");
    });
});

domReady(() => {
    const cardCont = document.querySelector(".card-cont"),
        cardInfoCont = document.querySelector(".info-product-cont");

    if (!cardCont || !cardInfoCont) return;

    const checkScroll = function(){
        const cardContBounding = cardCont.getBoundingClientRect();

        if (window.$(cardCont).position().top + cardContBounding.height <= window.scrollY)
            cardInfoCont.classList.add("js__visible");
        else
            cardInfoCont.classList.remove("js__visible");
    };

    checkScroll();

    window.addEventListener("scroll", checkScroll);
});