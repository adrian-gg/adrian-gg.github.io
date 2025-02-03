const LOCAL_HOST_LANG_KEY = 'portfolio-lang';
const LANG = getFromLocal(LOCAL_HOST_LANG_KEY) ?? getLangFromBrowser();

const TRANSLATIONS = {
  en: {
    lst_menu_main_options: {
      home: 'Home',
      about: 'About',
      projects: 'Projects',
      contact: 'Contact',
    },
    lst_subsections: {
      myself: 'Myself',
      experience: 'Experience',
      studies: 'Studies',
      stack: 'Technology Stack',
      hobbies: 'Hobbies and Interests',
      tools: 'Tools',
    },
    lst_stack_groups: {
      web: 'Web Development',
      graphic: 'Graphic Design',
      other: 'Others',
    },
    lst_menu_filter_options: {
      all: 'All',
      web: 'Web',
      graphic: 'Graphic',
    },
    lst_form_inputs: {
      name: 'Name',
      email: 'Email',
      subject: 'Subject',
      message: 'Message',
      submit: 'Submit',
    },
    year: 'year',
    years: 'years',
    month: 'month',
    months: 'months',
  },
  es: {
    lst_menu_main_options: {
      home: 'Inicio',
      about: 'Perfil',
      projects: 'Proyectos',
      contact: 'Contacto',
    },
    lst_subsections: {
      myself: 'Mi persona',
      experience: 'Experiencia',
      studies: 'Estudios',
      stack: 'Stack tecnológico',
      hobbies: 'Aficiones e intereses',
      tools: 'Herramientas',
    },
    lst_stack_groups: {
      web: 'Desarrollo web',
      graphic: 'Diseño gráfico',
      other: 'Otros',
    },
    lst_menu_filter_options: {
      all: 'Todos',
      web: 'Web',
      graphic: 'Gráficos',
    },
    lst_form_inputs: {
      name: 'Nombre',
      email: 'Correo electrónico',
      subject: 'Asunto',
      message: 'Mensaje',
      submit: 'Enviar',
    },
    year: 'año',
    years: 'años',
    month: 'mes',
    months: 'meses',
  },
};

const getTranslation = (keys) => {
  if (typeof keys === 'string') {
    return TRANSLATIONS[LANG][keys] ?? keys;
  }
  return keys.reduce((obj, key) => obj?.[key], TRANSLATIONS[LANG]) ?? keys[1];
};

const changeLanguage = () => {
  const lang = LANG === 'en' ? 'es' : 'en';
  saveInLocal(LOCAL_HOST_LANG_KEY, lang);
  window.location.reload();
};
