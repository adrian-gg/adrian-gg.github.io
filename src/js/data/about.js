const CARD = {
  name: 'Adrián García',
  photo: './assets/images/me.jpg',
  photo_alt: {
    en: 'Black and white photo of Adrián',
    es: 'Foto en blanco y negro de Adrián',
  },
  ocupations: {
    en: ['Web Developer', 'Graphic Designer'],
    es: ['Desarrollador Web', 'Diseñador Gráfico'],
  },
  rrss: [
    {
      link: 'https://www.linkedin.com/in/garciagregoriadrian/',
      face_front: 'linkedin',
      face_back: 'prev',
      color: '0073b1',
      current: true,
    },
    {
      link: 'https://github.com/adrian-gg',
      face_front: 'github',
      face_back: 'play',
      color: 'd3d3d3',
      current: true,
    },
    {
      link: {
        en: `./assets/documents/cv/en_cv_adrian_garcia.pdf`,
        es: `./assets/documents/cv/es_cv_adrian_garcia.pdf`,
      },
      face_front: 'cv',
      face_back: 'next',
      color: '25d366',
      current: true,
    },
    {
      link: 'https://codepen.io/GariCarandai',
      face_front: 'codepen',
      face_back: null,
      color: 'd3d3d3',
      current: false,
    },
    {
      link: 'https://www.behance.net/adrian-gg',
      face_front: 'behance',
      face_back: null,
      color: '0057ff',
      current: false,
    },
  ],
};

