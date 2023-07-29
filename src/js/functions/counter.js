// Will be changed to JSON in future 


let anime = {
    episodes: [0, 12, 12, 24],
    seasonSize: [0, 7, 9, 16],
}

// Size counter
let summarySize = 0;
let summaryEpisodes = 0;

let isCheckmarked = (id) => document.getElementById(id).checked;
 
let updateSummarySize = function(seasonNumber) {

    if (isCheckmarked('season' + seasonNumber)) {
        summarySize += anime.seasonSize[seasonNumber];
        summaryEpisodes += anime.episodes[seasonNumber];
    }   else    {
        summarySize -= anime.seasonSize[seasonNumber];
        summaryEpisodes -= anime.episodes[seasonNumber];
    }
};

function editSizeTitle() {
    let title = document.getElementById('anime__download__size');
    let text = "Total: " + summarySize + " GB [" + summaryEpisodes + " episodes]"

    title.innerHTML = text;
}

window.countSummarySizeWithSeason = (seasonNumber) => {
    updateSummarySize(seasonNumber);
    editSizeTitle();
};