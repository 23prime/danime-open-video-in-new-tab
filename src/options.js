const defaultColors = {
    main: "#3cb371",
    hovered: "#66cdaa",
};

const mainColorPicker = document.getElementById("main-color-picker");
const mainColorCode = document.getElementById("main-color-code");
const hoveredColorPicker = document.getElementById("hovered-color-picker");
const hoveredColorCode = document.getElementById("hovered-color-code");
const saveButton = document.getElementById("save-button");
const resetButton = document.getElementById("reset-button");

const init = () => {
    initLocalStorage();
    setColorsFromLocalStorage();
    initEventListeners();
};

const initLocalStorage = () => {
    localStorage.mainButtonColor ||= defaultColors.main;
    localStorage.hoveredButtonColor ||= defaultColors.hovered;
};

const setColorsFromLocalStorage = () => {
    mainColorPicker.value = localStorage.mainButtonColor;
    mainColorCode.value = localStorage.mainButtonColor;
    hoveredColorPicker.value = localStorage.hoveredButtonColor;
    hoveredColorCode.value = localStorage.hoveredButtonColor;
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
    localStorage.mainButtonColor = mainColorPicker.value;
    localStorage.hoveredButtonColor = hoveredColorPicker.value;
};

const reset = () => {
    localStorage.mainButtonColor = defaultColors.main;
    localStorage.hoveredButtonColor = defaultColors.hovered;
    setColorsFromLocalStorage();
};

init();
