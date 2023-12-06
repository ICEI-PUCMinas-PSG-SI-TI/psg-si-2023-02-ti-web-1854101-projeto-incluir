let searchBox = document.querySelector('#search-box');
let images = document.querySelectorAll(' .container .image-container .image');

searchBox.oninput = () => {

    images.forEach(hide => hide.style.display = "none");
    let value = searchBox.value;

    images.forEach(filter => {

        let title = filter.getAttribute('data-title');

        if (value == title) {
            filter.style.display = 'block';
        }

        if (searchBox.value == '') {
            filter.style.display = 'block';
        }
    })
}
function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src ="img/menu_white_36dp.svg"
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src ="img/close_white_36dp.svg"
    }
}