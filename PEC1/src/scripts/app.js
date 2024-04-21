
function menu() {
    let menuOptions = document.getElementById("menu-options");
    let menuBtn = document.getElementById("menu-btn");
    let header = document.getElementById("header");
    let body = document.getElementsByTagName("body")[0];
    let footer = document.getElementsByTagName("footer")[0];

    if (menuOptions.className.search('hide') != -1) {
        window.scrollTo(0, 0)
        menuOptions.className = "menu__options-menu show";
        footer.style.visibility = "visible";
        footer.style.bottom = 0;
        header.style.height = "100vh";
        body.style.overflow = "hidden";
        menuBtn.textContent = "cerrar menú";

    }
    else {
        menuOptions.className = "menu__options-menu hide";
        footer.style.visibility = "hidden";
        header.style.height = "auto";
        body.style.overflow = "auto";
        menuBtn.textContent = "menú";
    }
}


let presentationSection = [
    {
        title: 'ultimas noticias',
        imgSrc: './assets/images/Mago de Oz.jpg'
    },
    {
        title: 'conoce mago de oz',
        imgSrc: './assets/images/grupo.jpg'
    },
    {
        title: 'proximos conciertos',
        imgSrc: './assets/images/concierto.jpg'
    },
];

let news = [
    {
        title: 'Zeta no continua con la banda',
        sectionIntro: 'después de meses luchando Zeta ha decidido no continuar aunque deja la puerta abierta',
        link: 'https://magodeozoficial.com/zeta-sufre-una-recaida-y-no-continuara-en-mago-de-oz-por-motivos-de-salud/',
        href: './detalle.html'
    },
    {
        title: 'entrevista para los 40 principales',
        sectionIntro: 'en esta entrevista la banda repasa las últimas participaciones españolas en Eurovisión',
        link: 'https://los40.com/2024/04/10/mago-de-oz-sobre-eurovision-tiene-que-ir-gente-mas-joven-y-no-la-mieda-que-estan-mandando-ultimamente/',
        href: ''
    },
    {
        title: 'Presentación gira 2024',
        sectionIntro: 'Mago de Oz inicia su gira en Madrid en una mañana repleta de rock y letras reivindicativas',
        link: 'https://www.msn.com/es-es/entretenimiento/musica/mago-de-oz-inicia-su-gira-en-madrid-en-una-ma%C3%B1ana-repleta-de-rock-y-letras-reivindicativas/ar-BB1lEQai',
        href: ''
    },
    {
        title: 'Presentación en Veracruz',
        sectionIntro: 'Se acerca la presentación de Mägo de Oz en Veracruz no te pierdas la fecha y la sede',
        link: 'https://www.diariodexalapa.com.mx/doble-via/concierto-de-mago-de-oz-en-veracruz-sedes-fechas-y-horarios-11774260.html#!',
        href: ''
    }
]


function next(event) {
    let sectionElto = event.srcElement.parentElement.parentNode.parentElement;
    let sectionEltoId = event.srcElement.parentElement.parentNode.parentElement.id;
    let portadaMainElto = document.querySelector('#' + sectionEltoId + ' > .portada__main');
    let sectionTitle = document.querySelector("#" + sectionEltoId + " > h1 > .section__title");
    let sectionIntro = document.querySelector("#" + sectionEltoId + " > .section__intro");
    let groupPagesEltos = event.srcElement.parentElement.children;
    let nextClickedBtn = event.target;
    let nextClickedBtnId = event.target.id;
    let mainTitleElto = portadaMainElto.firstElementChild;
    let imagesEltos = document.querySelectorAll("#" + sectionEltoId + " > ." + portadaMainElto.className + " > img");

    for (let numNextElto = 0; numNextElto < groupPagesEltos.length; numNextElto++) {
        groupPagesEltos[numNextElto].classList.remove('active');
    }

    for (let numNextImg = 0; numNextImg < imagesEltos.length; numNextImg++) {
        imagesEltos[numNextImg].className = "portada__image hide"
    }

    if (sectionTitle != null) {
        sectionIntro.textContent = news[nextClickedBtnId].sectionIntro;
        mainTitleElto.firstElementChild.textContent = news[nextClickedBtnId].title;
        mainTitleElto.firstElementChild.href = news[nextClickedBtnId].href;
    }
    else {
        mainTitleElto.firstElementChild.textContent = presentationSection[nextClickedBtnId].title;
    }

    nextClickedBtn.classList.add('active');
    imagesEltos[nextClickedBtnId].classList.remove('hide');
    imagesEltos[nextClickedBtnId].classList.add('show');

    currentCategory = sectionEltoId == "presentation-section" ? nextClickedBtnId : currentCategory;
    currentNew = sectionEltoId == "news-section" ? nextClickedBtnId : currentNew;
}

let currentCategory = 0;
let currentNew = 0;

