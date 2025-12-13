let currentPage = 'home';

$(document).ready(function () {
  //const $headBox = $('head');
  const $bodyBox = $('body');
  const $mainBox = $('#MAIN-CONTAINER');
  const $pagesBox = $('#PAGES-CONTAINER');
  const $menuMainBox = $('#MENU-main');
  const screen = {
    width: $(window).width(),
    height: $(window).height(),
  };
  let fristTime = true;
  let scrollParent;
  let projectName, projectSize, projectCordon;
  let device = screen.width > screen.height ? 'desktop' : 'mobile';
  let currentTheme = 0;
  let numThemes = 7;

  setTimeout(() => $mainBox.css('opacity', '1'), 500);

  $(window).resize(() => {
    screen.width = $(window).width();
    screen.height = $(window).height();
    device = screen.width > screen.height ? 'desktop' : 'mobile';
  });

  /* $headBox.append('<link rel="stylesheet" href="./src/css/webs.css">');
  $bodyBox.append('<script src="./src/js/webs.js"></script>'); */

  /*
   * ==================================================================
   * -- LOAD PAGE -----------------------------------------------------
   * ==================================================================
   */

  function loadPage(page) {
    $.ajax({
      url: `./src/${page}.html`,
      success: function (data) {
        $pagesBox.html(data);
        $mainBox.removeClass('code-mode--on');

        // Check if the page is “about” and if “movies-mode” is activated.
        if (page === 'about' && $mainBox.hasClass('movies-mode--on')) {
          updateMoviesMode();
        }

        updateMenuClasses(page);

        // Menu control centered and toggle
        manageMenuDisplay(page);
      },
      error: function () {
        console.error('Failed to load the page:', page);
        $pagesBox.html('<p>Error loading page. Please try again later.</p>');
      },
    });
  }

  function updateMoviesMode() {
    setTimeout(() => {
      const icon = iconBlock('hobbies', 'x');
      $('[data-hobbies="movies"] .tag-block__icon').html(icon);
    }, 1000);
  }

  function updateMenuClasses(page) {
    removeClasses(
      $menuMainBox,
      ['home', 'about', 'projects', 'contact'],
      'MENU--'
    );

    if (['about', 'projects'].includes(page)) {
      setTimeout(() => {
        $menuMainBox.addClass(`MENU--${page}`);
      }, 600);
    } else {
      $menuMainBox.addClass(`MENU--${page}`);
    }
  }

  function manageMenuDisplay(page) {
    const isCentered = page === 'about' || page === 'contact';

    if (page === 'projects') {
      toggleMenuMain();
      $menuMainBox.removeClass('MENU--centered');
    } else {
      toggleMenuMain();
      $menuMainBox.toggleClass('MENU--centered', isCentered);
    }
  }

  loadPage(currentPage);

  /*
   * ==================================================================
   * -- MENU MAIN -----------------------------------------------------
   * ==================================================================
   */

  /* -- OPEN AND CLOSE MENU ------------------------------------------ */
  function toggleMenuMain() {
    if (!fristTime) {
      $menuMainBox.toggleClass('MENU--opened');
    } else {
      fristTime = false;
    }
  }

  $('#btn-menu .MENU__icon').click(function () {
    if ($menuMainBox.hasClass('MENU--project')) {
      const $selectedProjectImageBox = $('.selected-project-image');
      const $sectionLeftBox = $('.CONT-section--left');
      const $menuFilterBox = $('#MENU-filter');

      $selectedProjectImageBox.css('opacity', '1');
      $('.selected-project__slides')
        .removeClass('slides-activo')
        .css('opacity', '0');

      $('#ARTI-projects .simplebar-content-wrapper').animate(
        { scrollTop: 0 },
        'slow'
      );

      $sectionLeftBox.removeClass('gallery-projects--centered');

      setTimeout(() => {
        $('#ARTI-projects').removeClass('ARTI-projects--open');
        $menuMainBox.toggleClass('MENU--centered');
        $sectionLeftBox.toggleClass('project--opened');

        $selectedProjectImageBox.css({
          width: projectSize.width,
          height: projectSize.height,
          top: projectCordon.top,
          left: projectCordon.left,
          'background-image': `url('assets/images/projects/${projectName}/portada_-_${projectName}.png')`,
        });

        $menuFilterBox.css('padding-bottom', '3.2rem');

        $sectionLeftBox
          .find('.simplebar-content-wrapper')
          .animate({ scrollTop: scrollParent }, 'slow');

        setTimeout(() => {
          $menuMainBox.removeClass('MENU--project');

          $menuFilterBox
            .css({
              transform: 'translate(0px, 0px)',
              'pointer-events': 'initial',
            })
            .children()
            .css('opacity', '1');

          $('.projects-images').css({
            opacity: '1',
            'pointer-events': 'initial',
          });

          $selectedProjectImageBox.css('opacity', '0');

          setTimeout(() => {
            $selectedProjectImageBox.css('display', 'none');
          }, 600);
        }, 600);
      }, 600);
    } else {
      toggleMenuMain();

      if (currentPage === 'about' || currentPage === 'projects') {
        const className = `MENU--${currentPage}`;

        if ($menuMainBox.hasClass('MENU--opened')) {
          $menuMainBox.removeClass(className);
        } else {
          setTimeout(() => {
            $menuMainBox.addClass(className);
          }, 600);
        }
      } else {
        removeClasses($menuMainBox, ['about', 'projects'], 'MENU--');
      }
    }
  });

  /* -- SELECT OPTION FROM MENU MAIN --------------------------------- */
  $('#MENU-main .MENU__options').on('click', '.option', function () {
    const $this = $(this);
    currentPage = $this.attr('data-menu-main-options');

    //$this.parent('ul').children('li').removeClass('option--selected');
    $('#MENU-main .option').removeClass('option--selected');
    $this.addClass('option--selected');

    setThemeMode(0); // form theme mode
    if (device === 'desktop') {
      resetToDefault(); // from music mode
    }

    loadPage(currentPage);
  });

  /*
   * ==================================================================
   * -- PROJECTS ------------------------------------------------------
   * ==================================================================
   */

  /* -- MENU GALLERY FILTER ------------------------------------------ */
  $pagesBox.on('click', '#MENU-filter .option', function () {
    const $this = $(this);
    const optionData = $this.data('filter-projects-option');
    const $projectBox = $('#ARTI-projects .projects-images .box-block');

    $('.MENU-filter .option').removeClass('option--selected');
    $this.addClass('option--selected');
    $projectBox.css('opacity', '0');

    setTimeout(() => {
      $projectBox.css('display', 'none');

      if (optionData === 'all') {
        $projectBox.css('display', 'block');
      } else {
        $(`#ARTI-projects .projects-images .p-${optionData}`).css(
          'display',
          'block'
        );
      }

      setTimeout(() => {
        $projectBox.css('opacity', '1');
      }, 100);
    }, 400);
  });

  /* -- OPEN A PROJECT ----------------------------------------------- */
  let project;

  $pagesBox.on(
    'click',
    '#ARTI-projects .projects-images .box-block',
    function () {
      const $this = $(this);
      const $projectsBox = $('.projects');
      const $menuFilterBox = $('#MENU-filter');

      project = findById($this.data('project'), PROJECTS);
      const { id, name, description, programs, imgs, links } = project;

      //let idProject = $this.data('proyecto_id');
      let projectSizeClicked = {
        width: $this.width(),
        height: $this.height(),
      };
      let projectCordonClicked = $this.position();

      // Generate content of the selected project
      $('.content-tools').empty();
      $('head #script-slides').remove();
      $('.selected-project__slides').html(
        `<div class="selected-project-images"></div>`
      );
      $('.selected-project-images').addClass(
        `selected-project-images--${imgs}`
      );

      // print project images
      let imagesBlock = '';
      for (let i = 0; i < imgs; i++) {
        imagesBlock += `<div
          class="image-project proyecto-imagenes"
          style="background-image: url(assets/images/projects/${id}/${id}-${i}.png);"
        ></div>`;
      }
      $('.selected-project-images').html(imagesBlock);

      // print project name
      $('.selected-project-data .title-_projectname').html(name);

      const $projectLinksBox = $('.selected-project-data .title-_projectname')
        .parent()
        .children('.links');
      // print project links
      if (links && device === 'desktop') {
        let linkBlock = '';

        Object.entries(links).forEach(([key, val]) => {
          if (val) {
            const icon = iconBlock('project', key);
            linkBlock += `<div class="link">
            <a href="${val}" target="_blank">${icon}</a>
            </div>`;
          }
        });
        $projectLinksBox.html(linkBlock);
      } else {
        $projectLinksBox.empty();
      }

      // print project description
      printDescriptionBlock(
        '.selected-project-data .content-_projectname',
        description[LANG],
        'p'
      );

      // print project stack
      printTagBlocks('.content-tools', programs, 'stack', 'inline', PROGRAMS);

      $('#ARTI-projects')
        .find('.slidesjs-control')
        .css('pointer-events', 'none');

      scrollParent = $('.CONT-section--left')
        .find('.simplebar-content-wrapper')
        .scrollTop();

      /* worksParent = $projectsBox; */
      worksParent = $this.parents('.projects');
      projectName = id;
      projectSize = projectSizeClicked;
      projectCordon = projectCordonClicked;

      $menuMainBox.addClass('MENU--project');

      $('.selected-project-image').css({
        display: 'inline-block',
        width: projectSizeClicked.width,
        height: projectSizeClicked.height,
        top: projectCordonClicked.top,
        left: projectCordonClicked.left,
        'background-image':
          'url(assets/images/projects/' + id + '/portada_-_' + id + '.jpg)',
        opacity: '1',
        'pointer-events': 'none',
      });

      $menuFilterBox
        .css({
          transform: 'translate(0px, -30px)',
          'pointer-events': 'none',
        })
        .children()
        .css('opacity', '0');

      $('.projects-images').css({
        opacity: '0',
        'pointer-events': 'none',
      });

      setTimeout(() => {
        $('#ARTI-projects .simplebar-content-wrapper').animate(
          { scrollTop: 0 },
          'slow'
        );

        $('.selected-project-image').css({
          width: '100%',
          height: '100%',
          top: '0px',
          left: '0px',
        });

        $menuFilterBox.css('padding-bottom', '0rem');

        $('.CONT-section--left').toggleClass('project--opened');
        $menuMainBox.toggleClass('MENU--centered');

        setTimeout(() => {
          $('.CONT-section--left').addClass('gallery-projects--centered');
          $('.selected-project__slides')
            .css('opacity', '1')
            .addClass('slides-activo');
          $('.selected-project-image').css('opacity', '0');
          $('#ARTI-projects').addClass('ARTI-projects--open');
        }, 600);
      }, 600);
    }
  );

  /* -- AMPLIAR IMAGEN PROYECTO -- */
  $bodyBox.on('click', '.container .image-project', function () {
    let selectedImage = $(this).css('background-image');
    selectedImage = selectedImage.split('-').pop().split('.').shift();

    $('.CONT-image-project--zoom').addClass('image-zoom--opened');
    $('#btn-menu .MENU__icon, #btn-scroll .MENU__icon').addClass(
      'MENU--image-zoom'
    );

    $('#slides').remove();
    $('#script-slides').remove();

    $('.CONT-image-project--zoom').append('<div id="slides"></div>');
    $('head').append(
      '<script id="script-slides" src="./src/js/jquery.slides.min.js"></script>'
    );

    const { imgs, id } = project;
    let j = selectedImage;
    const imageSize = device == 'desktop' ? 'hd/' : '';

    for (let i = 0; i < imgs; i++) {
      const imageUrl = `./assets/images/projects/${id}/${imageSize}${id}-${j}.png`;

      $('#slides').append(
        `<div class="slide-img slidesjs-slide"
          style="background-image: url('${imageUrl}'); position: absolute; top: 0px; left: 0px; width: 100%; z-index: 0; backface-visibility: hidden;"
        ></div>`
      );

      j++;
      if (j >= imgs) {
        j = 0;
      }
    }

    $('#slides').append(
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

    loadSlides();
  });

  const loadSlides = () => {
    $('#slides').slidesjs({
      pagination: false,
      navigation: { effect: 'fade', active: false },
      effect: { fade: { speed: 400 } },
    });
  };

  $bodyBox.on('click', '.CONT-image-project--zoom .slidesjs-container', () => {
    $('.CONT-image-project--zoom').removeClass('image-zoom--opened');
    $('#btn-menu .MENU__icon, #btn-scroll .MENU__icon').removeClass(
      'MENU--image-zoom'
    );
  });

  /*
   * ==================================================================
   * -- MODES ---------------------------------------------------------
   * ==================================================================
   */

  /* == MOVIES MODE ================================================= */
  const documentBox = document.documentElement;
  $mainBox.on('click', '[data-hobbies="movies"] .tag-block__icon', function () {
    if (device === 'desktop') {
      setMoviesMode();
    }
  });

  function openFullscreen() {
    if (documentBox.requestFullscreen) {
      documentBox.requestFullscreen();
    } else if (documentBox.webkitRequestFullscreen) {
      documentBox.webkitRequestFullscreen(); // Safari
    } else if (documentBox.msRequestFullscreen) {
      documentBox.msRequestFullscreen(); // IE11
    }

    setTimeout(() => {
      const scrollBox = $('#ARTI-about .simplebar-content-wrapper');

      scrollBox.css('scroll-behavior', 'initial');
      scrollMax = scrollBox[0].scrollHeight - scrollBox.outerHeight();
      scrollBox.scrollTop(scrollMax);

      setTimeout(() => {
        scrollBox.css('scroll-behavior', 'smooth');
      }, 200);
    }, 60);
  }

  function closeFullscreen() {
    const scrollBox = $('#ARTI-about .simplebar-content-wrapper');

    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen(); // Safari
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen(); // IE11
    }

    scrollBox.css('scroll-behavior', 'smooth');
  }

  function setMoviesMode(remove = false) {
    let icon;

    if (!remove) {
      $mainBox.toggleClass('movies-mode--on');

      if ($mainBox.hasClass('movies-mode--on')) {
        icon = iconBlock('hobbies', 'x');
        openFullscreen();
      } else {
        icon = iconBlock('hobbies', 'movies');
        closeFullscreen();
      }
    } else {
      $mainBox.removeClass('movies-mode--on');
      icon = iconBlock('hobbies', 'movies');
      closeFullscreen();
    }

    $('[data-hobbies="movies"] .tag-block__icon').html(icon);
  }

  /* == VIDEOGAME MODE ============================================== */

  /* == MUSIC MODE ================================================== */
  let openingPlayer = false;
  let playerOpened = false;
  let currentScroll = 0;
  let scrollMax;
  let playingSong = false;
  let secondsCounter = 0;
  let intervalSeconds;
  const songList = SONGS.filter((song) => song.current);
  const song = {
    number: 0,
    get id() {
      return songList[this.number].id;
    },
    get name() {
      return songList[this.number].name;
    },
    get author() {
      return songList[this.number].author;
    },
    get duration() {
      return songList[this.number].duration;
    },
    get cover() {
      return songList[this.number].cover;
    },
  };
  let songTrack = createAudioTrack(song.id);

  $mainBox.on(
    'click',
    '[data-hobbies="music"] .tag-block__icon',
    handleMusicIconClick
  );
  $mainBox.on('click', '.btn-play', togglePlayPause);
  $mainBox.on('click', '.btn-prev', pressPrev);
  $mainBox.on('click', '.btn-next', pressNext);

  function createAudioTrack(songNumber) {
    const track = new Audio(`assets/audio/music/song${songNumber}.mp3`);
    track.volume = calculateVolume(currentScroll, scrollMax); // Volumen inicial
    return track;
  }

  function handleMusicIconClick() {
    if (device === 'desktop') {
      const scrollBox = $('#ARTI-about .simplebar-content-wrapper');
      scrollMax = scrollBox[0].scrollHeight - scrollBox.outerHeight();

      playerOpened = !playerOpened;
      printIconBlock(
        '[data-hobbies="music"] .tag-block__icon',
        'hobbies',
        playerOpened ? 'x' : 'music'
      );
      updateUI(playerOpened);
      scrollBox.scrollTop(playerOpened ? scrollMax * 0.5 : scrollMax);
      setVolume(scrollMax * 0.5, scrollMax);

      scrollBox.on('scroll', handleScroll);

      if (!playingSong) {
        clearTimeout(intervalSeconds);
      }
    }
  }

  function handleScroll() {
    if (!openingPlayer) {
      currentScroll = $(this).scrollTop();
      setVolume(currentScroll, scrollMax);
    }
  }

  function togglePlayPause() {
    playingSong = !playingSong;
    printIconBlock('.btn-play', 'project', playingSong ? 'pause' : 'play');

    if (playingSong) {
      songTrack.play();
      createInterval();
    } else {
      songTrack.pause();
      clearTimeout(intervalSeconds);
    }
  }

  function pressPrev() {
    changeSong(song.number - 1);
  }

  function pressNext() {
    changeSong(song.number + 1);
  }

  function changeSong(newNumber) {
    resetProgress();
    song.number = (newNumber + songList.length) % songList.length;
    songTrack.pause();
    songTrack = createAudioTrack(song.id);
    updateUI(true, true);
    songTrack.play();
    createInterval();
    playingSong = true;
    printIconBlock('.btn-play', 'project', playingSong ? 'pause' : 'play');
  }

  // Resets the progress bar and counter.
  function resetProgress() {
    $('#progress-bar').css('width', '0%');
    clearTimeout(intervalSeconds);
    secondsCounter = 0;
  }

  // Creates the interval for the tracking of the song
  function createInterval() {
    clearTimeout(intervalSeconds);

    intervalSeconds = setInterval(() => {
      if (playingSong) {
        secondsCounter++;
        printProgress();

        if (secondsCounter >= song.duration) {
          pressNext();
        }
      }
    }, 1000);
  }

  // Calculates and sets the volume based on scrolling
  function setVolume(currScroll, scrollMax) {
    let volume = calculateVolume(currScroll, scrollMax);
    songTrack.volume = volume;
  }

  // Calculates volume based on scroll
  function calculateVolume(currScroll, scrollMax) {
    if (scrollMax === 0 || isNaN(scrollMax)) {
      return 1;
    }

    currentScroll = currScroll || 0;

    let volume = ((1 - currentScroll / scrollMax) * 1).toFixed(1);
    volume = Math.max(0.1, Math.min(volume, 1));

    return isFinite(volume) ? parseFloat(volume) : 1;
  }

  function printSongText() {
    $('.card-block__title .face--back').html(song.name);
    $('.card-block__description .face--back').html(song.author);
  }

  function printSongCover() {
    const coverSong = `<img
      src="assets/images/covers/${song.cover}"
      alt="${song.name}"
      class="picture"
    />`;

    $('.card-block__picture.face--back').html(coverSong);
  }

  function printProgress() {
    const progress = (secondsCounter * 100) / song.duration;
    $('#progress-bar').css('width', progress + '%');
  }

  function updateUI(isPlayerActive, changingSong = false) {
    $mainBox.toggleClass('music-mode--on', isPlayerActive);

    if (isPlayerActive) {
      if (changingSong) {
        printSongText();
      } else {
        setTimeout(() => {
          printSongText();
        }, 250);
      }
      printSongCover();
      printProgress();
    } else {
      resetToDefault();
    }
  }

  // Resets the UI to its original state
  function resetToDefault() {
    songTrack.pause();
    printIconBlock('.btn-play', 'project', 'play');
    playingSong = false;
    playerOpened = false;
  }

  /* == PUZZLES MODE ================================================ */
  $mainBox.on(
    'click',
    '[data-hobbies="puzzles"] .tag-block__icon',
    function () {
      const url = 'https://adrian-gg.github.io/puzzle-cards/';
      setMoviesMode(true);
      window.open(url, '_blank');
    }
  );

  /* == CODE MODE =================================================== */
  $mainBox.on('click', '[data-hobbies="code"] .tag-block__icon', function () {
    if (device === 'desktop') {
      let icon = iconBlock('hobbies', 'x');

      if ($mainBox.hasClass('code-mode--on')) {
        icon = iconBlock('hobbies', 'code');
      }

      $('[data-hobbies="code"] .tag-block__icon').html(icon);
      $mainBox.toggleClass('code-mode--on');
    }
  });

  /* == THEME / DESIGN MODE ========================================= */
  $mainBox.on(
    'click',
    '#ARTI-about [data-hobbies="design"] .tag-block__icon',
    function () {
      /* if (device === 'desktop') {
        setDesignMode();
      } else {
        setThemeMode();
      } */
      setThemeMode();
    }
  );

  $bodyBox.attr('data-theme', currentTheme);

  const setThemeMode = (theme) => {
    currentTheme = theme ?? (currentTheme + 1 + numThemes) % numThemes;
    $bodyBox.attr('data-theme', currentTheme);
  };

  /*function setDesignMode() {
    const time = 2;
    const body = $(window);
    const designModeBox = $('.design-mode');
    const designBtn = $('#ARTI-about [data-hobbies="design"]');
    const screenSize = { w: body.width(), h: body.height() };
    const designBtnSize = { w: designBtn.width(), h: designBtn.height() };
    const designBtnPosition = designBtn.offset();

    designModeBox[0].style.setProperty('--time', time + 's');
    designModeBox[0].style.setProperty(
      '--wscreen',
      (
        ((designBtnPosition.left + designBtnSize.w / 2) * 100) /
        screenSize.w
      ).toFixed(2) + '%'
    );
    designModeBox[0].style.setProperty(
      '--hscreen',
      (
        ((designBtnPosition.top + designBtnSize.h / 2) * 100) /
        screenSize.h
      ).toFixed(2) + '%'
    );

    $mainBox.addClass('design-mode--on');

    setTimeout(() => {
      $mainBox.removeClass('design-mode--on');
    }, (time * 4 + time) * 1000);
  }*/

  /* == PIANO MODE ================================================== */

  /* == CHOCOLATE MODE ============================================== */
  const biteSound = new Audio('assets/audio/sounds/bite.mp3');
  let bites = 0;
  let biting = false;

  $mainBox.on('click', '[data-hobbies="chocolate"] .tag-block__icon', bite);

  function bite() {
    if (biting == false) {
      biting = true;
      bites++;

      if (bites > 3) {
        bites = 0;
      } else {
        biteSound.play();
      }

      let icon = iconBlock(
        'hobbies',
        bites === 0 ? 'chocolate' : `chocolate-${bites}`
      );

      $('[data-hobbies="chocolate"] .tag-block__icon').html(icon);

      setTimeout(() => {
        biting = false;
      }, 700);
    }
  }
});
