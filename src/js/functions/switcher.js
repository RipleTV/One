import one_piece from "/src/json/one-piece.json";
import './getDataFromJson.js'

const anime = await getDataFromJSON(one_piece); 

// Switch contentEditable option 
let isContenteditable = (id) => document.getElementById(id).contentEditable === 'true';

window.switchContenteditable = (id) => {
    (isContenteditable(id) === true) ? 
        document.getElementById(id).contentEditable = false :
        document.getElementById(id).contentEditable = true;
};

// Image switcher
window.changeImageQuality = function(number) {
    let picture = document.getElementById('anime__quality--picture');
    picture.src = anime.quality[number].src;
}

// Audio switcher
const mapAudio = new Map();

mapAudio.set('ShachiBuri', '/assets/img/dubbed_by_shachiburi.mp3');

window.changeAudio = function(authorName) {
    let audio = document.getElementById('anime__dubbing--player');
    let source = document.getElementById('anime__dubbing--player-source');    
    
    source.src = mapAudio.get(authorName);

    audio.load();
    audio.play();
};