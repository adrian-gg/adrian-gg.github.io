$(document).ready(function () {
  /* ============================== AJAX ============================== */

  const WEBS = [
    '7', //book
    'david',
    'ac',
    '8', //map
    'future',
    'newspaper',
    '8', //pc
    'text',
    'homer',
    'duo',
    '4', //animation
    'rock',
    'hello',
    'hyperspace',
    'noise',
    'matrix',
  ]; //15 of 17
  const $designModeWebsBox = $('.design-mode__webs');

  function loadWebs(web) {
    return new Promise((resolve, reject) => {
      $.ajax({
        url: `./src/webs/web_${web}.html`,
        success: function (data) {
          resolve(data);
        },
        error: function (error) {
          reject(error);
        },
      });
    });
  }

  const promises = [];

  for (let i = 0; i < WEBS.length; i++) {
    promises.push(loadWebs(WEBS[i]));
  }

  function printWebInfoBox(target, data) {
    data.forEach((item) => {
      const { name, description } = item;
      const block = `<div class="web_info__item">
          <div class="web_info__name">${name}</div>
          <div class="web_info__description">${description[LANG]}</div>
        </div>`;
      $(target).append(block);
    });
  }
  function printWebTagBox(target, data) {
    data.forEach((item) => {
      const { name } = item;
      const block = `<div class="web_tag__item">
          <div class="web_tag__img"></div>
          <div class="web_tag__name">${name[LANG] ?? name}</div>
        </div>`;
      $(target).append(block);
    });
  }

  Promise.all(promises)
    .then((webs) => {
      let block = '';
      webs.forEach((web) => {
        block += web;
      });
      $designModeWebsBox.html(block);

      // print menu options
      menuMainOptions.forEach((item) => {
        $('.web_box_menu').append(
          `<div class="${classNames(
            'web_menu__option',
            item === 'about' && 'option--select'
          )}">
            <div class="web_menu__option_img"></div>
            ${getTranslation(['lst_menu_main_options', item])}
          </div>`
        );
      });

      // print ocupation
      const ocupationsBlock = CARD.ocupations[LANG].join(
        ` <span id="txt-bar">|</span> `
      );
      $('.web_box_ocupation').append(ocupationsBlock);

      // print section head Myself
      $('.web_box_myself').append(
        getTranslation([`lst_subsections`, 'myself'])
      );
      // print section head  Experience
      $('.web_box_experience').append(
        getTranslation([`lst_subsections`, 'experience'])
      );
      // print section head  Studies
      $('.web_box_studies').append(
        getTranslation([`lst_subsections`, 'studies'])
      );
      // print section head  Stack
      $('.web_box_stack').append(getTranslation([`lst_subsections`, 'stack']));
      // print section head  Hobbies
      $('.web_box_hobbies').append(
        getTranslation([`lst_subsections`, 'hobbies'])
      );

      // print description
      printDescriptionBlock('.web_box_description', MYSELF[LANG], 'p');
      // print experience content
      printWebInfoBox('.web_box_experience_cont', EXPERIENCE);
      // print experience content
      printWebInfoBox('.web_box_studies_cont', STUDIES);
      // print stack content
      printWebTagBox('.web_box_stack_cont', stack);
      // print hobbies content
      printWebTagBox('.web_box_hobbies_cont', HOBBIES);

      // print links
      CARD.rrss.forEach((link) => {
        const { face_front } = link;
        const block = `<div class="web_submenu__option">
            <div class="web_submenu__option_img"></div>
            <span>${face_front}</span>
          </div>`;
        $('.web_box_links').append(block);
      });
    })
    .catch((error) => {
      console.error(
        'There was an error loading and rendering the pages:',
        error
      );
    });
});
