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