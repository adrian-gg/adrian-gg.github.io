// optionBlock
const optionBlock = (item, itemSelected, nameList, trans) => {
  const className = item === itemSelected && 'option--selected';
  return `<li
      class="${classNames(`option option-${item}`, className)}"
      data-${nameList}="${item}"
    >
      ${getTranslation([`lst_${trans}`, item])}
    </li>`;
};

const printOptionBlock = (target, list, itemSelected, nameList, trans) => {
  let block = '';
  list.forEach((item) => {
    block += optionBlock(item, itemSelected, nameList, trans);
  });
  $(target).html(block);
};

// cardBlock
const cardBlock = (data) => {
  const { name, photo, photo_alt, ocupations } = data;
  const photoAlt = photo_alt[LANG];
  const ocupationsBlock = ocupations[LANG].join(
    ` <span id="txt-bar">|</span> `
  );

  return `<div class="card-block">
      <div class="card-block__body">
        <div class="card-block__header faces">
          <div class="card-block__picture face face--front">
            <img
              src="${photo}"
              alt="${photoAlt}"
              class="picture"
            />
          </div>
          <div class="card-block__picture face face--back"></div>
        </div>

        <div class="card-block__data">
          <div class="card-block__title faces">
            <h1 class="face--front">${name}</h1>
            <h1 class="face--back"></h1>
          </div>
          <div class="card-block__description faces">
            <h3 class="face--front">${ocupationsBlock}</h3>
            <h3 class="face--back"></h3>
          </div>
        </div>
      </div>

      <div class="card-block__footer">
        <div class="card-block__links"></div>
      </div>
    </div>`;
};

const printCardBlock = (target, data) => {
  const block = cardBlock(data);
  $(target).html(block);
};

// linkBlock
const linkBlock = (data, faces = 1) => {
  const { link, face_front, face_back, color } = data;

  if (faces === 2) {
    return `<div class="CONT-link">
        <div class="link face face--front">
          <a href="${link[LANG] ?? link}"
            target="_blank"
            style="--color-link: #${color}"
          >
            ${iconBlock('rrss', face_front)}
          </a>
        </div>
        <div class="link face face--back btn-${face_back}">
          ${iconBlock('project', face_back)}
        </div>
      </div>`;
  } else {
    return `<div class="link">
        <a href="${link[LANG] ?? link}"
          target="_blank"
          style="--color-link: #${color}"
        >
          ${iconBlock('rrss', face_front)}
        </a>
      </div>`;
  }
};

const printLinkBlocks = (target, links, faces = 1) => {
  let block = '';
  if (faces === 2) {
    block += `<span id="progress-bar"></span>`;
  }

  links.forEach((link) => {
    if (link.current) {
      block += linkBlock(link, faces);
    }
  });
  $(target).html(block);
};

// iconBlock
const iconBlock = (file, icon) => {
  const use = `<use class="svg" href="/assets/images/icons/${file}-icons.svg#${icon}" />`;
  let sizeIcon = 64;

  if (file === 'rrss' || file === 'project') {
    sizeIcon = 32;
  } else if (file === 'logo') {
    sizeIcon = 129;
  }

  return `<svg class="svg" viewBox="0 0 ${sizeIcon} ${sizeIcon}" width="${sizeIcon}" height="${sizeIcon}" xmlns="http://www.w3.org/2000/svg">${use}</svg>`;
};

const printIconBlock = (target, category, iconName) => {
  const icon = iconBlock(category, iconName);
  $(target).html(icon);
};

// subsectionBlock
const subsectionBlock = (item, nameList) => {
  return `<div class="subsection-block subsection-block-${item}">
      <div class="title-box">
        <h4 class="title title-${item}">
          ${getTranslation([`lst_${nameList}`, item])}
        </h4>
        <div class="links"></div>
      </div>
      <div class="content content-${item}"></div>
    </div>`;
};

const printSubsectionBlocks = (target, keys, fromPage) => {
  let block = '';
  keys.forEach((key) => {
    block += subsectionBlock(key, fromPage);
  });
  $(target).append(block);
};