const ABOUT = {
  myself: {
    en: [
      'Technology and design enthusiast, specialized in creating and managing attractive and functional websites. I focus on improving the user experience, paying attention to every detail and using feedback as an essential tool for my professional growth.',
      'My goal is to continue developing in my field, always looking for new challenges and opportunities.',
    ],
    es: [
      'Entusiasta de la tecnología y el diseño, especializado en la creación y gestión de sitios web atractivos y funcionales. Me enfoco en mejorar la experiencia del usuario, prestando atención a cada detalle y utilizando el feedback como herramienta esencial para mi crecimiento profesional.',
      'Mi objetivo es continuar desarrollándome en mi campo, buscando siempre nuevos retos y oportunidades.',
    ],
  },
  experience: [
    {
      id: 'arocival',
      name: 'Arocival',
      description: {
        en: 'Computer Assistant',
        es: 'Auxiliar informático',
      },
      date: {
        en: 'Dec. 2024 - Currently',
        es: 'Dic. 2024 - Actualmente',
      },
      exp: {
        years: 0,
        months: 0,
      },
      logo: 'arocival',
    },
    {
      id: 'freelance',
      name: 'Freelance',
      description: {
        en: 'Front-end developer / Graphic designer',
        es: 'Desarrollador front-end / Diseñador gráfico',
      },
      date: {
        en: 'Jan. 2023 - Jan. 2024',
        es: 'Ene. 2023 - Ene. 2024',
      },
      exp: {
        years: 1,
        months: 0,
      },
      logo: 'freelance',
    },
    {
      id: 'stl',
      name: 'Streamloots',
      description: {
        en: 'Front-end developer / Graphic designer',
        es: 'Desarrollador front-end / Diseñador gráfico',
      },
      date: {
        en: 'Jun. 2020 - Jul. 2022',
        es: 'Jun. 2020 - Jul. 2022',
      },
      exp: {
        years: 2,
        months: 1,
      },
      logo: 'streamloots',
    },
    {
      id: 'dys',
      name: 'DoYouSpain',
      description: {
        en: 'Web designer / Graphic designer',
        es: 'Maquetador web / Diseñador gráfico',
      },
      date: {
        en: 'Mar. 2019 - May. 2020',
        es: 'Mar. 2019 - May. 2020',
      },
      exp: {
        years: 1,
        months: 2,
      },
      logo: 'doyouspain',
    },
  ],
  studies: [
    {
      id: 'ua',
      name: 'Undefined Academy',
      description: {
        en: 'Full-stack JavaScript Developer',
        es: 'Desarrollador JavaScript full-stack',
      },
      date: {
        en: 'Mar. 2023 - Mar. 2024',
        es: 'Mar. 2023 - Mar. 2024',
      },
      exp: {
        years: 1,
        months: 0,
      },
      logo: 'undefind_academy',
    },
    {
      id: 'esat',
      name: 'ESAT Valencia',
      description: {
        en: 'Front-end and UX/UI web development',
        es: 'Desarrollo web front-end y UX/UI',
      },
      date: {
        en: 'Nov. 2019 - Nov. 2020',
        es: 'Nov. 2019 - Nov. 2020',
      },
      exp: {
        years: 1,
        months: 0,
      },
      logo: 'esat',
    },
    {
      id: 'easd',
      name: 'EASD Castellón',
      description: {
        en: 'Graphic Design and Multimedia',
        es: 'Diseño Gráfico y Multimedia',
      },
      date: {
        en: 'Nov. 2015 - Nov. 2019',
        es: 'Nov. 2015 - Nov. 2019',
      },
      exp: {
        years: 4,
        months: 0,
      },
      logo: 'easd',
    },
  ],
  stack: [
    { id: 'html', name: 'HTML5', group: 'web', current: true },
    { id: 'css', name: 'CSS3', group: 'web', current: true },
    { id: 'bootstrap', name: 'Bootstrap', group: 'web', current: false },
    { id: 'tailwind', name: 'Tailwind', group: 'web', current: true },
    { id: 'sass', name: 'Sass', group: 'web', current: true },
    { id: 'js', name: 'JavaScript', group: 'web', current: true },
    { id: 'jquery', name: 'jQuery', group: 'web', current: true },
    { id: 'ts', name: 'TypeScript', group: 'web', current: true },
    { id: 'react', name: 'React', group: 'web', current: true },
    { id: 'redux', name: 'Redux', group: 'web', current: false },
    { id: 'zustand', name: 'Zustand', group: 'web', current: true },
    {
      id: 'testing_library',
      name: 'Testing Library',
      group: 'web',
      current: true,
    },
    { id: 'jest', name: 'Jest', group: 'web', current: true },
    { id: 'node', name: 'Node', group: 'web', current: false },
    { id: 'next', name: 'Next', group: 'web', current: true },
    { id: 'mongodb', name: 'MongoDB', group: 'web', current: false },
    { id: 'angular', name: 'Angular', group: 'web', current: false },
    { id: 'firebase', name: 'Firebase', group: 'web', current: false },
    { id: 'php', name: 'PHP', group: 'web', current: false },
    { id: 'wordpress', name: 'Wordpress', group: 'web', current: false },
    { id: 'mysql', name: 'MySQL', group: 'web', current: true },
    { id: 'git', name: 'Git', group: 'web', current: true },
    { id: 'github', name: 'Github', group: 'web', current: true },
    { id: 'markdown', name: 'Markdown', group: 'web', current: false },
    { id: 'npm', name: 'npm', group: 'web', current: true },
    { id: 'pnpm', name: 'pnpm', group: 'web', current: false },
    { id: 'vite', name: 'Vite', group: 'web', current: true },
    { id: 'ai', name: 'A.I.', group: 'web', current: true },
    { id: 'figma', name: 'Figma', group: 'web', current: true },
    { id: 'xd', name: 'Adobe Xd', group: 'web', current: true },
    { id: 'illustrator', name: 'Illustrator', group: 'graphic', current: true },
    { id: 'photoshop', name: 'Photoshop', group: 'graphic', current: true },
    {
      id: 'after_efects',
      name: 'After Effects',
      group: 'graphic',
      current: true,
    },
    {
      id: 'premiere_pro',
      name: 'Premiere Pro',
      group: 'graphic',
      current: true,
    },
    { id: 'indesign', name: 'InDesign', group: 'graphic', current: true },
    { id: 'blender', name: 'Blender', group: 'graphic', current: true },
    { id: 'construct2', name: 'Construct 2', group: 'other', current: false },
    { id: 'unity', name: 'Unity', group: 'other', current: false },
    { id: 'godot', name: 'Godot', group: 'other', current: false },
    {
      id: 'pack_windows_office',
      name: 'Pack Windows Office',
      group: 'other',
      current: false,
    },
  ],
  hobbies: [
    { id: 'movies', name: { en: 'Movies', es: 'Cine' } },
    { id: 'videogames', name: { en: 'Videogames', es: 'Videojuegos' } },
    { id: 'music', name: { en: 'Music', es: 'Música' } },
    { id: 'puzzles', name: { en: 'Puzzles', es: 'Puzles' } },
    { id: 'code', name: { en: 'Code', es: 'Code' } },
    { id: 'design', name: { en: 'Design', es: 'Diseño' } },
    { id: 'piano', name: { en: 'Piano', es: 'Piano' } },
    { id: 'chocolate', name: { en: 'Chocolate', es: 'Chocolate' } },
  ],
};
