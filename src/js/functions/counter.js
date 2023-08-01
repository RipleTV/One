import one_piece from "/src/json/one-piece.json";
import './getDataFromJson.js'

const anime = await getDataFromJSON(one_piece); 

let summarySize = 0;
let summaryEpisodes = 0;


let isCheckmarked = (id) => document.getElementById(id).checked;
 
let updateSummarySize = function(seasonNumber) {

    if (isCheckmarked('season' + seasonNumber)) {
        summarySize += Number(anime.season[seasonNumber].size);
        summaryEpisodes += Number(anime.season[seasonNumber].episodes);
    } else {
        summarySize -= Number(anime.season[seasonNumber].size);
        summaryEpisodes -= Number(anime.season[seasonNumber].episodes);
    }
};

function editSizeTitle() {
    let title = document.getElementById('anime__download__size');
    let text = "Total: " + summarySize + " GB [" + summaryEpisodes + " episodes]";

    title.innerHTML = text;
}

window.countSummarySizeWithSeason = (seasonNumber) => {
    updateSummarySize(seasonNumber);
    editSizeTitle();
}