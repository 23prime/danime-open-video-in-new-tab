const defaultConfig = {
    mainButtonColor: "#3cb371",
    hoveredButtonColor: "#66cdaa",
};

const storageKeys = Object.keys(defaultConfig);

const setMainColor = (element) => {
    chrome.storage.sync.get(storageKeys, (result) => {
        element.style.backgroundColor = result.mainButtonColor || defaultConfig.mainButtonColor;
    });
};

const addMouseOverEvent = (element) => {
    element.addEventListener("mouseover", (event) => {
        chrome.storage.sync.get(storageKeys, (result) => {
            element.style.setProperty(
                "background-color",
                result.hoveredButtonColor || defaultConfig.hoveredButtonColor,
                "important"
            );
        });
    });
};

const addMouseLeaveEvent = (element) => {
    element.addEventListener("mouseleave", (event) => {
        chrome.storage.sync.get(storageKeys, (result) => {
            element.style.setProperty(
                "background-color",
                result.mainButtonColor || defaultConfig.mainButtonColor,
                "important"
            );
        });
    });
};
