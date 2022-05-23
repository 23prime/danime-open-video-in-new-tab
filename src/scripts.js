const openVideo = () => {
    const partId = new URL(location.href).searchParams.get("partId");

    if (partId) {
        const playUrl = `https://animestore.docomo.ne.jp/animestore/sc_d_pc?partId=${partId}`;
        window.open(playUrl);
    }

    return true;
};

let completed = false;

let defaultButtonColor = "mediumseagreen";
let hoveredButtonColor = "mediumaquamarine";

const replacePlayButton = () => {
    if (completed) return;

    console.debug("setPlayButton");
    const playButton = document.getElementsByClassName("normal")[0];

    if (playButton) {
        const newPlayButton = createNewPlayButton();
        playButton.parentNode.appendChild(newPlayButton);
        playButton.parentNode.removeChild(playButton);
        completed = true;
    }
};

const createNewPlayButton = () => {
    newPlayButton = document.createElement("a");
    newPlayButton.innerHTML = "視聴する！";

    newPlayButton.style.setProperty("background-color", defaultButtonColor, "important");
    newPlayButton.style.setProperty("cursor", "pointer", "important");
    newPlayButton.onclick = openVideo;

    newPlayButton.addEventListener("mouseover", (event) => {
        newPlayButton.style.setProperty("background-color", hoveredButtonColor, "important");
    });

    newPlayButton.addEventListener("mouseleave", (event) => {
        newPlayButton.style.setProperty("background-color", defaultButtonColor, "important");
    });

    return newPlayButton;
};

setInterval("replacePlayButton()", 1000);
