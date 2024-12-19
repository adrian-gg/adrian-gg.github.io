const PROJECTS = [
  {
    id: 'theweather',
    name: 'TheWeather',
    type: ['p-web'],
    links: {
      demo: 'https://adrian-gg.github.io/demos/theweather/',
      repo: 'https://github.com/adrian-gg/theweather/',
    },
    description: {
      es: [
        'TheWeather es una aplicación meteorológica con la que, haciendo uso de la API OpenWeatherMap,  podrás conocer las condiciones climáticas actuales y futuras, desde la temperatura y la humedad hasta la probabilidad de precipitaciones y la velocidad del viento.',
        '(Este proyecto es una prueba técnica por lo que se añaden otras funcionalidades como el formulario de contacto)',
      ],
      en: [
        'TheWeather is a weather application with which, making use of the OpenWeatherMap API, you will be able to know the current and future weather conditions, from temperature and humidity to the probability of precipitation and wind speed.',
        '(This project is a technical test so other functionalities are added such as the contact form)',
      ],
    },
    programs: [
      'figma',
      'html',
      'sass',
      'ts',
      'react',
      'jest',
      'testing_library',
    ],
    imgs: 2,
    current: true,
  },
  {
    id: 'dotblog',
    name: 'dotBlog',
    type: ['p-web'],
    links: {
      demo: 'https://adrian-gg.github.io/demos/dotblog/',
      repo: 'https://github.com/adrian-gg/dotblog',
    },
    description: {
      es: [
        'dotBlog (un proyecto para una prueba técnica) es un blog que te ofrece un panorama completo de la actualidad.',
        'Desde política y economía hasta tecnología y entretenimiento, te brindamos las noticias más relevantes para que estés al día en todos los ámbitos.',
      ],
      en: [
        'dotBlog (a project for a technical test) is a blog that gives you a complete overview of current affairs.',
        'From politics and economy to technology and entertainment, we bring you the most relevant news to keep you up to date in all areas.',
      ],
    },
    programs: ['figma', 'html', 'css', 'ts', 'react', 'zustand'],
    imgs: 2,
    current: true,
  },
  {
    id: 'nsmb_minigames',
    name: 'New Super Mario Bros. Minigames',
    type: ['p-web'],
    links: {
      demo: 'https://adrian-gg.github.io/demos/nsmb-minigames/',
      repo: 'https://github.com/adrian-gg/nsmb-minigames/',
    },
    description: {
      es: [
        `New Super Mario Bros. es un videojuego de plataformas desarrollado y publicado por Nintendo para Nintendo DS. Además de la aventura de seguir a Mario mientras se abre camino a través de los secuaces de Bowser para rescatar a la Princesa Peach, el juego cuenta con una sección de minijuegos.`,
        `En este proyecto se recopilarán los ocho minijuegos más icónicos del juego: ¡Peligro! ¡Bob-omb!, Dale a Monty, ¡Se busca!, Puzle de paneles, Test de Luigi, Póquer de Luigi, Empareja y despeja, y Divide y vencerás.`,
      ],
      en: [
        `New Super Mario Bros. is a platform video game developed and published by Nintendo for Nintendo DS. In addition to the adventure of following Mario as he fights his way through Bowser's minions to rescue Princess Peach, the game features a mini-game section.`,
        `This project will compile the game's eight most iconic mini-games: Danger, Bob-omb! Danger!, Whack-a-Monty, Wanted!, Puzzle Panel, Memory Match, Picture Poker, Pair-a-Gone y Sort or 'Splode.`,
      ],
    },
    programs: ['photoshop', 'html', 'css', 'ts', 'react'],
    imgs: 2,
    current: true,
  },
  {
    id: 'hollow_knight_hog',
    name: 'Hollow Knight: Salón de los Dioses',
    type: ['p-web'],
    links: {
      demo: 'https://adrian-gg.github.io/demos/hollow-knight-hog/',
      repo: 'https://adrian-gg.github.io/hollow-knight-hog/',
    },
    description: {
      es: [
        `Este proyecto pretende recrear el Salón de los Dioses, una zona extra que se encuentra en el cuarto y último de los paquetes de contenido gratuitos para Hollow Knight. En su interior alberga una gran cantidad de estatuas de distintos Jefes (Dioses) que aparecerán después de encontrarse con ellos a lo largo del juego.`,
      ],
      en: [
        `This project aims to recreate the Hall of Gods, an extra area found in the fourth and last of the free content packs for Hollow Knight. Inside it houses a large number of statues of different Bosses (Gods) that will appear after encountering them throughout the game.`,
      ],
    },
    programs: ['photoshop', 'xd', 'html', 'css', 'ts', 'react'],
    imgs: 2,
    current: true,
  },
  {
    id: 'summancer',
    name: 'Summancer',
    type: ['p-graphic', 'p-web'],
    links: {
      demo: 'https://adrian-gg.github.io/summancer/',
      repo: null,
    },
    description: {
      es: [
        `Summancer es un juego de cartas aleatorias donde te conviertes en un Summancer, un ser con el poder de invocar criaturas cósmicas para enfrentarte en batallas rituales en busca de sabiduría y supremacía.`,
        `Tu objetivo es derribar la base enemiga, y para lograrlo, debes generar cartas con poder y efectos aleatorios, lo que garantiza que cada partida sea una experiencia única, llena de desafíos y estrategia. Sumérgete en este universo misterioso y descubre las maravillas del cosmos mientras te enfrentas a tus oponentes en batallas épicas.`,
      ],
      en: [
        `Summancer is a random card game where you become a Summancer, a being with the power to summon cosmic creatures to engage in ritual battles in search of wisdom and supremacy.`,
        `Your objective is to overthrow the enemy base, and to achieve this, you must generate cards with random power and effects, which guarantees that each game is a unique experience, full of challenges and strategy. Immerse yourself in this mysterious universe and discover the wonders of the cosmos while facing your opponents in epic battles.`,
      ],
    },
    programs: [
      'illustrator',
      'photoshop',
      'xd',
      'html',
      'css',
      'js',
      'react',
      'ai',
    ],
    imgs: 9,
    current: false,
  },
  {
    id: 'wave',
    name: 'Wave',
    type: ['p-graphic'],
    links: null,
    description: {
      es: [
        `Tal como lo hacen los atletas para alcanzar sus objetivos, todos se benefician de un entrenador ejecutivo para prosperar. Wave se posiciona como la pionera en inteligencia de coaching colectivo a través de su aplicación, brindándote la capacitación propia de ejecutivos de élite en el mundo empresarial.`,
        `Siguiendo una estrategia habitual, Wave busca ampliar su presencia en las redes. Por ello, se han concebido estas propuestas que encapsulan tanto los valores como la identidad de la marca, reflejando su estilo distintivo.`,
      ],
      en: [
        `Just as athletes do to reach their goals, everyone benefits from an executive coach to thrive. Wave positions itself as the pioneer in collective coaching intelligence through its app, bringing you the training of elite executives in the business world.`,
        `Following a regular strategy, Wave seeks to expand its presence in the networks. Therefore, these proposals have been conceived to encapsulate both the brand's values and identity, reflecting its distinctive style.`,
      ],
    },
    programs: ['illustrator', 'photoshop'],
    imgs: 7,
    current: true,
  },
  {
    id: 'prinet',
    name: 'Prinet+',
    type: ['p-web'],
    links: {
      demo: 'https://adrian-gg.github.io/prinet-web_react/',
      repo: null,
    },
    description: {
      es: [
        `¿Alguna vez has tenido uno de esos días en los que has querido ver un película o serie, y descubres que no está disponible en ninguna de las plataformas por las que pagas, resignándote a tener que buscar en sitios web de dudosa procedencia en la que el diseño solo es comparable a su seguridad?`,
        `Con esta premisa nace Prinet+, un proyecto que pretende recrear una plataforma de streaming gratuita ficticia (de ahí lo de gratis) que toma como referencia las plataformas ya existentes como Amazon Prime, Netflix o Disney+ para crear algo nuevo, con un diseño moderno e intuitivo.`,
      ],
      en: [
        `Have you ever had one of those days when you wanted to watch a movie or series, and you discover that it is not available on any of the platforms you pay for, resigning yourself to having to search on websites of dubious origin in which the design is only comparable to its security?`,
        `With this premise Prinet+ is born, a project that aims to recreate a fictitious free streaming platform (hence the free) that takes as a reference existing platforms such as Amazon Prime, Netflix or Disney+ to create something new, with a modern and intuitive design.`,
      ],
    },
    programs: ['illustrator', 'xd', 'html', 'css', 'js', 'react'],
    imgs: 4,
    current: false,
  },
  {
    id: 'cosmere',
    name: 'Systems of Cosmere',
    type: ['p-web'],
    links: {
      demo: 'https://adrian-gg.github.io/cosmere_systems/',
      repo: null,
    },
    description: {
      es: [
        `El Cosmere es la palabra que define el universo en el cual muchos de los libros de Brandon Sanderson tienen lugar, siendo los sistemas que existen en este universo el escenario para sus historias.`,
        `Este mini proyecto es la recreación del mapa astral de las constelaciones y los 7 (por el momento) sistemas solares.`,
        `Interactuando con cada uno de ellos puedes saber que nombre y número de planetas lo conforman, su posición y todo lo que se conoce hasta la fecha.`,
      ],
      en: [
        `The Cosmere is the word that defines the universe in which many of Brandon Sanderson's books take place, being the systems that exist in this universe the setting for his stories.`,
        `This mini project is the recreation of the astral map of the constellations and the 7 (for the moment) solar systems.`,
        `By interacting with each of them you can know the name and number of planets, their position and everything that is known to date.`,
      ],
    },
    programs: ['illustrator', 'photoshop', 'xd', 'html', 'css', 'js'],
    imgs: 2,
    current: true,
  },
  {
    id: 'stl_app',
    name: 'Streamloots',
    type: ['p-web'],
    links: null,
    description: {
      es: [
        `Streamloots es una startup dedicada a la venta de cartas digitales para interactuar con los streamers. Por medio de su plataforma, estos crean sus colecciones y las presentan a sus viewers, quienes pueden ser más activos en los directos al canjearlas.`,
        `Siendo una de las primeras empresas en las que he trabajado tuve la oportunidad de participar en su rebranding y con ello imaginar una versión de la plataforma más acorde a este.`,
      ],
      en: [
        `Streamloots is a startup dedicated to selling digital cards to interact with streamers. Through its platform, they create their collections and present them to their viewers, who can be more active in live shows by redeeming them.`,
        `Being one of the first companies in which I have worked I had the opportunity to participate in its rebranding and thus imagine a version of the platform more in line with it.`,
      ],
    },
    programs: ['xd', 'html', 'css', 'js', 'react'],
    imgs: 6,
    current: true,
  },
  {
    id: 'ladysibi',
    name: 'LadySibi',
    type: ['p-web'],
    links: {
      demo: 'https://copacasas.ladysibi.com/',
      repo: null,
    },
    description: {
      es: [
        `LadySibi es una streamer que saca el mejor partido a Streamloots. Creó un evento mensual/anual sobre la Copa de las Casas y una colección de cartas con temática Harry Potter que sumaba o restaba puntos a una de las cuatro casas de Hogwards (Gryffindor, Slytherin, Hufflepuf y Ravenclaw). Sin embargo, este conteo de puntos no estaba automatizado, por lo que era ella misma quien los añadía en una hoja de excel manualmente.`,
        `A partir de esta necesidad, se creó un widget que detectaba el canjeo de las cartas y una página con un diseño más acorde a la temática de su canal que mostraba la puntuación de cada casa.`,
        `Más tarde se creó una expansión de animales fantásticos que requirió una sección nueva en la página que contaba el número de animales canjeados.`,
      ],
      en: [
        `LadySibi is a streamer who makes the most of Streamloots. She created a monthly/annual House Cup event and a collection of Harry Potter-themed cards that added or subtracted points to one of the four Hogwards houses (Gryffindor, Slytherin, Hufflepuf and Ravenclaw). However, this point count was not automated, so she was the one who added them manually in an excel sheet.`,
        `Based on this need, a widget was created that detected the redemption of the cards and a page with a design more in line with the theme of her channel that showed the score of each house.`,
        `Later, an expansion of fantastic animals was created, which required a new section on the page that counted the number of animals redeemed.`,
      ],
    },
    programs: [
      'illustrator',
      'photoshop',
      'xd',
      'html',
      'css',
      'js',
      'php',
      'mysql',
    ],
    imgs: 6,
    current: true,
  },
  {
    id: 'stl_csjd',
    name: 'Streamloots: Cursed Seas Judgement Day',
    type: ['p-graphic'],
    links: null,
    description: {
      es: [
        `Uno de los grandes eventos que organizó Streamloots junto a Sea of Thieves fue Cursed Seas Judgement Day. Este consistía en cuatro rondas donde tres equipos se enfrentarían por sobrevivir a un cuarto equipo maldito.`,
        `Para el evento se necesitó crear un logo, los anuncios de los equipos y casters que participaban y los overlays para su retransmisión en directo.`,
      ],
      en: [
        `One of the big events that Streamloots organized together with Sea of Thieves was Cursed Seas Judgment Day. This consisted of four rounds where three teams would face each other to survive a fourth cursed team.`,
        `For the event it was necessary to create a logo, the advertisements of the teams and casters that participated and the overlays for its live broadcast.`,
      ],
    },
    programs: ['illustrator', 'photoshop', 'after_efects'],
    imgs: 7,
    current: true,
  },
  {
    id: 'stl_branding',
    name: 'Streamloots Branding',
    type: ['p-graphic'],
    links: null,
    description: {
      es: [
        `Streamloots es una startup dedicada a la venta de cartas digitales para interactuar con los streamers. Estos crean sus colecciones y las presentan a su público, quienes pueden ser más activos en los directos al canjearlas.`,
        `Siendo una de las primeras empresas en las que he trabajado tuve la oportunidad de participar en su rebranding. Con el fin de conseguir un logo más claro, legible y que se adapte a un público más moderno se crea un logo más icónico acompañado de un lenguaje más fluido con las formas.`,
        `A partir de estos cambios se crean todo tipo de anuncios enfocados a la interactividad con las cartas como a networks o las miniaturas de Youtube.`,
      ],
      en: [
        `Streamloots is a startup dedicated to the sale of digital cards to interact with streamers. They create their collections and present them to their audience, who can be more active in live shows by redeeming them.`,
        `Being one of the first companies I worked for, I had the opportunity to participate in their rebranding. In order to achieve a clearer, more legible logo that adapts to a more modern public, a more iconic logo was created, along with a more fluid language with the shapes.`,
        `From these changes we created all kinds of ads focused on interactivity with the cards such as networks or YouTube thumbnails.`,
      ],
    },
    programs: ['illustrator', 'photoshop', 'after_efects'],
    imgs: 6,
    current: true,
  },
  {
    id: 'overlays',
    name: 'Overlays',
    type: ['p-web'],
    links: null,
    description: {
      es: [
        `Durante el postgrado ID3 de Diseño y Desarrollo Web en la ESAT presenté Overlays cuando nos pidieron crear un sitio web para ofertar un producto o servicio destinado a un público específico.`,
        `Overlays nace de mi afición por ver a los streamer y, en la mitad de los casos, encontrarme una descuidada manera de presentar su marca en sus canales.`,
        `Overlays es la respuesta para que, por un precio asequible, cualquier streamer pueda crear una identidad única y personal para su canal.`,
        `En Overlays encuentran un amplio abanico de recursos editables e incluso pueden contratar el servicio de creación de recursos personalizados.`,
      ],
      en: [
        `During the ID3 postgraduate course in Web Design and Development at ESAT I presented Overlays when we were asked to create a website to offer a product or service for a specific audience.`,
        `Overlays was born from my fondness for watching streamers and, in half of the cases, finding a sloppy way to present their brand on their channels.`,
        `Overlays is the answer so that, for an affordable price, any streamer can create a unique and personal identity for their channel.`,
        `In Overlays they find a wide range of editable assets and can even hire the service of creating custom assets.`,
      ],
    },
    programs: [
      'illustrator',
      'photoshop',
      'after_efects',
      'xd',
      'html',
      'css',
      'js',
    ],
    imgs: 4,
    current: true,
  },
  {
    id: 'puzzle_world',
    name: 'Puzzle World',
    type: ['p-web', 'p-graphic'],
    links: null,
    description: {
      es: [
        `Puzzle World es el resultado de la creación de la marca, interfaz, ilustraciones y sitio web para la promoción de un videojuego de puzles ficticio para dispositivos móviles.`,
        `Mi afición por los rompecabezas y el éxito de Pokémon Go me han llevado a mezclar ambos géneros y ofrecer con Puzzle World una manera de ejercitar tanto la mente como el cuerpo.`,
        `Puzzle World consiste en encontrar, coleccionar y resolver puzzles. Estos aparecen en cualquier parte del mundo guardados en cajas. Si quieres añadir uno a tu colección para más tarde resolverlo, antes debes enfrentarte a un mini juego para abrir la caja. Si fracasas, la caja y el puzzle explotaran.`,
        `Además, en caso de que los tengas repetidos, también puedes intercambiarlos con tus amigos o destruirlos por fragmentos y crearlos si tienes suficientes fragmentos.`,
      ],
      en: [
        `Puzzle World is the result of the creation of the branding, interface, illustrations and website for the promotion of a fictional puzzle video game for mobile devices.`,
        `My love for puzzles and the success of Pokémon Go have led me to mix both genres and offer with Puzzle World a way to exercise both mind and body.`,
        `Puzzle World consists of finding, collecting and solving puzzles. They appear anywhere in the world stored in boxes. If you want to add one to your collection to solve later, you must first face a mini-game to open the box. If you fail, the box and the puzzle will explode.`,
        `In addition, in case you have them repeated, you can also exchange them with your friends or destroy them for fragments and create them if you have enough fragments.`,
      ],
    },
    programs: [
      'illustrator',
      'photoshop',
      'after_efects',
      'xd',
      'blender',
      'html',
      'css',
      'js',
    ],
    imgs: 7,
    current: true,
  },
  {
    id: 'mickan',
    name: 'Mickan',
    type: ['p-graphic'],
    links: null,
    description: {
      es: [
        `Lorena, o más conocida por sus seguidores como Mickan, es una creadora de covers de piano en YouTube y amante de los videojuegos. Estas aficiones se han convertido en su trabajo y actualmente realiza directos en la plataforma de Twitch dedicados al Just Chatting y a hacer gameplays.`,
        `Siendo el zorro la mascota de su canal, quiere renovar su marca buscando una apariencia más profesional sin renunciar a su estilo.`,
      ],
      en: [
        `Lorena, or better known by her followers as Mickan, is a creator of piano covers on YouTube and a video game lover. These hobbies have become her job and she currently performs live on the Twitch platform dedicated to Just Chatting and making gameplays.`,
        `Being the fox the mascot of her channel, she wants to renew her brand looking for a more professional look without giving up her style.`,
      ],
    },
    programs: ['illustrator', 'photoshop', 'xd'],
    imgs: 4,
    current: true,
  },
  {
    id: '3_kings',
    name: '3 Kings',
    type: ['p-graphic'],
    links: null,
    description: {
      es: [
        `Entre mis primeros trabajos durante mis estudios de Diseño, 3 Kings se erigió como el proyecto que tenía como objetivo crear una identidad gráfica en torno a un personaje o personajes ficticios.`,
        `Los 3 Reyes Magos, figuras icónicas en la cultura popular, pero carentes de una representación gráfica fueron mi elección.`,
        `Al analizar la imagen de los 3 Reyes Magos que hoy en día tenemos, quedó claro que, en caso de existir, su marca sería indudablemente clásica. Sin embargo, esto también me inspiró a cuestionar y desafiar los límites de la tradición, buscando modernizar su representación fomentando así la interacción y la conexión con el público contemporáneo.`,
      ],
      en: [
        `Among my first works during my Design studies, 3 Kings stood out as the project that aimed to create a graphic identity around a fictional character or characters.`,
        `The 3 Kings, iconic figures in popular culture, but lacking a graphic representation were my choice.`,
        `When analyzing the image of the 3 Wise Men we have today, it became clear that, if they existed, their brand would undoubtedly be classic. However, this also inspired me to question and challenge the limits of tradition, seeking to modernize their representation, thus encouraging interaction and connection with contemporary audiences.`,
      ],
    },
    programs: ['illustrator', 'photoshop', 'indesign'],
    imgs: 4,
    current: true,
  },
  {
    id: 'heartnology',
    name: 'Heartnology',
    type: ['p-web', 'p-graphic'],
    links: null,
    description: {
      es: [
        `Herartnology es una empresa que surge a partir de la iniciativa de un estudiante de bioquímica y ciencias biomédicas que ofrece un kit para diagnosticar de forma segura y sin técnicas invasivas el posible rechazo en los trasplantes cardiacos.`,
        `Esta idea, que ganó el primer premio en diversos concursos, necesitó una identidad gráfica, el diseño de un packaging para presentar el kit de diagnóstico y un sitio web que actúa como una plataforma informativa para aquellos que buscan información sobre el kit de diagnóstico y su funcionamiento.`,
      ],
      en: [
        `Herartnology is a company that arose from the initiative of a biochemistry and biomedical sciences student who offers a kit to diagnose safely and without invasive techniques the possible rejection of heart transplants.`,
        `This idea, which won first prize in several competitions, required a graphic identity, the design of a packaging to present the diagnostic kit and a website that acts as an informative platform for those seeking information about the diagnostic kit and how it works.`,
      ],
    },
    programs: [
      'illustrator',
      'photoshop',
      'after_efects',
      'premiere_pro',
      'xd',
      'html',
      'css',
      'js',
      'php',
    ],
    imgs: 6,
    current: true,
  },
  {
    id: 'el_far',
    name: 'El Far',
    type: ['p-graphic'],
    links: null,
    description: {
      es: [
        `El Far es un trabajo que nace de un tipo de cliente habitual: un pequeño restaurante. Este fue construido a partir de un faro y tiene la peculiaridad de que solo abre por la noche.`,
        `Aprovechando mi gusto por jugar con las formas/figuras, utilicé la letra F para crear el perfil del faro. (Tal vez fui un poco sutil pero al menos el faro se ve ¿verdad? ¿verdad?).`,
      ],
      en: [
        `El Far is a work born from a type of regular client: a small restaurant. This was built from a lighthouse and has the peculiarity that only opens at night.`,
        `Taking advantage of my taste for playing with shapes/figures, I used the letter F to create the profile of the lighthouse.(Maybe I was a bit subtle but at least the lighthouse is visible, right? right?).`,
      ],
    },
    programs: ['illustrator', 'photoshop', 'indesign'],
    imgs: 6,
    current: true,
  },
  {
    id: 'guinxu',
    name: 'Guinxu',
    type: ['p-graphic'],
    links: null,
    description: {
      es: [
        `Presentándose como un youtuber con más de 400.000 seguidores y dedicado al desarrollo de videojuegos de manera independiente, Guillem (Guinxu) pretende darse a conocer en la industria de este sector. Pese a crear una marca que durante estos años ha ido moldeando a partir de los juegos que ha creado, no ha conseguido crear una identidad independiente a sus trabajos.`,
        `Su objetivo ahora, es dar el salto a la plataforma de streaming de Twitch, ocasión perfecta para un lavado de cara y actualización de su marca y para crear las overlays con las que hará directos.`,
      ],
      en: [
        `Introducing himself as a youtuber with more than 400,000 followers and dedicated to the development of video games independently, Guillem (Guinxu) aims to make himself known in the industry of this sector. Despite creating a brand that over the years has been molded from the games he has created, he has not managed to create an independent identity for his work.`,
        `His goal now is to make the leap to the Twitch streaming platform, perfect occasion for a facelift and update of his brand and to create the overlays with which he will do live.`,
      ],
    },
    programs: ['illustrator', 'photoshop', 'xd'],
    imgs: 4,
    current: true,
  },
  {
    id: 'zonoz',
    name: 'Zonoz',
    type: ['p-graphic'],
    links: null,
    description: {
      es: [
        `Zonoz es el resultado del proyecto tipográfico que realicé durante mis estudios en Diseño Gráfico. Es una marca de vino ficticia y el requisito era utilizar una pluma de escribir, o al menos que en el diseño final se viera el uso de la misma.`,
        `La elección de un nombre palíndromo fue deliberada, pues pretendía crear un ambigrama así, independientemente de cómo se cogiese la botella, siempre se leería ZONOZ.`,
      ],
      en: [
        `Zonoz is the result of the typographic project I did during my studies in Graphic Design. It is a fictitious wine brand and the requirement was to use a writing pen, or at least that in the final design the use of it could be seen.`,
        `The choice of a palindrome name was deliberate, as I intended to create an ambigram so that, regardless of how the bottle was held, it would always read ZONOZ.`,
      ],
    },
    programs: ['illustrator', 'photoshop', 'indesign'],
    imgs: 4,
    current: true,
  },
];