function nextAutomatic(sectionEltoId, currentElto) {
    let portadaMainElto = document.querySelector('#' + sectionEltoId + ' > .portada__main');

    if (portadaMainElto == null) return;

    let sectionTitle = document.querySelector("#" + sectionEltoId + " > h1 > .section__title");
    let sectionIntro = document.querySelector("#" + sectionEltoId + " > .section__intro");
    let groupPagesEltos = document.querySelectorAll("#" + sectionEltoId + "> .portada__main > .main__group-pages > div");
    let mainTitleElto = portadaMainElto.firstElementChild;
    let imagesEltos = document.querySelectorAll("#" + sectionEltoId + " > ." + portadaMainElto.className + " > img");

    for (let numNextElto = 0; numNextElto < groupPagesEltos.length; numNextElto++) {
        groupPagesEltos[numNextElto].classList.remove('active');
    }

    for (let numNextImg = 0; numNextImg < imagesEltos.length; numNextImg++) {
        imagesEltos[numNextImg].className = "portada__image hide"
    }

    if (sectionTitle != null) {
        sectionIntro.textContent = news[currentElto].sectionIntro;
        mainTitleElto.firstElementChild.textContent = news[currentElto].title;
        mainTitleElto.firstElementChild.href = news[currentElto].href;
    }
    else {
        mainTitleElto.firstElementChild.textContent = presentationSection[currentElto].title;
    }

    groupPagesEltos[currentElto].classList.add('active');
    imagesEltos[currentElto].classList.remove('hide');
    imagesEltos[currentElto].classList.add('show');
}

setInterval(
    function () {
        nextAutomatic("presentation-section", currentCategory);
        if (currentCategory < 2) {
            currentCategory++;
        }
        else {
            currentCategory = 0;
        }
    }, 5000);

setInterval(
    function () {
        nextAutomatic("news-section", currentNew);
        if (currentNew < 3) {
            currentNew++;
        }
        else {
            currentNew = 0;
        }
    }, 5000);

function nextMenu(event) {

    let iconsMenu = document.querySelectorAll(".content__menu > img");
    let iconClicked = event.target;
    let iconClickedId = event.target.id;
    let articles = document.querySelectorAll(".content__info > article");

    for (let numIcon = 0; numIcon < iconsMenu.length; numIcon++) {
        iconsMenu[numIcon].className = "menu__icon";
    }

    for (let numArticle = 0; numArticle < articles.length; numArticle++) {
        articles[numArticle].className = "info__block hide";
    }

    iconClicked.classList.add("icon-active");
    articles[iconClickedId].className = "info__block";

    currentOption = iconClickedId;
}

let currentOption = 0;

function nextMenuAutomatic(event) {

    let iconsMenu = document.querySelectorAll(".content__menu > img");
    let articles = document.querySelectorAll(".content__info > article");

    if (articles.length == 0) return;

    for (let numIcon = 0; numIcon < iconsMenu.length; numIcon++) {
        iconsMenu[numIcon].className = "menu__icon";
    }

    for (let numArticle = 0; numArticle < articles.length; numArticle++) {
        articles[numArticle].className = "info__block hide";
    }

    articles[currentOption].className = "info__block";
    iconsMenu[currentOption].className = "menu__icon icon-active";

    if (currentOption < 7) {
        currentOption++;
    }
    else {
        currentOption = 0;
    }
}

setInterval(nextMenuAutomatic, 5000);

function menuOption(event) {

    let optionClicked = event.target;
    let headerMenuOptions = document.querySelectorAll(".options-menu__elto > a");

    for (let numOption = 0; numOption < headerMenuOptions.length; numOption++) {
        headerMenuOptions[numOption].className = "elto__link";
    }

    optionClicked.className = "elto__link menu-active";
}


document.getElementById("menu-btn").addEventListener("click", menu);
let nextBtnCollection = document.querySelectorAll("#presentation-section > .portada__main > .main__group-pages > div");
let nextBtnCollection1 = document.querySelectorAll("#news-section > .portada__main > .main__group-pages > div");
let iconBtn = document.querySelectorAll(".content__menu > img");
let headerMenuOptions = document.querySelectorAll(".options-menu__elto > a");

nextBtnCollection.forEach(nextBtn => {
    nextBtn.addEventListener("click", next);
});

nextBtnCollection1.forEach(nextBtn1 => {
    nextBtn1.addEventListener("click", next);
});

headerMenuOptions.forEach(headerMenuOption => {
    headerMenuOption.addEventListener("click", menuOption);
    headerMenuOption.className = "elto__link";
});

iconBtn.forEach(nextBtn1 => {
    nextBtn1.addEventListener("click", nextMenu);
});

if (document.querySelector(".category") && document.querySelector(".category").clientWidth > 768) {
    let footer = document.getElementById("footer");

    footer.style.opacity = 1;
    footer.style.position = "relative";
}

if (document.querySelector(".detalle") && document.querySelector(".detalle").clientWidth > 768) {
    let footer = document.getElementById("footer");

    footer.style.opacity = 1;
    footer.style.position = "relative";
}

if (document.querySelector(".presentacion") && document.querySelector(".presentacion").clientWidth > 768) {
    let footer = document.getElementById("footer");

    footer.style.opacity = 1;
    footer.style.position = "relative";

    headerMenuOptions[0].className = "elto__link menu-active";
}

if (document.querySelector(".enlaces") && document.querySelector(".enlaces").clientWidth > 768) {
    let footer = document.getElementById("footer");
    let body = document.body;

    footer.style.opacity = 1;
    footer.style.position = "relative";

    headerMenuOptions[1].className = "elto__link menu-active";
}