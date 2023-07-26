// Switch contentEditable option 
window.switcherContenteditable = function() {
    // Get data from "...nickname-span" and convert to boolean
    let state = (document.getElementById('profile__nickname--nickname-span').contentEditable === 'true');

    if (state == false) {
        document.getElementById('profile__nickname--nickname-span').contentEditable = "true";
    }
    else {
        document.getElementById('profile__nickname--nickname-span').contentEditable = "false";
    }
}

// Image switcher
const mapImage = new Map();

mapImage.set(1080, '/assets/img/onepiece_quality_1080.jpg')
mapImage.set(720, '/assets/img/onepiece_quality_720.jpg')
mapImage.set(420, '/assets/img/onepiece_quality_420.jpg')
mapImage.set(360, '/assets/img/onepiece_quality_360.jpg')

window.changeImageQuality = function(number) {
    document.getElementById('anime__quality--picture').src = mapImage.get(number)
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