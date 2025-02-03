const RRSS = CARD.rrss;
const MYSELF = ABOUT.myself;
const EXPERIENCE = ABOUT.experience;
const STUDIES = ABOUT.studies;
const PROGRAMS = ABOUT.stack;
const HOBBIES = ABOUT.hobbies;

const menuMainOptions = ['home', 'about', 'projects', 'contact'];
const stackGroups = ['web', 'graphic', 'other'];
const stack = stackGroups.map((group) =>
  PROGRAMS.filter((stack) => stack.current && stack.group === group)
);
const aboutSubsections = Object.keys(ABOUT);
const projectsFilterOptions = ['all', 'web', 'graphic'];
const projectsSubsections = ['_projectname', 'tools'];
const dataContactInputs = [
  { name: 'name', type: 'text' },
  { name: 'email', type: 'email' },
  /* { name: 'subject', type: 'text' }, */
  { name: 'message', type: 'textarea' },
  { name: 'submit', type: 'submit' },
];

const PAGE_CONTENT = {
  index: [
    {
      func: printOptionBlock, // target, list, itemSelected, nameList, trans
      props: [
        '.MENU-main__options',
        menuMainOptions,
        currentPage,
        'menu-main-options',
        'menu_main_options',
      ],
    },
    {
      func: printTagBlocks, // target, data, nameList, typeBlock, list
      props: ['.design-mode__btn', ['design'], 'hobbies', null, HOBBIES],
    },
  ],
  home: [
    {
      func: printCardBlock, // target, data
      props: ['.CONT-card-block', CARD],
    },
    {
      func: printLinkBlocks, // target, links, faces = 1
      props: ['#ARTI-home .card-block__links', RRSS],
    },
  ],
  about: [
    {
      func: printCardBlock, // target, data
      props: ['.CONT-card-block', CARD],
    },
    {
      func: printLinkBlocks, // target, links, faces = 1
      props: ['#ARTI-about .card-block__links', RRSS, 2],
    },
    {
      func: printSubsectionBlocks, // target, keys, fromPage
      props: ['#ARTI-about .CONT-data', aboutSubsections, 'subsections'],
    },
    {
      func: printDescriptionBlock, // list, type
      props: ['#ARTI-about .content-myself', MYSELF[LANG], 'p'],
    },
    {
      func: printInfoBlocks, // target, data, nameList
      props: [
        ['#ARTI-about .content-studies', '#ARTI-about .title-studies'],
        STUDIES,
        'studies',
      ],
    },
    {
      func: printInfoBlocks, // target, data, nameList
      props: [
        ['#ARTI-about .content-experience', '#ARTI-about .title-experience'],
        EXPERIENCE,
        'experience',
      ],
    },
    {
      func: printTagBlocks, // target, data, nameList, typeBlock, list
      props: ['.content-stack', stack, 'stack', 'inline', null, stackGroups],
    },
    {
      func: printTagBlocks, // target, data, nameList, typeBlock, list
      props: ['.content-hobbies', HOBBIES, 'hobbies'],
    },
  ],
  projects: [
    {
      func: printBoxBlocks, // target, data
      props: ['.projects-images', PROJECTS],
    },
    {
      func: printOptionBlock, // target, list, itemSelected, nameList, trans
      props: [
        '.MENU-filter__options',
        projectsFilterOptions,
        projectsFilterOptions[0],
        'filter-projects-option',
        'menu_filter_options',
      ],
    },
    {
      func: printSubsectionBlocks, // target, keys, fromPage
      props: ['.selected-project-data', projectsSubsections, 'subsections'],
    },
  ],
  contact: [
    {
      func: printCardBlock, // target, data
      props: ['.CONT-card-block', CARD],
    },
    {
      func: printLinkBlocks, // target, links, faces = 1
      props: ['#ARTI-contact .card-block__links', RRSS],
    },
    {
      func: printFormBlock, // target, inputs
      props: ['.CONT-form-block', dataContactInputs],
    },
  ],
};
