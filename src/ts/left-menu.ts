import domReady from "./xpage/ready";
import App from "./xpage/core";

domReady(() => {
    window.$(".category-menu__list").menuAim({
        // submenuSelector: ".main-nav__sub-submenu",
        activate: leftMenu.open,
        deactivate: leftMenu.close,
        // submenuDirection: "below",
        exitMenu: leftMenu.close,
    });
});

class leftMenu{
    public static open(menuElement: HTMLElement){
        menuElement.classList.add("js__submenu-visible");

        window.$(".category-submenu__list").menuAim({
            // submenuSelector: ".main-nav__sub-submenu",
            activate: leftSubmenu.open,
            deactivate: leftSubmenu.close,
            // submenuDirection: "below",
            exitMenu: leftSubmenu.close,
        });
    }

    public static close(){
        App.each(".category-menu__item", (menuElement: HTMLElement) => {
            menuElement.classList.remove("js__submenu-visible")
        })
    }
}

class leftSubmenu{
    public static open(menuElement: HTMLElement){
        menuElement.classList.add("js__submenu-visible")
    }

    public static close(){
        App.each(".category-submenu__item", (menuElement: HTMLElement) => {
            menuElement.classList.remove("js__submenu-visible")
        })
    }
}