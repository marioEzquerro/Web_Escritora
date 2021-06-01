/****************
EFECTOS EN SCROLL
*****************/

let activado = false;
const imgFade = 650; // altura con opcacidad 0

window.addEventListener('scroll', function() {
  /*
  EFECTO FADE Y BARRA DE PROGRESO
  */
  const scrollActual = window.pageYOffset; // altura del scroll

  const alturaPag = $(document).height() - $(window).height();
  let porcentaje = Math.floor((scrollActual * 110) / alturaPag);
  
  if (scrollActual <= imgFade) {
    opacity = 1.1 - (scrollActual / imgFade); 
  } else {
    opacity = 0.1; 
  }
  
  $("#scroll").css("width", porcentaje+"%");
  $(".img-portada").css("opacity", opacity);


/*
ANIMACIONES GENERALES
*/

  //triggerer de pantalla en altura=...
  let triggerImg = window.innerHeight/1.5;
  let triggerSeccion = window.innerHeight/2;
 
  //obtenemos id de elemento
  let fotoAutora = document.getElementById('img-anim-foto-autora');
  let fotoManif = document.getElementById('img-anim-manif');
  let fotoLibro = document.getElementById('img-anim-portada-libro');

  //su posicion en cuanto a altura en la pagina
  let posImg1 =  fotoAutora.getBoundingClientRect().top;
  let posImg2 =  fotoManif.getBoundingClientRect().top;
  let posImg3 =  fotoLibro.getBoundingClientRect().top;

  // condiciones animaciones varias
  if (posImg1 < triggerImg ){
    fotoAutora.style.animation = 'mover 1.5s forwards ease-out';
  }
  if (posImg2 < triggerImg){
    fotoManif.style.animation = 'mover 1.5s forwards ease-out';
  }
  if (posImg3 < triggerImg){
    fotoLibro.style.animation = 'mover 1.5s forwards ease-out';
  }

/*
  PARTE SECCIONES
*/
  // id del h1 con el titulo de seccion
  let secContexto = document.getElementById('contexto');
  let secEscritora = document.getElementById('escritora');
  let secFragmento = document.getElementById('fragmento');
  let secRealismo = document.getElementById('realismo');

  // h1 descripcion de que seccion estas
  let seccionActual = document.getElementById('desc-seccion-actual');

  // posicion de elemeto en la pantalla
  let posContexto = secContexto.getBoundingClientRect().top;
  let posEscritora = secEscritora.getBoundingClientRect().top;
  let posFragmento = secFragmento.getBoundingClientRect().top;
  let posRealismo = secRealismo.getBoundingClientRect().top;
  

  // condicones para cada seccion
  if (posContexto < triggerSeccion) {
    seccionActual.innerHTML="Contexto";
  }
  if (posEscritora < triggerSeccion){
    seccionActual.innerHTML="Escritora";
  }
  if (posFragmento < triggerSeccion){
    seccionActual.innerHTML="Fragmento";
  }
  if (posRealismo < triggerSeccion) {
    seccionActual.innerHTML="México y Garro";
  }

});

/**********
EFECTO ESCTITUTA PARRAFO
***********/

function escribirContenido(velocidad) {
  // almacenamos el elemento parrafo y su contenido
  let contenido = quote.innerHTML;

  quote.innerHTML=""
  quote.style.opacity="1";
  i=0;

  // bucle que escribe letra a letra el contenido de "p"

  let escribir = setInterval(function(){
    if (i < contenido.length) {
      quote.innerHTML+=contenido[i];
      i++;
    }else {
      clearInterval(escribir)
    }
  },velocidad)
}
