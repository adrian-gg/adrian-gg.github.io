// local
const getFromLocal = (key) => {
  return localStorage.getItem(key);
};

const saveInLocal = (key, data) => {
  localStorage.setItem(
    key,
    typeof data === 'string' ? data : JSON.stringify(data)
  );
};

// language
const getLangFromBrowser = () => {
  let lang = navigator.language || navigator.userLanguage;

  if (lang === 'es' || lang === 'es-ES') {
    lang = 'es';
  } else {
    lang = 'en';
  }

  saveInLocal(LOCAL_HOST_LANG_KEY, lang);
  return lang;
};

// classes
const classNames = (...classes) => {
  return classes.filter(Boolean).join(' ');
};

const removeClasses = (target, classes, prevClass = '') => {
  classes.forEach(c => target.removeClass(`${prevClass}${c}`));
}

const addClasses = (target, classes, prevClass = '') => {
  classes.forEach(c => target.addClass(`${prevClass}${c}`));
}

// texts
const formatText = (text, cont) => {
  let formattedText = text
    .replaceAll('(', '<span class="parenthesis">(')
    .replaceAll(')', ')</span>');
  if (cont) {
    return `<${cont}>${formattedText}</${cont}>`;
  }
  return formattedText;
};

const formatDate = (date) => {
  const { years, months } = date;
  const transYears =
    years === 1 ? getTranslation('year') : getTranslation('years');
  const transMonths =
    years === 1 ? getTranslation('month') : getTranslation('months');
  let formattedDate = '';

  if (years > 0) {
    formattedDate += `${months > 0 ? '+' : ''}${years} ${transYears}`;
  } else if (months > 0) {
    formattedDate += `${months} ${transMonths}`;
  }

  return `(${formattedDate})`;
};

function findById(id, list) {
  return list.find((item) => item.id === id);
};

// form
function validateForm() {
  const name = $('#name'),
    email = $('#email'),
    subject = $('#subject'),
    message = $('#message');

  const nameValue = name.val().trim(),
    emailValue = email.val().trim(),
    subjectValue = subject.val().trim(),
    messageValue = message.val().trim();

  // Regular Expressions
  const nameRegex = /^[a-zA-ZñÑáéíóúÁÉÍÓÚ ]*$/;
  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
  const textRegex = /^[,\\.\\a-zA-Z0-9ñÑáéíóúÁÉÍÓÚ ]*$/;

  let checking = true;

  // Reset previous errors
  $('.input--error').removeClass('input--error');

  // Validate Name
  if (nameValue === '') {
    name.addClass('input--error');
    checking = false;
  } else if (!nameRegex.test(nameValue)) {
    name.addClass('input--error');
    checking = false;
  }

  // Validate Email
  if (emailValue === '') {
    email.addClass('input--error');
    checking = false;
  } else if (!emailRegex.test(emailValue)) {
    email.addClass('input--error');
    checking = false;
  }

  // Validate Subject
  if (subjectValue === '') {
    subject.addClass('input--error');
    checking = false;
  } else if (!textRegex.test(subjectValue)) {
    subject.addClass('input--error');
    checking = false;
  }

  // Validate Message
  if (messageValue === '') {
    message.addClass('input--error');
    checking = false;
  } else if (!textRegex.test(messageValue)) {
    message.addClass('input--error');
    checking = false;
  }

  // Final validation result
  return checking;
}

// blocks
function printContent(list) {
  list.forEach(({func, props}) => {
    func(...props);
  });
}