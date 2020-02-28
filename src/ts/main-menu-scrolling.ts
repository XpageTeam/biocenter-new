import domReady from "./xpage/ready";

const mainNavContainerSelector = ".category-menu .category-menu__list",
    mainNavItemSelector = ".category-menu .category-menu__item",
    mainNavButtonsSelectors = {
        left: ".category-menu .category-menu-arrow--prev",
        right: ".category-menu .category-menu-arrow--next"
    },
    scrollStep = 20,
    scrollingDelay = 50;

domReady(() => {
    const mainNavList = document.querySelector(mainNavContainerSelector),
        mainNavItems = document.querySelectorAll(mainNavItemSelector),
        activeItem = document.querySelector(`${mainNavItemSelector} .active`);

    if (!mainNavItems.length || !mainNavList)
        return;

    // if (activeItem){
    //     const {left: activeItemLeftOffset} = activeItem.getBoundingClientRect();

    //     mainNavList.scrollTo({
    //         left: parseInt(activeItemLeftOffset.toFixed(0))
    //     });
    // }

    const leftBtn = document.querySelector(mainNavButtonsSelectors.left) as HTMLElement, 
        rightBtn = document.querySelector(mainNavButtonsSelectors.right) as HTMLElement;

    leftBtn.addEventListener("click", function(){
        window.$(mainNavList).animate({
            scrollLeft: mainNavList.scrollLeft - scrollStep
        }, scrollingDelay);        
    });

    rightBtn.addEventListener("click", function(){
        window.$(mainNavList).animate({
            scrollLeft: mainNavList.scrollLeft + scrollStep
        }, scrollingDelay);        
    });
});