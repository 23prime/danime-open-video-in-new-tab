const config = {
    defaultButtonColor: "#3cb371",
    hoveredButtonColor: "#66cdaa",
};

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

    newPlayButton.style.setProperty("background-color", config.defaultButtonColor, "important");
    newPlayButton.style.setProperty("cursor", "pointer", "important");
    newPlayButton.onclick = openVideo;

    newPlayButton.addEventListener("mouseover", (event) => {
        newPlayButton.style.setProperty("background-color", config.hoveredButtonColor, "important");
    });

    newPlayButton.addEventListener("mouseleave", (event) => {
        newPlayButton.style.setProperty("background-color", config.defaultButtonColor, "important");
    });

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

setInterval("replacePlayButton()", 1000);
