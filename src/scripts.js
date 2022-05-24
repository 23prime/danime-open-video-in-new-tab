const defaultConfig = {
    mainButtonColor: "#3cb371",
    hoveredButtonColor: "#66cdaa",
};

const storageKeys = Object.keys(defaultConfig);

const replacePlayButton = () => {
    const playButton = document.getElementsByClassName("normal")[0];

    if (playButton) {
        const newPlayButton = createNewPlayButton();
        playButton.parentNode.appendChild(newPlayButton);
        playButton.parentNode.removeChild(playButton);
    }
};

const createNewPlayButton = () => {
    newPlayButton = document.createElement("a");
    newPlayButton.innerHTML = "視聴する！";

    setMainColor(newPlayButton);
    newPlayButton.style.setProperty("cursor", "pointer", "important");
    newPlayButton.onclick = openVideo;

    addMouseOverEvent(newPlayButton);
    addMouseLeaveEvent(newPlayButton);

    return newPlayButton;
};

const openVideo = () => {
    const partId = new URL(location.href).searchParams.get("partId");

    if (partId) {
        const playUrl = `https://animestore.docomo.ne.jp/animestore/sc_d_pc?partId=${partId}`;
        window.open(playUrl);
    }

    return true;
};

const setMainColor = (element) => {
    chrome.storage.sync.get(storageKeys, (result) => {
        element.style.setProperty(
            "background-color",
            result.mainButtonColor || defaultConfig.mainButtonColor,
            "important"
        );
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

setInterval("replacePlayButton()", 1000);
