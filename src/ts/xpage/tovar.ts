import domReady from "./ready";

domReady(() => {
    const cardCont = document.querySelector(".card-cont"),
        cardInfoCont = document.querySelector(".info-product-cont");

    if (!cardCont || !cardInfoCont) return;

    window.addEventListener("scroll", () => {
        const cardContBounding = cardCont.getBoundingClientRect();

        if (cardContBounding.top + cardContBounding.height >= window.scrollY)
            cardInfoCont.classList.add("js__visible");
        else
            cardInfoCont.classList.remove("js__visible");
    });
});