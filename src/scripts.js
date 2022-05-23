chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    const partId = new URL(location.href).searchParams.get("partId");

    if (partId) {
        const playUrl = `https://animestore.docomo.ne.jp/animestore/sc_d_pc?partId=${partId}`;
        window.open(playUrl);
    }

    return true;
});
