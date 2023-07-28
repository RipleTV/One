// Switch contentEditable option 
function isContenteditable(id) {
    let result = Boolean(document.getElementById(id).contentEditable === 'true');
    return result
}

window.switchContenteditable = function(id) {
    (isContenteditable(id) === true) ? 
        document.getElementById(id).contentEditable = false :
        document.getElementById(id).contentEditable = true;
}

// Image switcher
const mapImage = new Map();

mapImage.set('onepiece-1080', '/assets/img/onepiece_quality_1080.jpg')
mapImage.set('onepiece-720', '/assets/img/onepiece_quality_720.jpg')
mapImage.set('onepiece-420', '/assets/img/onepiece_quality_420.jpg')
mapImage.set('onepiece-360', '/assets/img/onepiece_quality_360.jpg')

window.changeImageQuality = function(quality) {
    picture = document.getElementById('anime__quality--picture');
    picture.src = mapImage.get(quality);
}

// Audio switcher
const mapAudio = new Map();

mapAudio.set('ShachiBuri', '/assets/img/SyncedByShachiburi.mp3')

window.changeAudio = function(authorName) {
    let audio = document.getElementById('anime__synced--player');
    let source = document.getElementById('anime__synced--player-source');    
    
    source.src = mapAudio.get(authorName);

    audio.load();
    audio.play();
}