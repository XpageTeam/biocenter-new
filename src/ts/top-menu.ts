import domReady from "./xpage/ready";
import { EventListener, App } from "./xpage/index";

/**
 * Открывание \ закрывание строки поиска
 */
domReady(() => {
    const topSearchBlock = document.querySelector(".head-search");

    if (!topSearchBlock)
        return

    const topSearchInput = topSearchBlock.querySelector("input[type=text]");

    if (!topSearchInput)
        return    

    new EventListener(topSearchInput)
        .add("focus", (input: HTMLInputElement) => {
            topSearchBlock.classList.add("js__full-width")            
        })

    new EventListener(topSearchInput)
        .add("blur", (input: HTMLInputElement) => {
            topSearchBlock.classList.remove("js__full-width")
        })
})

/**
 * АИМ меню для верхнего меню
 */
domReady(() => {
    window.$(".main-nav__list").menuAim({
        submenuSelector: ".main-nav__submenu-cont",
        rowSelector: ".main-nav__item",
		activate: topMenu.open,
   		deactivate: topMenu.close,
   		submenuDirection: "below",
   		exitMenu: topMenu.close,
    })
    
    // let topSubmenuOpenTimeout: NodeJS.Timeout;
    // new EventListener(".main-nav__submenu-item.js__has-submenu")
    //     .add("mouseenter", (menuElement: HTMLElement) => {
    //         clearTimeout(topSubmenuOpenTimeout);

    //         topSubmenu.open(menuElement);
    //     })

    // new EventListener(".main-nav__submenu-item.js__has-submenu")
    //     .add("mouseleave", (menuElement: HTMLElement) => {
    //         topSubmenuOpenTimeout = setTimeout(() => {
    //             topSubmenu.close()
    //         }, 600)
    //     })
})

class topMenu{
    public static open(menuElement: HTMLElement){
        menuElement.classList.add("js__submenu-visible");

        window.$(".main-nav__submenu-list").menuAim({
            // submenuSelector: ".main-nav__sub-submenu",
            activate: topSubmenu.open,
            deactivate: topSubmenu.close,
            submenuDirection: "below",
            exitMenu: topSubmenu.close,
        })
    }

    public static close(){
        App.each(".main-nav__item", (menuElement: HTMLElement) => {
            menuElement.classList.remove("js__submenu-visible");
        })
    }
}

class topSubmenu{
    public static open(menuElement: HTMLElement){
        menuElement.classList.add("js__submenu-visible")
    }

    public static close(){
        App.each(".main-nav__submenu-item", (menuElement: HTMLElement) => {
            menuElement.classList.remove("js__submenu-visible");
        })
    }
}