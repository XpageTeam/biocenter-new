import {domReady, App, EventListener, Element} from "./xpage/index"

/** Табы */
domReady(() => {
    async function deactivateTab(tabElement: HTMLElement, contentElement: HTMLElement){
        contentElement.style.display = "block";

        tabElement
            .classList
            .remove("active");
        contentElement
            .classList
            .remove("active");

        return new Promise(resolve => {
            setTimeout(function(){
                contentElement.style.display = "";
                resolve()
            }, 300)
        })
    };

    new EventListener(".tabs__tab").add("click", async (btn: HTMLElement) => {
        const curTabsBlock = btn.closest(".tabs");

        const currentBtn = new Element(btn),
            curBtnIndex = currentBtn.attr("data-id"),
            targetContent = new Element(curTabsBlock)
                            .find(`.tabs__content[data-id='${curBtnIndex}']`);

        if (currentBtn.hasClass("active"))
            return;

        await deactivateTab(
            curTabsBlock.querySelector(".tabs__tab.active"), 
            curTabsBlock.querySelector(`.tabs__content.active`)
        );

        currentBtn.addElement(targetContent).addClass("active");
    });
});