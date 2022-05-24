const defaultConfig = {
    mainButtonColor: "#3cb371",
    hoveredButtonColor: "#66cdaa",
};

const storageKeys = Object.keys(defaultConfig);

const mainColorPicker = document.getElementById("main-color-picker");
const mainColorCode = document.getElementById("main-color-code");
const hoveredColorPicker = document.getElementById("hovered-color-picker");
const hoveredColorCode = document.getElementById("hovered-color-code");
const saveButton = document.getElementById("save-button");
const resetButton = document.getElementById("reset-button");

const init = async () => {
    initStorage();
    setColorsFromStorage();
    initEventListeners();
};

const initStorage = () => {
    chrome.storage.sync.get(storageKeys, (result) => {
        if (!result.mainButtonColor) setMainButtonColorToStorage(defaultConfig.mainButtonColor);
        if (!result.hoveredButtonColor) setHoveredButtonColorToStorage(defaultConfig.hoveredButtonColor);
    });
};

const setMainButtonColorToStorage = (color) => {
    chrome.storage.sync.set({ mainButtonColor: color }, () => {});
};

const setHoveredButtonColorToStorage = (color) => {
    chrome.storage.sync.set({ hoveredButtonColor: color }, () => {});
};

const setColorsFromStorage = () => {
    chrome.storage.sync.get(storageKeys, (result) => {
        mainColorPicker.value = result.mainButtonColor || defaultConfig.mainButtonColor;
        mainColorCode.value = result.mainButtonColor || defaultConfig.mainButtonColor;
        hoveredColorPicker.value = result.hoveredButtonColor || defaultConfig.hoveredButtonColor;
        hoveredColorCode.value = result.hoveredButtonColor || defaultConfig.hoveredButtonColor;
    });
};

const initEventListeners = () => {
    document.addEventListener("DOMContentLoaded", () => {
        mainColorPicker.addEventListener("input", updateMainColor);
        mainColorPicker.addEventListener("change", updateMainColor);

        hoveredColorPicker.addEventListener("input", updateHoveredColor);
        hoveredColorPicker.addEventListener("change", updateHoveredColor);

        saveButton.addEventListener("click", save);
        setMainColor(saveButton);
        addMouseOverEvent(saveButton);
        addMouseLeaveEvent(saveButton);

        resetButton.addEventListener("click", reset);
        setMainColor(resetButton);
        addMouseOverEvent(resetButton);
        addMouseLeaveEvent(resetButton);
    });
};

const setMainColor = (element) => {
    chrome.storage.sync.get(storageKeys, (result) => {
        element.style.backgroundColor = result.mainButtonColor || defaultConfig.mainButtonColor;
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

const updateMainColor = (event) => {
    mainColorCode.value = event.target.value;
};

const updateHoveredColor = (event) => {
    hoveredColorCode.value = event.target.value;
};

const save = () => {
    setMainButtonColorToStorage(mainColorPicker.value);
    setHoveredButtonColorToStorage(hoveredColorPicker.value);
    setMainColor(saveButton);
    setMainColor(resetButton);
};

const reset = () => {
    setMainButtonColorToStorage(defaultConfig.mainButtonColor);
    setHoveredButtonColorToStorage(defaultConfig.hoveredButtonColor);
    setColorsFromStorage();
    setMainColor(saveButton);
    setMainColor(resetButton);
};

init();
