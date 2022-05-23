const openVideo = () => {
    const partId = new URL(location.href).searchParams.get("partId");

    if (partId) {
        const playUrl = `https://animestore.docomo.ne.jp/animestore/sc_d_pc?partId=${partId}`;
        window.open(playUrl);
    }

    return true;
};

let completed = false;

const setPlayButton = () => {
    if (completed) return;

    console.debug("setPlayButton");
    const playButton = document.getElementsByClassName("normal")[0];

    if (playButton) {
        playButton.innerHTML = "視聴する！";
        playButton.onclick = openVideo;
        completed = true;
    }
};

setInterval("setPlayButton()", 1000);
