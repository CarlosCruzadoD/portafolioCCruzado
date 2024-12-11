import * as card from './js/cards.js';
var btnAboutSobreMi = document.getElementById("btn-about-me");
var btnAboutHabilidades = document.getElementById("btn-about-education");
const tituloAbout = document.querySelector(".about-title");
const parrafoAbout = document.querySelector(".paragraph-about");
const parrafoEducacion = document.querySelector(".paragraph-skills");
const imgAbout = document.querySelector('.img-about');
const cartaPortafolio = document.querySelector(".cards-portfolio");
let proyectos = [];
// Usando fetch para leer el archivo JSON
fetch('src/proyectos.json')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json(); // Convierte la respuesta a un objeto JSON
  })
  .then(data => {
    proyectos = data;
    proyectos.forEach(info => {
        cartaPortafolio.innerHTML += card.default.carta(
            info.titulo, info.tipo, info.tecnologias
        );
    })
    const allCard = document.querySelectorAll('.card');
    allCard.forEach(element => {
        const btnInfo = element.querySelector('.btn-info-card');
        btnInfo.addEventListener('click', ()=>{
            const titulo = element.querySelector('.contents p').textContent;
            window.location.href = `infoPortafolio.html?titulo=${encodeURIComponent(titulo)}`
        })
    });
  })
  .catch(error => {
    console.error('Hubo un problema con la solicitud fetch:', error);
  });


let about = localStorage.getItem('about') || null;
if(about != null){
    if(about == 'sobremi')btnSobreMi();
    else if(about == 'habilidades')btnHabilidades();
}

// Metodo para abrir y cerrar el menu responsive

let btnOpenMenu = document.getElementsByClassName("btn-menu");
let btnCloseMenu = document.getElementsByClassName("btn-close-menu");
let menu = document.querySelector(".menu-end");
let lista = document.querySelectorAll('.option-nav-menu');


function abrirMenu() {
    menu.classList.replace('menu-end','menu-start');
    document.body.style.overflow = 'hidden'
    lista.forEach(element => {
        element.classList.add('transform-menu')
    });
    btnCloseMenu[0].classList.add('transform-btn-menu');
}
function cerrarMenu(){
    menu.classList.replace('menu-start','menu-end');
    document.body.style.overflow = 'auto'
    lista.forEach(element => {
        element.classList.remove('transform-menu')
    });
    btnCloseMenu[0].classList.remove('transform-btn-menu');
}
btnOpenMenu[0].addEventListener('click', abrirMenu)
btnCloseMenu[0].addEventListener('click', cerrarMenu)

let check = document.getElementById("check-btn-cv");
let header = document.getElementById("header");
let btn = document.querySelector(".btn-hidden")
var sticky = header.offsetTop;
var listMenu =document.querySelectorAll(".option-nav");

window.addEventListener("scroll", function(){
    if (window.scrollY > sticky + 500) {        
        header.classList.add("sticky");
        check.checked = true ;
        if( window.innerWidth < 1024){
            listMenu.forEach((lista) =>{
                lista.classList.add("nav-w-btn");
            })
        }        
      } else {
        header.classList.remove("sticky");
        check.checked = false ;
        listMenu.forEach((lista) =>{
            lista.classList.remove("nav-w-btn");
        })
      }
})

if( window.innerWidth > 720){
    btn.innerHTML = "Descargar CV"
}else {
    btn.innerHTML = "CV"
}

//funciones para botones en about


function btnSobreMi(){    
    btnAboutHabilidades.classList.remove("btn-focus");
    btnAboutSobreMi.classList.add("btn-focus");
    cambioAboutTexto("Sobre Mí:");
    parrafoAbout.classList.remove('invisible');
    parrafoEducacion.classList.add('invisible');
    localStorage.setItem('about', 'sobremi');
    cambioAboutImagen('src/img/image/aboutSVG.svg');
}
function btnHabilidades(){
    btnAboutSobreMi.classList.remove("btn-focus");
    btnAboutHabilidades.classList.add("btn-focus");
    cambioAboutTexto("Educacion:");
    parrafoAbout.classList.add('invisible');
    parrafoEducacion.classList.remove('invisible');
    cambioAboutImagen('src/img/image/educationSVG.svg');
    localStorage.setItem('about', 'habilidades');
}

