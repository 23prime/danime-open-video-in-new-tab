const init = () => {
    initEventListeners();
};

const initEventListeners = () => {
    document.addEventListener("DOMContentLoaded", () => {
        const targets = [
            { elementId: "development", link: "https://github.com/23prime/danime-open-video-in-new-tab" },
            { elementId: "contact", link: "https://twitter.com/23_prime" },
        ];

        targets.forEach((target) => {
            const element = document.getElementById(target.elementId);
            setMainColor(element);
            addClickEvent(element, target.link);
            addMouseOverEvent(element);
            addMouseLeaveEvent(element);
        });
    });
};

const setMainColor = (element) => {
    element.style.backgroundColor = localStorage.mainButtonColor;
};

const addClickEvent = (element, url) => {
    element.addEventListener("click", () => {
        window.open(url);
        window.close();
    });
};

const addMouseOverEvent = (element) => {
    element.addEventListener("mouseover", (event) => {
        element.style.setProperty("background-color", localStorage.hoveredButtonColor, "important");
    });
};

const addMouseLeaveEvent = (element) => {
    element.addEventListener("mouseleave", (event) => {
        element.style.setProperty("background-color", localStorage.mainButtonColor, "important");
    });
};

init();
