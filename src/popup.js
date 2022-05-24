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

const addClickEvent = (element, url) => {
    element.addEventListener("click", () => {
        window.open(url);
        window.close();
    });
};

init();
