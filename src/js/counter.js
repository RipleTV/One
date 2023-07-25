const seasonSize = [0, 6, 8, 13]
const seasonEpisodes = [0, 12, 12, 24]

let size = 0;
let episodes = 0;

// Size counter
window.sizeCounter = function(number) {
    seasonState = document.getElementById('season' + number).checked

    if (seasonState == true) {
        size = size + seasonSize[number];
        episodes = episodes + seasonEpisodes[number]
    }
    else {
        size = size - seasonSize[number];
        episodes = episodes - seasonEpisodes[number]
    }

    document.getElementById('anime__download__size').innerHTML = "Total: " + size + " GB [" + episodes + " episodes]";
}