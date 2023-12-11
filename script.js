let openMenu = document.querySelector('.explore');
let dropdown = document.querySelector('.dropdown_menu');
openMenu.addEventListener('click', (e) => {
    e.stopPropagation();
    if (dropdown.classList.contains('show_dropdown')) {
        dropdown.classList.remove('show_dropdown');
    } else {
        dropdown.classList.add("show_dropdown");
    }
})

document.body.addEventListener('click', () => {
    dropdown.classList.remove('show_dropdown');
})


let signInHeader = document.querySelector('.signIn-header');
let joinInHeader = document.querySelector('.joinIn-header');

signInHeader.addEventListener('click', () => {
    joinInHeader.classList.remove('selected-header')
    signInHeader.classList.add('selected-header')
})

joinInHeader.addEventListener('click', () => {
    signInHeader.classList.remove('selected-header')
    joinInHeader.classList.add('selected-header')
})