btnAboutSobreMi.addEventListener("click", btnSobreMi);
btnAboutHabilidades.addEventListener("click", btnHabilidades);



function cambioAboutTexto(texto) {
    tituloAbout.style.animation = null;
    void tituloAbout.offsetWidth;
    tituloAbout.innerHTML = texto;
    tituloAbout.style.animation = "cambioAbout 0.5s ease-in-out";    
}
function cambioAboutImagen(src) {
    imgAbout.style.animation = null;
    void imgAbout.offsetWidth;
    imgAbout.src = src;
    imgAbout.style.animation = "cambioAbout 0.5s ease-in-out";    
}


//-----------------------------------------------------------------
//Animaciones para cada Secccion
//-----------------------------------------------------------------

const secciones = document.querySelectorAll(".section-header");


function animation(entries){    
    entries.forEach(entry => {
        const targetString = entry.target.classList.value
        const imageD = document.querySelector('.image-section');
        const infoA = document.querySelector('.section-info');

        const cardsDivP = document.querySelector('.cards-portfolio');

        const infoContact = document.querySelector('.info-contact')
        const iconContact = document.querySelector('.icon-contact-container')
        if(entry.isIntersecting){
            if(targetString.includes("about-selector")){
                imageD.classList.add('unset');
                infoA.classList.add('unset');
                cambioAboutImagen('src/img/image/aboutSVG.svg');
            }
            if(targetString.includes("portfolio-selector")){
                cardsDivP.classList.add('unset');
            }
            if(targetString.includes("contact-selector")){
                infoContact.classList.add('unset');
                iconContact.classList.add('unset');
            }
        }else{
            if(targetString.includes("about-selector")){
                imageD.classList.remove('unset');
                infoA.classList.remove('unset');
            }
            if(targetString.includes("portfolio-selector")){
                cardsDivP.classList.remove('unset');
            }
            if(targetString.includes("contact-selector")){
                infoContact.classList.remove('unset');
                iconContact.classList.remove('unset');
            }
        }
    })    
}
const optionsSection = {
    threshold: window.innerWidth > 720 ? 1 : 0
}

const observerSection = new IntersectionObserver(animation, optionsSection);
secciones.forEach(seccion => {
    observerSection.observe(seccion);
})

//----------------------------------------------------------------------------------------
//Barra del Header
//----------------------------------------------------------------------------------------
function headerPlace(entries){
    entries.forEach(entry => {
        const targetString = entry.target.classList.value;
        let homePageBool = targetString.includes("home-selector") && entry.isIntersecting ? true : false;
        let aboutPageBool = targetString.includes("about-selector") && entry.isIntersecting ? true : false;
        let portPageBool = targetString.includes("portfolio-selector") && entry.isIntersecting ? true : false;
        let contactPageBool = targetString.includes("contact-selector") && entry.isIntersecting ? true : false;
        if(homePageBool)seleccionarElemento("Inicio");
        if(aboutPageBool) seleccionarElemento("Sobre mi");
        if(portPageBool) seleccionarElemento("Portafolio");
        if(contactPageBool) seleccionarElemento("Contacto");
    })
}

function seleccionarElemento(content){
    let list;
    
    const listaHeader = document.querySelectorAll('.option-nav');
    for(const item of listaHeader){
        item.querySelector('.bar-option-nav').classList.remove('bar-option-nav__unset');
        let homeBool = item.textContent == content;
        if(homeBool){
            list = item.querySelector('.bar-option-nav');
            list.classList.add('bar-option-nav__unset');
        }
    }    
    const listaMenuHeader = document.querySelectorAll('.option-nav-menu');
    for(const itemMenu of listaMenuHeader){        
        itemMenu.querySelector('i').style.opacity = 0;
        let menuBool = itemMenu.textContent.trim() == content;        
        if(menuBool){
            itemMenu.querySelector('i').style.opacity = 1;
        }
        cerrarMenu();
    }   
}
const optionsHeader = {
    threshold: window.innerWidth > 1024 ? 1 : 0
}

const observerHeader = new IntersectionObserver(headerPlace, optionsHeader);
secciones.forEach(seccion => {
    observerHeader.observe(seccion);
})