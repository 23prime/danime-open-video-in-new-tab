const openDevelopmentLink = () => {
    window.open("https://github.com/23prime/danime-open-video-in-new-tab");
    window.close();
};

const openContactLink = () => {
    window.open("https://twitter.com/23_prime");
    window.close();
};

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("development").addEventListener("click", openDevelopmentLink);
    document.getElementById("contact").addEventListener("click", openContactLink);
});