// descriptionBlock
const descriptionBlock = (description, type) => {
  return type
    ? `${formatText(description, type)}`
    : `${formatText(description)}`;
};

const printDescriptionBlock = (target, list, type) => {
  let block = '';
  list.forEach((description) => {
    block += descriptionBlock(description, type);
  });
  $(target).html(block);
};

// infoBlock
const infoBlock = (key, nameList) => {
  const { id, name, description, logo, date, exp } = key;
  return `<div class="info-block" data-${nameList}="${id}">
      <div class="info-block__logo">
        ${iconBlock('logo', logo)}
      </div>
      <div class="info-block__data">
        <h6 class="info-block__data-name">${name}</h6>
        <p class="info-block__data-description">${description[LANG]}</p>
        <p class="info-block__data-date">
          <span class="parenthesis">
            ${date[LANG]} ${formatDate(exp)}
          </span>
        </p>
      </div>
    </div>`;
};

const printInfoBlocks = (target, data, nameList) => {
  const totalTime = { years: 0, months: 0 };
  const multiTarget = typeof target !== 'string';
  let block = '';

  data.forEach((key, i) => {
    block += infoBlock(key, nameList);
    totalTime.years += key.exp.years;
    totalTime.months += key.exp.months;

    if (i === data.length - 1 && multiTarget) {
      $(target[1]).append(`&nbsp;${formatText(formatDate(totalTime))}`);
    }
  });
  $(multiTarget ? target[0] : target).html(block);
};

// tagBlock
const tagBlock = (item, nameList, typeBlock, list) => {
  const formatKey = typeof item === 'string' ? findById(item, list) : item;
  const { id, name } = formatKey;
  const className = classNames(
    'tag-block',
    typeBlock && `tag-block--${typeBlock}`
  );

  return `<div class="${className}" data-${nameList}="${id}">
      <div class="tag-block__icon">
        ${iconBlock(nameList, id)}
      </div>
      <p class="tag-block__title">${name[LANG] ?? name}</p>
    </div>`;
};

const printTagBlocks = (target, data, nameList, typeBlock, list) => {
  let block = '';
  data.forEach((key) => {
    block += tagBlock(key, nameList, typeBlock, list);
  });
  $(target).html(block);
};

// inputBlock
const inputBlock = (name, type) => {
  const placeholder = getTranslation(['lst_form_inputs', name]);

  if (type === 'textarea') {
    return `<textarea
        aria-labelledby="${placeholder}"
        cols="30"
        name="${name}"
        rows="5"
        placeholder="${placeholder}"
        class="textarea"
        id="${name}"
        required
      ></textarea>`;
  }
  return `<input
      aria-labelledby="${placeholder}"
      type="${type}"
      name="${name}"
      placeholder="${placeholder}"
      class="input"
      id="${name}"
      required="${type !== 'submit'}"
      value="${type === 'submit' ? placeholder : ''}"
    />`;
};

// formBlock
const formBlock = (inputs) => {
  return `<form
      method="post"
      action="https://formspree.io/f/mlekgylq"
      class="form-block"
      onsubmit="return validateForm()"
    >
      ${inputs
        .map((input) => {
          const { name, type } = input;
          return inputBlock(name, type);
        })
        .join('')}
    </form>`;
};

const printFormBlock = (target, inputs) => {
  const block = formBlock(inputs);
  $(target).html(block);
};

// boxBlock
const boxBlock = (key) => {
  const { id, name, type } = key;
  let types = type.join(' ');

  return `<div class="box-block ${types}" data-project="${id}">
      <div class="box-block__name"><h5>${name}</h5></div>
      <img
        src="assets/images/projects/${id}/portada_-_${id}.png"
        alt="Imagen del logotipo del proyecto ${id}"
        class="box-block__image">
      <img 
        src="assets/images/projects/${id}/portada_-_${id}.jpg"
        alt="Imagen del logotipo del proyecto ${id}"
        class="box-block__image box-block__image--color">
    </div>`;
};

const printBoxBlocks = (target, data) => {
  let block = '';
  data.forEach((key) => {
    block += boxBlock(key);
  });
  $(target).html(block);
};
