import one_piece from "/src/json/one-piece.json";
import './getDataFromJson.js'

const anime = await getDataFromJSON(one_piece); 

window.loadAnimePage = function() {

    loadAnimeTitle();

    createQualityButtons(anime.quality.length);
    loadQualityPreviewImage(anime.quality[3].src);

    createDubblingButtons(anime.dubbed.length);

    createCheckboxes(anime.season.length);
}

    // * ONLY WHILE WORKING WITH ANIME PAGE
    loadAnimePage();
    // *


function loadAnimeTitle() {
    document.getElementById('anime__title').innerText = anime.title;
    document.getElementById('anime__title__picture').src = anime.title_image;
}

function createQualityButtons(amount) {
    let div = document.getElementById('anime__quality');
    let ul = document.createElement('ul');

    ul.className = "anime__quality--options";

    div.prepend(ul)

    for(let i = 0; i < amount; i++) {
        let li = document.createElement('li');
        let button = document.createElement('button');

        button.id = 'quality' + '-' + 'button' + '-' + i;
        button.innerHTML = anime.quality[i].title;
        button.setAttribute("onclick", `changeImageQuality(${i})`);


        ul.prepend(li);
        li.prepend(button);
    }
}

function loadQualityPreviewImage(source) {
    document.getElementById('anime__quality--picture').src = source;
}

function createDubblingButtons(amount) {
    let div = document.getElementById('anime__dubbing--buttons');

    for(let i = 0; i < amount; i++) {
        let button = document.createElement('button');
        let li = document.createElement('li');

        button.className ='button__medium';
        button.id = 'button' + '-' + i;
        button.innerHTML = anime.dubbed[i].name;
        button.setAttribute("onclick", `changeAudio(${i})`);

        if (i % 2 == false) {
            let ul = document.createElement('ul')
            ul.id = 'ul' + '-' + i;

            div.appendChild(ul)
            ul.appendChild(li)
            li.appendChild(button)
        } else {
            let ul = document.getElementById('ul' + '-' + (i - 1));

            ul.appendChild(li);
            li.appendChild(button);
        }
    }
}

function createCheckboxes(amount) {
    let div = document.getElementById('anime__seasons');
    let form = document.createElement('form');
    let ul = document.createElement('ul');

    div.appendChild(form);
    form.appendChild(ul);

    for(let i = 0; i < amount; i++) {
        let li = document.createElement('li');
        let label = document.createElement('label');
        let checkbox = document.createElement('input');
        let formCheckbox = document.createElement('div');


        formCheckbox.className = "form__checkbox";

        checkbox.setAttribute("onclick", `countSummarySizeWithSeason(${i})`);
        checkbox.type = "checkbox";
        checkbox.name = "season" + i;
        checkbox.id = "season" + i;

        label.htmlFor = "season" + i;
        label.innerText = anime.season[i].title;

        ul.appendChild(li);
        li.appendChild(formCheckbox);
        formCheckbox.appendChild(checkbox);
        formCheckbox.appendChild(label);
    }
}