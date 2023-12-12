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


function menuShow() {
    var mobileMenu = document.querySelector('.mobile-menu');
    mobileMenu.classList.toggle('open');

    var navBar = document.querySelector('.nav-bar');
    navBar.classList.toggle('open');
}




    function toggleSidebar() {
        var sidebar = document.querySelector('.sidebar');
        sidebar.classList.toggle('open');
    }




function carregar() {
    fetch('lugares.json')
        .then(response => response.json())
        .then(lugares => {
            lugares.forEach(lugar => {
                const card = document.createElement("div");
                card.classList.add("card");

                const img = document.createElement("img");
                img.src = lugar.Imagem;
                img.alt = lugar.nome;
                card.appendChild(img);

                const titulo = document.createElement("h3");
                titulo.textContent = lugar.nome;
                card.appendChild(titulo);

                const starContainer = document.createElement("div");
                starContainer.classList.add("star-container");

                for (let i = 1; i <= 5; i++) {
                    const starIcon = document.createElement("i");
                    starIcon.classList.add("fas", "fa-star");
                    starIcon.setAttribute("data-rating", i);
                    starIcon.addEventListener("click", () => handleRating(card, lugar, i));
                    starContainer.appendChild(starIcon);
                }

                card.appendChild(starContainer);

                document.getElementById("lugares-container").appendChild(card);
            });
        });
}

function handleRating(card, lugar, rating) {
    lugar.rating = rating;

    const starIcons = card.querySelectorAll(".fa-star");
    starIcons.forEach(star => star.classList.remove("rated"));

    for (let i = 0; i < rating; i++) {
        starIcons[i].classList.add("rated");
    }
}

carregar();