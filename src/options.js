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
        mainColorPicker.value = result.mainButtonColor;
        mainColorCode.value = result.mainButtonColor;
        hoveredColorPicker.value = result.hoveredButtonColor;
        hoveredColorCode.value = result.hoveredButtonColor;
    });
};

const initEventListeners = () => {
    document.addEventListener("DOMContentLoaded", () => {
        mainColorPicker.addEventListener("input", updateMainColor);
        mainColorPicker.addEventListener("change", updateMainColor);

        hoveredColorPicker.addEventListener("input", updateHoveredColor);
        hoveredColorPicker.addEventListener("change", updateHoveredColor);

        saveButton.addEventListener("click", save);
        resetButton.addEventListener("click", reset);
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
};

const reset = () => {
    setMainButtonColorToStorage(defaultConfig.mainButtonColor);
    setHoveredButtonColorToStorage(defaultConfig.hoveredButtonColor);
    setColorsFromStorage();
};

init();
