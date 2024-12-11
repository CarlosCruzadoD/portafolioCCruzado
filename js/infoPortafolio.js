const variableRecibida = getQueryParam('titulo');

console.log('Variable recibida:', variableRecibida);
async function obtenerProyectos() {
  try{
    const response = await fetch('src/proyectos.json');
    if(!response.ok){
      throw new Error('Error al cargar el archivo JSON');
    }
    const datos = await response.json();
    return datos;
  }catch (error) {
    console.error('Error al cargar los datos:', error);
    throw error; // Lanza el error para que pueda manejarse donde se llame la función
  }
}
function getQueryParam(param){
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}
let proyectoActual;
async function main() {
  try{
    let proyectos = await obtenerProyectos();
    proyectos.forEach(element => {
      if(element.titulo == variableRecibida){
        proyectoActual = element;
      }
    });
    console.log(proyectoActual)
    
    if(variableRecibida ==  null || variableRecibida ==  "" || proyectoActual ==  null ){
      console.log('mamahuevo')
      document.querySelector('main').innerHTML = "<div class='error-container'>" +
      "<span class='error'> Error 404</span>" +
      "<span class = 'error-info'> Pagina no encontrada</span>"
      "</div>";
    }else{
      const titulo = document.querySelector('.titulo h1');
      const tipo = document.querySelector('.titulo span');
      const desc = document.querySelector('.descripcion p');
      const tecnologias = document.querySelector('.tecnologias-container ul');
      const evidencia = document.querySelector('.imagenes-evidencia');
      const link = document.querySelector('.span-link a');
      const code = document.querySelector('.span-code a');
      const linkPag = document.querySelector('.link-pag a');
      const linkCod = document.querySelector('.link-cod a');
      proyectoActual.tecnologias.forEach(element => {
        tecnologias.innerHTML += `<li>${element}</li>`
      });
      proyectoActual.imagen.forEach(element => {
        evidencia.innerHTML += `<img src=${element} alt="" >`
      });
      if(proyectoActual.link == ""){
        document.querySelector('.span-link').classList.add('display-none');
      }else {
        document.querySelector('.span-link').classList.remove('display-none');
        link.innerHTML = proyectoActual.link;
        linkPag.href = proyectoActual.link;
      }
      document.title = proyectoActual.titulo;
      titulo.innerHTML = proyectoActual.titulo;
      tipo.innerHTML = proyectoActual.tipo;
      desc.innerHTML = proyectoActual.descripcion;
      code.innerHTML = proyectoActual.github;
      linkCod.href = proyectoActual.github;
    }

    
  }catch (error) {
    console.error('Hubo un problema al ejecutar el programa:', error);
  }
  
}
main();
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
  const btnHeader = document.querySelectorAll(".container-list li");
  btnHeader.forEach(btn => {
    btn.addEventListener('click', ()=>{
      const href = btn.querySelector('a').href;
      window.location.href = `index.html#${href.split("#")[1]}`
    })
  });






