const video = document.getElementById("bg-video");
const sources = ["bg1.mp4"];
let current = 0;

video.addEventListener("ended", () => {
    current = (current + 1) % sources.length;
    video.src = sources[current];
    video.play();
});