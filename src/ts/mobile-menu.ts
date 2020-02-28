import domReady from "./xpage/ready";
import { EventListener, App } from "./xpage/index";

domReady(() => {
    new EventListener(".mobile-menu-title").add("click", (title: HTMLElement) => {
        const menuItem = title.closest(".mobile-menu__item--submenu");

        menuItem.classList.toggle("js__menu-opened")
    });

    new EventListener(".mobile-menu__submenu-title").add("click", (submenu: HTMLElement) => {
        const submenuItem = submenu.closest(".mobile-menu__submenu-item--submenu"),
            submenuContent = submenuItem.querySelector(".main-nav__sub-submenu");

        if (submenuItem.classList.contains("js__menu-opened")){
            window.$(submenuContent).slideUp(300);

            submenuItem.classList.remove("js__menu-opened");
        }else{
            App.each(".mobile-menu__submenu-item--submenu", (submenu: HTMLElement) => {
                const list = submenu.querySelector(".mobile-menu__sub-submenu-list");
                
                window.$(list).slideDown();

                submenu.classList.remove("js__menu-opened");
            });

            window.$(submenuContent).slideDown(300);

            submenuItem.classList.add("js__menu-opened");
        }
    });

    new EventListener(".mobile-menu__back").add("click", (el: HTMLElement) => {
        const menuItem = el.closest(".mobile-menu__item--submenu");

        menuItem.classList.remove("js__menu-opened")
    });
});