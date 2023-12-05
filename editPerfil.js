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

//carregar imagem

let photo = document.getElementById('imgPhotoPerfil');
let file = document.getElementById('flImage');

photo.addEventListener('click', () => {
    file.click();
})

file.addEventListener('change', (event) =>{
    let reader = new FileReader();
    reader.onload = () => {
        photo.src = reader.result;
    }
    reader.readAsDataURL(file.files[0])
}) 

//submit
let concluir = document.getElementById('submit-div');
let btnConcluir = document.getElementById('submit-btn');

concluir.addEventListener('click', () => {
    btnConcluir.click();
})






