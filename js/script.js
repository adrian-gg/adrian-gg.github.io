$(document).ready(function(){
    const ContenedorGeneral = $('#CONTENEDOR-GENERAL');
    const ContenedorPaginas = $('#CONTENEDOR-PAGINAS');
    let fristTime = true;
    let pagina = 'inicio';
    let scrollParent;
    let worksParent;
    let worksProyecto;
    let worksTamanyoProyecto;
    let worksCoordenadasProyecto;
    let color= 0;
    let widthS = $(window).width(), heightS = $(window).height();
    let device = widthS > heightS ? "PC" : "MOBIL";

    setTimeout(function(){
      ContenedorGeneral.css('opacity', '1');
    }, 500);

    $(window).resize(function(){
        widthS = $(window).width();
        heightS = $(window).height();
        device = widthS > heightS ? "PC" : "MOBIL";
    })

    /* ============================== AJAX ============================== */

    function cargarPagina(pagina){
        $.ajax({
            url: pagina + '.html', 
            success: function(data){

              ContenedorPaginas.html(data);

                if(pagina == 'works' || pagina == 'about'){
                    $('#MENU-principal').removeClass('MENU-principal--inicio');

                    setTimeout(function(){
                      $('#MENU-principal').addClass('MENU-principal--about');
                    }, 600);

                }else{
                    $('#MENU-principal').addClass('MENU-principal--inicio');
                    $('#MENU-principal').removeClass('MENU-principal--about');
                }

                if(pagina == 'works'){                  
                  abrirCerrarMenu();
                  $('#MENU-principal').removeClass('MENU-principal--centrado');
                  /* setTimeout(function(){ //Tiempo carga imagenes
                      

                  }, 300); */

                }else{
                    abrirCerrarMenu();

                    if(pagina == 'about' || pagina == 'contact'){
                        $('#MENU-principal').addClass('MENU-principal--centrado');
                    }else{
                        $('#MENU-principal').removeClass('MENU-principal--centrado');
                    }

                }
            }
        });
    }

    cargarPagina(pagina);




    /* ============================== CONTENIDO ADICIONAL ============================== */

    /* -- MODO CINE -- */
    let elem = document.documentElement;
    ContenedorGeneral.on('click', '.hobbie__icono-cine', function(){
        $(".modo-cine").toggleClass("modo-cine--activo");

        if($(".modo-cine").hasClass("modo-cine--activo")){
            openFullscreen()
        }else{
            closeFullscreen()
        }
    });
    /* View in fullscreen */
    function openFullscreen() {
        if (elem.requestFullscreen) {
            elem.requestFullscreen();
        } else if (elem.webkitRequestFullscreen) { /* Safari */
            elem.webkitRequestFullscreen();
        } else if (elem.msRequestFullscreen) { /* IE11 */
            elem.msRequestFullscreen();
        }
    }
    /* Close fullscreen */
    function closeFullscreen() {
        if (document.exitFullscreen) {
        document.exitFullscreen();
        } else if (document.webkitExitFullscreen) { /* Safari */
        document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) { /* IE11 */
        document.msExitFullscreen();
        }
    }

        
    /* -- MODO VIDEOJUEGOS -- */

    /* -- MODO MUSICA -- */    
    let abriendoReproductor = false;
    let abriertoReproductor = false;
    let scrollActual = 0;
    let scrollMax;
    let cancion = new Audio('assets/audio/music/song0.mp3');
    let numCancion = 0;
    let cancionPlay = false;
    let nombreC = SONGS[0].name;
    let autorC = SONGS[0].author;
    let duracionC = SONGS[0].duration;
    let contadorSec = 0;
    let segundosIntervalo;
    
    ContenedorGeneral.on('click', '.hobbie__icono-musica', function(){
      const scrollBox = $('#ARTI-about .simplebar-content-wrapper');
      scrollMax = scrollBox[0].scrollHeight - scrollBox.outerHeight();
      
      //scrollBox.scrollTop(scrollMax+1);
      if(abriertoReproductor == false){
        abriertoReproductor = true;
        scrollBox.scrollTop(scrollMax-((scrollMax/10)*5));
        ajustarVolumen(scrollMax-((scrollMax/10)*5), scrollMax);
      }else{
        abriertoReproductor = false;
      }

      scrollBox.scroll( function() {        
        if(abriendoReproductor == false){
          scrollActual = scrollBox.prop("scrollTop");
          ajustarVolumen(scrollActual, scrollMax);
        }
      });     
      

      if(abriendoReproductor == false){
          abriendoReproductor = true; 
          
          $(".ARTI-about__rrss").toggleClass("modo-musica--activo");
          $(".ARTI-about__presentacion").toggleClass("modo-musica--activo");
          $("#MENU-principal").toggleClass("modo-musica--activo");
  
          if($(".ARTI-about__rrss").hasClass("modo-musica--activo")){
              $('.ARTI-about__yo-nombre').addClass('reproductorActivo');
              setTimeout(()=>{
                  imprimirCancion();
                  $('.ARTI-about__yo-nombre').removeClass('reproductorActivo');
              }, 250);
              
          }else{
              cancion.pause();
              $('.ARTI-about__yo-nombre').addClass('reproductorActivo');
              $('.rrss-faces--play').empty().append('<svg style="transform: rotateY(180deg)" xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44"><g transform="translate(-1290 -118)"><rect width="44" height="44" transform="translate(1290 118)" fill="none"/><path d="M13.136,1.481a1,1,0,0,1,1.728,0L27.123,22.5a1,1,0,0,1-.864,1.5H1.741a1,1,0,0,1-.864-1.5Z" transform="translate(1328 126) rotate(90)"/></g></svg>');
              cancionPlay = false;
              clearTimeout(segundosIntervalo);
              setTimeout(()=>{
                  $('.ARTI-about__yo-nombre.lang-ES .yo-nombre').empty().append('Adrián García')
                  $('.ARTI-about__yo-nombre.lang-ES .yo-trabajo').empty().append('Diseñador&nbsp;Gráfico <span id="txt-barra">|</span> Desarrollador&nbsp;Web')
                  $('.ARTI-about__yo-nombre.lang-EN .yo-nombre').empty().append('Adrián García')
                  $('.ARTI-about__yo-nombre.lang-EN .yo-trabajo').empty().append('Graphic&nbsp;Designer <span id="txt-barra">|</span> Web&nbsp;Developer')
                  $('.ARTI-about__yo-nombre').removeClass('reproductorActivo');
                  
              }, 250)
              
          }
          setTimeout(()=>{abriendoReproductor = false},700); 
      }
    });
    ContenedorGeneral.on('click', '.rrss-faces--play', function(){
      if(cancionPlay == false){
        cancionPlay = true;
        $('.rrss-faces--play').empty().append('<svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44"><g transform="translate(-1540 -118)"><g transform="translate(1551.286 126.286)"><rect width="8" height="28" rx="1" transform="translate(-0.286 -0.286)"/><rect width="8" height="28" rx="1" transform="translate(14.714 -0.286)"/></g><rect width="44" height="44" transform="translate(1540 118)" fill="none"/></g></svg>');
        cancion.play();
        crearIntervalo();

      }else{
        $('.rrss-faces--play').empty().append('<svg style="transform: rotateY(180deg)" xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44"><g transform="translate(-1290 -118)"><rect width="44" height="44" transform="translate(1290 118)" fill="none"/><path d="M13.136,1.481a1,1,0,0,1,1.728,0L27.123,22.5a1,1,0,0,1-.864,1.5H1.741a1,1,0,0,1-.864-1.5Z" transform="translate(1328 126) rotate(90)"/></g></svg>');
        cancion.pause();
        cancionPlay = false;
        clearTimeout(segundosIntervalo);
      }       
        
    })
    ContenedorGeneral.on('click', '.rrss-faces--prev', function(){
        pressPrev();
    })
    ContenedorGeneral.on('click', '.rrss-faces--next', function(){
        pressNext();
    });
    function pressPrev(){
      $('#line-reproductor').css('width', '0%');
      clearTimeout(segundosIntervalo);
      contadorSec = 0;        
      cancion.pause();
      numCancion--
      if(numCancion >= SONGS.length){ numCancion = 0 }
      if(numCancion < 0){numCancion = SONGS.name-1 }
      duracionC = SONGS[numCancion].duration;
      $('.rrss-faces--play').empty().append('<svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44"><g transform="translate(-1540 -118)"><g transform="translate(1551.286 126.286)"><rect width="8" height="28" rx="1" transform="translate(-0.286 -0.286)"/><rect width="8" height="28" rx="1" transform="translate(14.714 -0.286)"/></g><rect width="44" height="44" transform="translate(1540 118)" fill="none"/></g></svg>');
      cargarCancion();
      cancionPlay = true;
      ajustarVolumen(scrollActual, scrollMax);
      cancion.play();
      crearIntervalo();
    }
    function pressNext(){
      $('#line-reproductor').css('width', '0%');
      clearTimeout(segundosIntervalo);
      contadorSec = 0;        
      cancion.pause();        
      numCancion++
      if(numCancion >= 5){ numCancion = 0 }
      if(numCancion < 0){numCancion = 4 }
      duracionC = SONGS[numCancion].duration;
      $('.rrss-faces--play').empty().append('<svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44"><g transform="translate(-1540 -118)"><g transform="translate(1551.286 126.286)"><rect width="8" height="28" rx="1" transform="translate(-0.286 -0.286)"/><rect width="8" height="28" rx="1" transform="translate(14.714 -0.286)"/></g><rect width="44" height="44" transform="translate(1540 118)" fill="none"/></g></svg>');
      cargarCancion();
      cancionPlay = true;
      ajustarVolumen(scrollActual, scrollMax);
      cancion.play();
      crearIntervalo();
    }
    function cargarCancion(){
        cancion = new Audio(`assets/audio/music/song${numCancion}.mp3`);
        imprimirCancion();
        imprimirImagenCancion();
    }
    function imprimirCancion(){
        nombreC = SONGS[numCancion].name;
        autorC = SONGS[numCancion].author;
        $('.ARTI-about__yo-nombre.lang-ES .yo-nombre').empty().append(nombreC);        
        $('.ARTI-about__yo-nombre.lang-ES .yo-trabajo').empty().append(autorC);
        $('.ARTI-about__yo-nombre.lang-EN .yo-nombre').empty().append(nombreC);
        $('.ARTI-about__yo-nombre.lang-EN .yo-trabajo').empty().append(autorC);
    }
    function imprimirImagenCancion(){
        imagenC = `<img src="assets/images/covers/${SONGS[numCancion].cover}" alt="${nombreC}" class="yo-foto"></img>`
        $('.ARTI-about__yo-foto-faces .foto-faces.faceB').empty().append(imagenC);
    }
    function crearIntervalo(){
      segundosIntervalo = setInterval(()=>{
        //console.log(contadorSec, duracionC)
        if(cancionPlay == true){
          contadorSec++;
          reglaTres = (contadorSec * 100) / duracionC;
          $('#line-reproductor').css('width', reglaTres+'%');

          if(contadorSec >= duracionC){
              contadorSec = 0;
              pressNext();
          }
        }
      }, 1000);
    }
    function ajustarVolumen(scrollActual, scrollMax){
      let volumen = (((Math.round(((scrollActual+1) * 100) / (scrollMax+1)) - 100) * -1) / 100).toFixed(1);
      if(volumen == 0.0){ volumen = 0.1;}else if(volumen == 1.0){ volumen = 1;}
      cancion.volume = volumen;
    }

    /* -- MODO PUZLES -- */
      //link

    /* -- MODO CODE -- */
    ContenedorGeneral.on('click', '.hobbie__icono-code', function(){
      ContenedorGeneral.toggleClass("modo-code--activo");
    });

    /* -- MODO TEMA -- */
    let faceA = $(".faceA");
    ContenedorGeneral.on('click', '.hobbie__icono-disenyo', function(){
      color++;        
      if(color > 6){ color = 0; }
      document.getElementById("theme").href="css/theme"+color+".css";
    });
    /* -- MODO DISENYO -- */
    /* $("#CONTENEDOR-GENERAL").on('click', '.hobbies__CONT-hobbies .hobbie__icono-disenyo', function(){
      const time = 1.5;
      const body = $('body');
      const modoDisenyo = $('.modo-disenyo');
      const buttonDisenyo = $('.hobbies__CONT-hobbies .hobbie__disenyo');
      const screenSize = {w: body.width(), h: body.height()}
      const boxSize = {w: buttonDisenyo.width(), h: buttonDisenyo.height()}
      const buttonDisenyoPosition = buttonDisenyo.offset();

      modoDisenyo[0].style.setProperty('--time', time+'s');
      modoDisenyo[0].style.setProperty('--wscreen', (((buttonDisenyoPosition.left + (boxSize.w/2)) * 100) / screenSize.w).toFixed(2) +'%');
      modoDisenyo[0].style.setProperty('--hscreen', (((buttonDisenyoPosition.top + (boxSize.h/2)) * 100) / screenSize.h).toFixed(2)+'%');
      modoDisenyo.addClass('modo-disenyo--open');
      body.addClass('modo-disenyo--open');
      setTimeout(()=>{
        modoDisenyo.removeClass('modo-disenyo--open');
        body.removeClass('modo-disenyo--open');
      }, ((time * 4) + time) * 1000);
    }); */

    /* -- MODO PIANO -- */


    /* -- MODO CHOCOLATE -- */
    let mordiscos = 0;
    let imgVec;
    let mordiscoSound = new Audio('assets/audio/sounds/bite.mp3');
    let Vmordiendo = false;
    ContenedorGeneral.on('click', '.hobbie__icono-chocolate', function(){
        if(Vmordiendo == false){
            Vmordiendo = true;
            mordiscos++;
            if(mordiscos > 3){ mordiscos = 0 }else{mordiscoSound.play();}
            if(mordiscos == 0){
                imgVec = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 64 64" xml:space="preserve" fill="#000000"><g><path d="M57.824,25.213L39.84,7.227c-0.188-0.188-0.441-0.293-0.707-0.293s-0.52,0.105-0.707,0.293L24.263,21.39   L6.227,39.426c-0.188,0.188-0.293,0.441-0.293,0.707s0.105,0.52,0.293,0.707l17.987,17.985c0.195,0.195,0.451,0.293,0.707,0.293   s0.512-0.098,0.707-0.293L36.162,48.29l0.741,1.579c0.139,0.295,0.412,0.504,0.732,0.561c0.058,0.01,0.115,0.015,0.173,0.015   c0.263,0,0.518-0.104,0.707-0.293l9.019-9.019c0.198-0.198,0.305-0.471,0.292-0.751s-0.142-0.542-0.356-0.723l-1.455-1.221   l11.81-11.812C58.215,26.236,58.215,25.604,57.824,25.213z M39.133,9.348l7.579,7.579l-5.668,5.668l-7.579-7.579L39.133,9.348z    M32.051,16.43l7.579,7.579l-4.924,4.924L26.45,22.03L32.051,16.43z M41.044,25.423l7.579,7.579l-4.121,4.121l-8.256-6.902   L41.044,25.423z M24.921,56.704L8.348,40.133l3.068-3.068l16.572,16.572L24.921,56.704z M29.402,52.223L12.83,35.65l11.84-11.84   l10.589,22.555L29.402,52.223z M38.108,47.73l-0.737-1.571c-0.002-0.003-0.002-0.006-0.003-0.009l-8.796-18.733l-0.77-1.64   L45.348,40.49L38.108,47.73z M50.037,31.588l-7.579-7.579l5.667-5.667l7.578,7.578L50.037,31.588z"></path><rect fill="none" width="64" height="64"></rect></g></svg>'
            }else if(mordiscos == 1){
                imgVec = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs></defs><rect fill="none" class="cls-1" width="64" height="64"/><path id="_Trazado_compuesto_" data-name="&lt;Trazado compuesto&gt;" d="M53.59,30.86a.87.87,0,0,0,.06-1.21,3.07,3.07,0,0,1-.81-2.17,1.06,1.06,0,0,0-.36-.85,1.1,1.1,0,0,0-.69-.25l-.2,0a3.12,3.12,0,0,1-1,0,3,3,0,0,1-1.38-5.34,1.05,1.05,0,0,0,.41-.91,1,1,0,0,0-.24-.59l-.15-.15a.71.71,0,0,0-.14-.1,2.82,2.82,0,0,1-1-.95,2.93,2.93,0,0,1-.47-2.09,2.86,2.86,0,0,1,.32-1L46.41,13.8,39.84,7.23a1,1,0,0,0-.7-.29,1,1,0,0,0-.71.29L24.27,21.39l-18,18a1,1,0,0,0-.29.71,1,1,0,0,0,.29.7l18,18a1,1,0,0,0,1.41,0L36.17,48.29l.74,1.58a1,1,0,0,0,.73.56l.17,0a1,1,0,0,0,.71-.3l9-9a1,1,0,0,0,.29-.76,1,1,0,0,0-.36-.72L46,38.44l6.76-6.76ZM39.14,9.35l6.44,6.44a1.16,1.16,0,0,0,0,.18,5,5,0,0,0,.1,2L41.05,22.6,33.47,15Zm-7.08,7.08L39.63,24l-4.92,4.93L26.45,22ZM24.93,56.71,8.35,40.14l3.07-3.07L28,53.64Zm4.48-4.48L12.83,35.65,24.67,23.81,35.26,46.37Zm8.7-4.5-.73-1.57h0L28.58,27.42l-.77-1.64L45.35,40.49Zm6.4-10.6-8.26-6.91,4.8-4.79L48.63,33ZM50,31.59,42.46,24l4.12-4.12a3.47,3.47,0,0,0,.4.46,5.1,5.1,0,0,0,3.29,8.15,4.87,4.87,0,0,0,.55.06,5,5,0,0,0,.62,1.63Z"/></svg>'
            }else if(mordiscos == 2){
                imgVec = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs></defs><rect fill="none" class="cls-1" width="64" height="64"/><path id="_Trazado_compuesto_" data-name="&lt;Trazado compuesto&gt;" d="M41.05,22.6l-1.48-1.48a4.69,4.69,0,0,0,1.73-1.35,3.43,3.43,0,0,0,.32-.43,4.71,4.71,0,0,0,2.49.2Zm4.82-6a.88.88,0,0,0-.72.25,2.82,2.82,0,0,1-3.44.29,1,1,0,0,0-.87-.11,1,1,0,0,0-.62.61,2.88,2.88,0,0,1-.47.84,2.75,2.75,0,0,1-1.78,1,2.79,2.79,0,0,1-2.22-.6,2.82,2.82,0,0,1-1-1.86,1,1,0,0,0-.54-.78,1,1,0,0,0-.45-.1,1,1,0,0,0-.5.13,2.88,2.88,0,0,1-1,.33,2.38,2.38,0,0,1-.46,0A2.93,2.93,0,0,1,30,16l-.22-.2L6.23,39.43a1,1,0,0,0-.29.71,1,1,0,0,0,.29.7l18,18a1,1,0,0,0,1.41,0L36.17,48.29l.74,1.58a1,1,0,0,0,.73.56l.17,0a1,1,0,0,0,.71-.3l9-9a1,1,0,0,0,.29-.76,1,1,0,0,0-.36-.72L46,38.44l6.76-6.76.81-.82a.87.87,0,0,0,.06-1.21,3.07,3.07,0,0,1-.81-2.17,1.06,1.06,0,0,0-.36-.85,1.1,1.1,0,0,0-.69-.25l-.2,0a3.12,3.12,0,0,1-1,0,3,3,0,0,1-1.38-5.34,1.05,1.05,0,0,0,.41-.91,1,1,0,0,0-.24-.59l-.15-.15a.71.71,0,0,0-.14-.1,2.82,2.82,0,0,1-1-.95,2.76,2.76,0,0,1-.35-.71,1.29,1.29,0,0,0-1-.9ZM30.12,18.36a4.81,4.81,0,0,0,2.93.17,4.83,4.83,0,0,0,4.11,3L39.63,24l-4.92,4.93L26.45,22ZM24.93,56.71,8.35,40.14l3.07-3.07L28,53.64Zm4.48-4.48L12.83,35.65,24.67,23.81,35.26,46.37Zm8.7-4.5-.73-1.57h0L28.58,27.42l-.77-1.64L45.35,40.49Zm6.4-10.6-8.26-6.91,4.8-4.79L48.63,33ZM50,31.59,42.46,24l4.12-4.12a3.47,3.47,0,0,0,.4.46,5.1,5.1,0,0,0,3.29,8.15,4.87,4.87,0,0,0,.55.06,5,5,0,0,0,.62,1.63Z"/></svg>'
            }else{
                imgVec = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs></defs><rect fill="none" class="cls-1" width="64" height="64"/></svg>'
            }
            $('.hobbie__icono-chocolate').empty().append(imgVec);
            setTimeout(()=>{Vmordiendo = false},700);
        }
        
    });


    /* ============================== MENU ============================== */

    /* -- ABRIR Y CERRAR MENU -- */
    $('.MENU-principal__icono-menu').click(function(){
        if(!$('#MENU-principal').hasClass('MENU-principal--work')){
            abrirCerrarMenu();          

            if(pagina == 'about' || pagina == 'works'){
                if($('#MENU-principal').hasClass('MENU-principal--open')){
                    $('#MENU-principal').removeClass('MENU-principal--about');
                    
                }else{
                    setTimeout(function(){ $('#MENU-principal').addClass('MENU-principal--about'); }, 600);

                }

            }else{
                $('#MENU-principal').removeClass('MENU-principal--about');

            }

        }else{
            worksParent.children().children('.proyecto-imagen--selecionada').css('opacity', '1');
            worksParent.children().children('.container').removeClass('slides-activo');
            $('#ARTI-works .simplebar-content-wrapper').animate({scrollTop: 0}, 'slow');

            worksParent.children().children('.container').css('opacity', '0');
            $('.ARTI-works__CONT-galeria-proyectos').removeClass('CONT-galeria-proyectos--centrado');
                
                setTimeout(function(){
                    $('#ARTI-works').removeClass('ARTI-works--open');
                    $('#MENU-principal').toggleClass('MENU-principal--centrado');
                    $('.ARTI-works__CONT-galeria-proyectos').toggleClass('CONT-galeria-proyectos--open');

                    worksParent.children().children('.proyecto-imagen--selecionada').css({
                        'width' : worksTamanyoProyecto.width,
                        'height' : worksTamanyoProyecto.height,
                        'top' : worksCoordenadasProyecto.top,
                        'left' : worksCoordenadasProyecto.left,
                        'background-image' : 'url(assets/images/projects/' + worksProyecto + '/portada_-_' + worksProyecto + '.png)'
                        
                    });

                    worksParent.parent().children('.ARTI-works__MENU-galeria-proyectos').css('padding-bottom', '3.2rem');

                    worksParent.parents('#ARTI-works')
                    .find('.ARTI-works__CONT-galeria-proyectos').find('.simplebar-content-wrapper').animate({scrollTop: scrollParent}, 'slow');
                
                    
                    setTimeout(function(){
                        $('#MENU-principal').removeClass('MENU-principal--work');

                        worksParent.parent().children('.ARTI-works__MENU-galeria-proyectos').css({
                            'transform' : 'translate(0px, 0px)',
                            'pointer-events' : 'initial'
                        })
                        .children().css('opacity', '1');

                        worksParent.children('.ARTI-works__CONT-proyecto-imagen').css({
                            'opacity': '1',
                            'pointer-events': 'initial'
                        });
                        worksParent.children().children('.proyecto-imagen--selecionada').css('opacity', '0');

                        setTimeout(function(){
                            worksParent.children().children('.proyecto-imagen--selecionada').css('display', 'none'); 

                        }, 600);
                        
                    }, 600);

                }, 600);

        }
        
    });

    function abrirCerrarMenu(){
      if(!fristTime){
        $('#MENU-principal').toggleClass('MENU-principal--open');
        
        if($('#MENU-principal').hasClass('MENU-principal--open')){
            $('.MENU-principal__opciones-menu').css('opacity', '1');
        }else{
            $('.MENU-principal__opciones-menu').css('opacity', '0');
        }
      }else{
        fristTime = false;
      }
        
    };


    /* -- SELECCIONAR OPCION DEL MENU -- */
    $('.opcion-inicio, .opcion-about, .opcion-works, .opcion-contact').click(function(){
        color = 0;
        document.getElementById("theme").href="css/theme"+color+".css";

        pagina = $(this).data('url');
        $(this).parent('ul').children('li').removeClass('opcion--seleccionada');
        $(this).addClass('opcion--seleccionada');
        cancion.pause();
        cancionPlay = false;
        clearTimeout(segundosIntervalo);
        cargarPagina(pagina);
    });




    /* ============================== WORKS ============================== */

    /* -- FILTRO GALERÍA -- */
    $('#CONTENEDOR-PAGINAS').on('click', '.MENU-galeria__proyectos-opcion', function(){
      const $este = $(this);
      const opcion = $este.data('opcion');
      const $parent = $este.parents('#ARTI-works');

      $('.MENU-galeria__proyectos-opcion').removeClass('proyectos-opcion--seleccionada');
      $este.addClass('proyectos-opcion--seleccionada');

      if(opcion == 'todos'){
          $parent.find('.CONT-proyecto-imagen').css('opacity', '0');
          setTimeout(function(){
              $parent.find('.CONT-proyecto-imagen').css('display', 'block');
              $parent.find('.CONT-proyecto-imagen').css('opacity', '1');
          },600);

      }else if(opcion == 'graficos'){
          $parent.find('.CONT-proyecto-imagen').css('opacity', '0');
          setTimeout(function(){
              $parent.find('.CONT-proyecto-imagen').css('display', 'none');
              $parent.find('.proyecto-grafico').css('display', 'block');
              $parent.find('.CONT-proyecto-imagen').css('opacity', '1');
          },600);

      }else{
          $parent.find('.CONT-proyecto-imagen').css('opacity', '0');
          setTimeout(function(){
              $parent.find('.CONT-proyecto-imagen').css('display', 'none');
              $parent.find('.proyecto-web').css('display', 'block');
              $parent.find('.CONT-proyecto-imagen').css('opacity', '1');
          },600);

      }
  });


  /* -- ABRIR UN PROYECTO -- */
  let proyecto;
  const cargarSlides = function() {
      $("#slides").slidesjs({ pagination: false, navigation: { effect: "fade", active: false }, effect: { fade: { speed: 400 } } });       
  };

  $('#CONTENEDOR-PAGINAS').on('click', '.CONT-proyecto-imagen', function(){
      let $este = $(this);
      let $parent = $este.parents('.ARTI-works__galeria-proyectos');
      proyecto = $este.data('proyecto');
      let proyecto_id = $este.data('proyecto_id');
      let tamanyoObjetoClicado = {
          width: $este.width(),
          height: $este.height()
      };
      let coordenadasObjetoClicado = $este.position();


      //Generar contenido del proyecto seleccionado

      $(".programas__CONT-programas").empty();
      $("head #script-slides").remove();
      $(".CONT-proyecto-imagenes").remove();
      
      $(".container").append('<div class="CONT-proyecto-imagenes"></div>');

      $(".container").children(".CONT-proyecto-imagenes").addClass('CONT-proyecto-imagenes--'+PROJECTS[proyecto].imgs)

      for(let i = 0; i < PROJECTS[proyecto].imgs; i++){
          $(".CONT-proyecto-imagenes").append('<div class="proyecto-imagenes" style="background-image: url(assets/images/projects/' + proyecto + '/' + proyecto + '-' + i + '.png);"></div>');
      }

      $(".ARTI-works__CONT-datos-proyecto .descripcion-titulo").empty().append(PROJECTS[proyecto].title);
      if(PROJECTS[proyecto].linkPath != null && device == "PC"){
          $(".ARTI-works__CONT-datos-proyecto .descripcion-titulo")
          .append(`<a href="${PROJECTS[proyecto].linkPath}" target="_blank"><span class="ARTI-works__proyecto-link"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 32 32" xml:space="preserve"><g><path fill-rule="evenodd" clip-rule="evenodd" d="M8.28,30.599c-1.2-0.014-2.244-0.433-3.105-1.278   c-0.842-0.827-1.678-1.66-2.501-2.506c-1.677-1.723-1.7-4.452-0.012-6.16c2.831-2.864,5.678-5.71,8.542-8.54   c1.743-1.722,4.481-1.685,6.22,0.037c0.405,0.401,0.811,0.799,1.204,1.211c0.543,0.569,0.544,1.42,0.016,1.947   c-0.533,0.531-1.376,0.533-1.947-0.01c-0.402-0.383-0.783-0.788-1.181-1.175c-0.734-0.713-1.723-0.722-2.45,0.002   c-2.803,2.792-5.601,5.591-8.395,8.393c-0.697,0.699-0.693,1.716,0.001,2.424c0.777,0.793,1.563,1.579,2.356,2.355   c0.79,0.772,1.75,0.761,2.542-0.026c1.447-1.439,2.888-2.885,4.331-4.328c0.421-0.421,0.916-0.569,1.483-0.372   c0.554,0.192,0.849,0.604,0.904,1.183c0.039,0.41-0.093,0.769-0.382,1.06c-1.55,1.552-3.088,3.117-4.662,4.645   C10.434,30.244,9.415,30.587,8.28,30.599z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M30.595,8.273c-0.011,1.183-0.387,2.227-1.215,3.061   c-2.856,2.878-5.709,5.76-8.604,8.598c-1.724,1.69-4.492,1.617-6.2-0.08c-0.394-0.392-0.792-0.779-1.177-1.18   c-0.563-0.586-0.565-1.445-0.015-1.977c0.541-0.523,1.377-0.51,1.946,0.039c0.389,0.376,0.763,0.769,1.152,1.146   c0.731,0.709,1.742,0.732,2.457,0.021c2.814-2.802,5.622-5.611,8.423-8.426c0.655-0.659,0.677-1.661,0.04-2.33   c-0.824-0.864-1.669-1.708-2.531-2.535c-0.681-0.653-1.691-0.6-2.393,0.097c-1.447,1.439-2.885,2.889-4.332,4.329   c-0.634,0.632-1.519,0.649-2.065,0.055c-0.479-0.521-0.507-1.34-0.001-1.853c1.56-1.582,3.101-3.185,4.724-4.701   c1.696-1.584,4.332-1.49,6.002,0.128c0.857,0.831,1.7,1.677,2.534,2.532C30.172,6.053,30.579,7.089,30.595,8.273z"/></g><rect fill-rule="evenodd" clip-rule="evenodd" fill="none" width="32" height="32"/></svg></span></a>`);
      }
      $(".ARTI-works__CONT-datos-proyecto .descripcion-texto.lang-ES").empty().append(PROJECTS[proyecto].text_ES);
      $(".ARTI-works__CONT-datos-proyecto .descripcion-texto.lang-EN").empty().append(PROJECTS[proyecto].text_EN);
      
      for(let i = 0; i < PROJECTS[proyecto].programs.length; i++){
          prog = PROJECTS[proyecto].programs[i];
          $(".programas__CONT-programas").append(programas[prog]);

      }

      $parent.parents('#ARTI-works').find('.slidesjs-control').css('pointer-events', 'none');

      scrollParent = $parent.parents('#ARTI-works').find('.ARTI-works__CONT-galeria-proyectos').find('.simplebar-content-wrapper').scrollTop();
      worksParent = $parent;
      worksProyecto = proyecto;
      worksTamanyoProyecto = tamanyoObjetoClicado;
      worksCoordenadasProyecto = coordenadasObjetoClicado;

      $('#MENU-principal').addClass('MENU-principal--work');

      $parent.children().children('.proyecto-imagen--selecionada').css({
          'display' : 'inline-block',
          'width' : tamanyoObjetoClicado.width,
          'height' : tamanyoObjetoClicado.height,
          'top' : coordenadasObjetoClicado.top,
          'left' : coordenadasObjetoClicado.left,
          'background-image' : 'url(assets/images/projects/' + proyecto + '/portada_-_' + proyecto + '.jpg)',
          'opacity' : '1',
          'pointer-events' : 'none'
      });

      $parent.parent().children('.ARTI-works__MENU-galeria-proyectos').css({
          'transform' : 'translate(0px, -30px)',
          'pointer-events' : 'none'
      })
      .children().css('opacity', '0');

      $parent.children('.ARTI-works__CONT-proyecto-imagen').css({
          'opacity': '0',
          'pointer-events': 'none'
      });

      setTimeout(function(){
          $('#ARTI-works .simplebar-content-wrapper').animate({scrollTop: 0}, 'slow');

          $parent.children().children('.proyecto-imagen--selecionada').css({
              'width' : '100%',
              'height' : '100%',
              'top' : '0px',
              'left' : '0px',
          });

          $parent.parent().children('.ARTI-works__MENU-galeria-proyectos').css('padding-bottom', '0rem');

          $('.ARTI-works__CONT-galeria-proyectos').toggleClass('CONT-galeria-proyectos--open');
          $('#MENU-principal').toggleClass('MENU-principal--centrado');

          setTimeout(function(){
              $('.ARTI-works__CONT-galeria-proyectos').addClass('CONT-galeria-proyectos--centrado');
              $parent.children().children('.container').css('opacity', '1');
              $parent.children().children('.container').addClass('slides-activo');
              $parent.children().children('.proyecto-imagen--selecionada').css('opacity', '0');
              $('#ARTI-works').addClass('ARTI-works--open');

          }, 600);

      }, 600);            

  });


  /* -- AMPLIAR IMAGEN PROYECTO -- */
  $("body").on("click", ".container .proyecto-imagenes", function(){
      
      let imagenSelect = $(this).css('background-image');
      imagenSelect = imagenSelect.split('-').pop().split('.').shift();
      
      $('.CONT-proyecto-imagen--selecionada-zoom').addClass('imagen-zoom--open');
      $('.MENU-principal__icono-menu, .MENU-principal__CONT-icono-scroll').addClass('MENU-imagen-zoom--open');

      $("#slides").remove();
      $('#script-slides').remove();
      $(".CONT-proyecto-imagen--selecionada-zoom").append('<div id="slides"></div>');
      
      $("head").append('<script id="script-slides" src="js/jquery.slides.min.js"></script>');
  
      const numeroImagenes = PROJECTS[proyecto].imgs;
      let j = imagenSelect;
      const sizeImg = device == "PC" ? "hd/" : "";

      for(let i = 0; i < numeroImagenes; i++){
        const urlImage = `assets/images/projects/${proyecto}/${sizeImg}${proyecto}-${j}.png`;
          $("#slides").append(`<div class="slide-img slidesjs-slide" style="background-image: url(${urlImage}); position: absolute; top: 0px; left: 0px; width: 100%; z-index: 0; backface-visibility: hidden;"></div>`);
          j++;
          if(j >= numeroImagenes){
              j = 0;
          }
      }
      $("#slides").append(
          `<a href="#" class="slidesjs-previous slidesjs-navigation">
              <div class="slider-menu__icono-previous">
                  <span class="icono-scroll__flecha"></span>
              </div>
          </a>
          <a href="#" class="slidesjs-next slidesjs-navigation">
              <div class="slider-menu__icono-next">
                  <span class="icono-scroll__flecha"></span>
              </div>
          </a>`
      );
      cargarSlides();

  });
  
  $("body").on("click", ".CONT-proyecto-imagen--selecionada-zoom .slidesjs-container", function(){
      $('.CONT-proyecto-imagen--selecionada-zoom').removeClass('imagen-zoom--open');
      $('.MENU-principal__icono-menu, .MENU-principal__CONT-icono-scroll').removeClass('MENU-imagen-zoom--open');
  });
   

});