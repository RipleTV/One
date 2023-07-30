// Switch contentEditable option 
let isContenteditable = (id) => document.getElementById(id).contentEditable === 'true';

window.switchContenteditable = (id) => {
    (isContenteditable(id) === true) ? 
        document.getElementById(id).contentEditable = false :
        document.getElementById(id).contentEditable = true;
};

// Image switcher
const mapImage = new Map();

mapImage.set('onepiece-1080', '/assets/img/onepiece_quality_1080.jpg');
mapImage.set('onepiece-720', '/assets/img/onepiece_quality_720.jpg');
mapImage.set('onepiece-420', '/assets/img/onepiece_quality_420.jpg');
mapImage.set('onepiece-360', '/assets/img/onepiece_quality_360.jpg');

window.changeImageQuality = function(quality) {
    picture = document.getElementById('anime__quality--picture');
    picture.src = mapImage.get(quality);
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