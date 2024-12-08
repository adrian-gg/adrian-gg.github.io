const CARD = {
  name: 'Adrián García',
  photo: './assets/images/me.jpg',
  photo_alt: {
    en: 'Black and white photo of Adrian',
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
      name: 'Undefind Academy',
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
    { id: 'html', name: 'HTML5', current: true },
    { id: 'css', name: 'CSS3', current: true },
    { id: 'bootstrap', name: 'Bootstrap', current: false },
    { id: 'tailwind', name: 'Tailwind', current: false },
    { id: 'sass', name: 'Sass', current: true },
    { id: 'js', name: 'JavaScript', current: true },
    { id: 'jquery', name: 'jQuery', current: true },
    { id: 'ts', name: 'TypeScript', current: true },
    { id: 'react', name: 'React', current: true },
    { id: 'redux', name: 'Redux', current: false },
    { id: 'zustand', name: 'Zustand', current: true },
    { id: 'testing_library', name: 'Testing Library', current: true },
    { id: 'jest', name: 'Jest', current: true },
    { id: 'node', name: 'Node', current: false },
    { id: 'next', name: 'Next', current: false },
    { id: 'mongodb', name: 'MongoDB', current: false },
    { id: 'angular', name: 'Angular', current: false },
    { id: 'firebase', name: 'Firebase', current: false },
    { id: 'php', name: 'PHP', current: false },
    { id: 'wordpress', name: 'Wordpress', current: false },
    { id: 'mysql', name: 'MySQL', current: true },
    { id: 'git', name: 'Git', current: true },
    { id: 'github', name: 'Github', current: true },
    { id: 'markdown', name: 'Markdown', current: false },
    { id: 'npm', name: 'npm', current: true },
    { id: 'pnpm', name: 'pnpm', current: false },
    { id: 'vite', name: 'Vite', current: true },
    { id: 'ai', name: 'A.I.', current: true },
    { id: 'figma', name: 'Figma', current: true },
    { id: 'xd', name: 'Adobe Xd', current: true },
    { id: 'illustrator', name: 'Illustrator', current: true },
    { id: 'photoshop', name: 'Photoshop', current: true },
    { id: 'after_efects', name: 'After Effects', current: true },
    { id: 'premiere_pro', name: 'Premiere Pro', current: true },
    { id: 'indesign', name: 'InDesign', current: true },
    { id: 'blender', name: 'Blender', current: false },
    { id: 'construct2', name: 'Construct 2', current: false },
    { id: 'unity', name: 'Unity', current: false },
    { id: 'godot', name: 'Godot', current: false },
    { id: 'pack_windows_office', name: 'Pack Windows Office', current: false },
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
