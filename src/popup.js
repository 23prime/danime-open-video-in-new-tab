const defaultConfig = {
    mainButtonColor: "#3cb371",
    hoveredButtonColor: "#66cdaa",
};

const storageKeys = Object.keys(defaultConfig);

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
    chrome.storage.sync.get(storageKeys, (result) => {
        element.style.backgroundColor = result.mainButtonColor || defaultConfig.mainButtonColor;
    });
};

const addClickEvent = (element, url) => {
    element.addEventListener("click", () => {
        window.open(url);
        window.close();
    });
};

const addMouseOverEvent = (element) => {
    element.addEventListener("mouseover", (event) => {
        chrome.storage.sync.get(storageKeys, (result) => {
            element.style.setProperty("background-color", result.hoveredButtonColor, "important");
        });
    });
};

const addMouseLeaveEvent = (element) => {
    element.addEventListener("mouseleave", (event) => {
        chrome.storage.sync.get(storageKeys, (result) => {
            element.style.setProperty("background-color", result.mainButtonColor, "important");
        });
    });
};

init();
