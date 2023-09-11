$(document).ready(function(){

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

      $(".container").children(".CONT-proyecto-imagenes").addClass('CONT-proyecto-imagenes--'+proyectos[proyecto].imgs)

      for(let i = 0; i < proyectos[proyecto].imgs; i++){
          $(".CONT-proyecto-imagenes").append('<div class="proyecto-imagenes" style="background-image: url(assets/images/projects/' + proyecto + '/' + proyecto + '-' + i + '.png);"></div>');
      }

      $(".ARTI-works__CONT-datos-proyecto .descripcion-titulo").empty().append(proyectos[proyecto].title);
      if(proyectos[proyecto].linkPath != null && device == "PC"){
          $(".ARTI-works__CONT-datos-proyecto .descripcion-titulo")
          .append(`<a href="${proyectos[proyecto].linkPath}" target="_blank"><span class="ARTI-works__proyecto-link"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 32 32" xml:space="preserve"><g><path fill-rule="evenodd" clip-rule="evenodd" d="M8.28,30.599c-1.2-0.014-2.244-0.433-3.105-1.278   c-0.842-0.827-1.678-1.66-2.501-2.506c-1.677-1.723-1.7-4.452-0.012-6.16c2.831-2.864,5.678-5.71,8.542-8.54   c1.743-1.722,4.481-1.685,6.22,0.037c0.405,0.401,0.811,0.799,1.204,1.211c0.543,0.569,0.544,1.42,0.016,1.947   c-0.533,0.531-1.376,0.533-1.947-0.01c-0.402-0.383-0.783-0.788-1.181-1.175c-0.734-0.713-1.723-0.722-2.45,0.002   c-2.803,2.792-5.601,5.591-8.395,8.393c-0.697,0.699-0.693,1.716,0.001,2.424c0.777,0.793,1.563,1.579,2.356,2.355   c0.79,0.772,1.75,0.761,2.542-0.026c1.447-1.439,2.888-2.885,4.331-4.328c0.421-0.421,0.916-0.569,1.483-0.372   c0.554,0.192,0.849,0.604,0.904,1.183c0.039,0.41-0.093,0.769-0.382,1.06c-1.55,1.552-3.088,3.117-4.662,4.645   C10.434,30.244,9.415,30.587,8.28,30.599z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M30.595,8.273c-0.011,1.183-0.387,2.227-1.215,3.061   c-2.856,2.878-5.709,5.76-8.604,8.598c-1.724,1.69-4.492,1.617-6.2-0.08c-0.394-0.392-0.792-0.779-1.177-1.18   c-0.563-0.586-0.565-1.445-0.015-1.977c0.541-0.523,1.377-0.51,1.946,0.039c0.389,0.376,0.763,0.769,1.152,1.146   c0.731,0.709,1.742,0.732,2.457,0.021c2.814-2.802,5.622-5.611,8.423-8.426c0.655-0.659,0.677-1.661,0.04-2.33   c-0.824-0.864-1.669-1.708-2.531-2.535c-0.681-0.653-1.691-0.6-2.393,0.097c-1.447,1.439-2.885,2.889-4.332,4.329   c-0.634,0.632-1.519,0.649-2.065,0.055c-0.479-0.521-0.507-1.34-0.001-1.853c1.56-1.582,3.101-3.185,4.724-4.701   c1.696-1.584,4.332-1.49,6.002,0.128c0.857,0.831,1.7,1.677,2.534,2.532C30.172,6.053,30.579,7.089,30.595,8.273z"/></g><rect fill-rule="evenodd" clip-rule="evenodd" fill="none" width="32" height="32"/></svg></span></a>`);
      }
      $(".ARTI-works__CONT-datos-proyecto .descripcion-texto.lang-ES").empty().append(proyectos[proyecto].text_ES);
      $(".ARTI-works__CONT-datos-proyecto .descripcion-texto.lang-EN").empty().append(proyectos[proyecto].text_EN);
      
      for(let i = 0; i < proyectos[proyecto].programs.length; i++){
          prog = proyectos[proyecto].programs[i];
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
      
      const imagenSelect = $(this).css('background-image');
      imagenSelect = imagenSelect.split('-').pop().split('.').shift();
      
      $('.CONT-proyecto-imagen--selecionada-zoom').addClass('imagen-zoom--open');
      $('.MENU-principal__icono-menu, .MENU-principal__CONT-icono-scroll').addClass('MENU-imagen-zoom--open');

      $("#slides").remove();
      $('#script-slides').remove();
      $(".CONT-proyecto-imagen--selecionada-zoom").append('<div id="slides"></div>');
      
      $("head").append('<script id="script-slides" src="js/jquery.slides.min.js"></script>');
  
      const numeroImagenes = proyectos[proyecto].imgs;
      let j = imagenSelect;
      const sizeImg = device == "PC" ? "-HD" : "";

      for(let i = 0; i < numeroImagenes; i++){
          $("#slides").append('<div class="slide-img slidesjs-slide" style="background-image: url(assets/images/projects/' + proyecto + '/' + proyecto + '-' + j + sizeImg +'.png); position: absolute; top: 0px; left: 0px; width: 100%; z-index: 0; backface-visibility: hidden;"></div>');
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