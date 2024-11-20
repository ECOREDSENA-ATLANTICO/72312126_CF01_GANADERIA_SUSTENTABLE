export default {
  global: {
    componenteFormativo: 'Generalidades de la ganadería sustentable',
    descripcionCurso:
      'La ganadería sustentable es un enfoque de producción ganadera que busca equilibrar la producción de alimentos con la protección del medio ambiente, el bienestar animal y el desarrollo socioeconómico de las comunidades rurales. Este tipo de ganadería se enfoca en prácticas que reducen el impacto ambiental, promueven la salud del suelo y del agua, y mejoran la calidad de vida de las personas involucradas en el sector.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-4.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Generalidades de la ganadería sustentable',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Manejo de información de la finca ganadera',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Alimentos en la nutrición de los bovinos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Pastos y técnicas para la conservación de forrajes',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/72312126_CF01_DU.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Ganadería sustentable',
      referencia:
        'Angel, J. G. (s.f). Cuales son los Modelos para una Ganadería Sustentable [Video]. TVAGRO.',
      tipo: 'Video',
      link: 'https://www.youtube.com/embed/Rjnkr7UCs34?si=deACReNVWAiWo_Lk',
    },
  ],
  glosario: [
    {
      termino: 'Ganadería',
      significado:
        'la ganadería es la actividad económica y agrícola que se dedica a la cría y manejo de animales con fines productivos, como la obtención de carne, leche, cuero y otros productos.',
    },
    {
      termino: 'Sustentable',
      significado:
        'la sustentabilidad se refiere a la capacidad de satisfacer las necesidades del presente sin comprometer la capacidad de las futuras generaciones para satisfacer sus propias necesidades.',
    },
    {
      termino: 'Bovinos',
      significado:
        'los bovinos son mamíferos rumiantes pertenecientes a la familia de los bóvidos, que incluye tanto a las vacas como a los toros.',
    },
  ],
  referencias: [
    {
      referencia:
        'Evangelista, J. (2011). Evaluación de forrajes. Bogotá, Colombia: Universidad Nacional de Colombia.',
      link: '',
    },
    {
      referencia:
        'FAO. (s.f.). Capítulo VI cultivos para heno - leguminosas forrajeras y legumbres. Consultado el 27 de marzo de 2015.',
      link: 'http://www.fao.org/docrep/007/x7660s/x7660s0a.htm',
    },
    {
      referencia:
        'FEDEGAN y SENA. (2013). Manual de cómo elaborar un heno de buena calidad. Consultado el 27 de marzo de 2015',
      link:
        'http://www.fedegan.org.co/manual-de-como-elaborar-un-heno-de-buena-calidad',
    },
    {
      referencia:
        'Franco, L., Calero, D. y Ávila, P. (2007). Alternativas para la conservación de forrajes. Consultado el 27 de marzo de 2015.',
      link:
        'https://repositorio.unal.edu.co/bitstream/handle/unal/8413/9789584411747.pdf?sequence=1&isAllowed=y',
    },
    {
      referencia:
        'Mora, J. (2005). Planificación de fincas ganaderas eco amigables. Ibagué, Colombia: Universidad del Tolima',
      link: '',
    },
    {
      referencia:
        'Rúa, M. (2010). ¿Cómo aforar un potrero para pastorear correctamente? Consultado el 27 de marzo de 2015',
      link:
        'https://www.engormix.com/lecheria/pastoreo-racional/como-aforar-potrero-pastoreo_a28633/',
    },
    {
      referencia:
        'Villanueva, C., Ibrahim, M., Torres, K. y Torres, M. (2008). Planificación agroecológica de fincas ganaderas: La experiencia de la subcuenca Copán, Honduras.',
      link:
        'https://www.researchgate.net/publication/242366514_Planificacion_agroecologica_de_fincas_ganaderas_La_experiencia_de_la_subcuenca_Copan_Honduras',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Miguel de Jesús ParedesMaestre',
          cargo: 'Responsable de línea de producción',
          centro:
            'Centro para el desarrollo agroecológico Y agroindustrial Sabanalarga - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Ángela Viviana Páez Perilla',
          cargo: 'Experta temática',
          centro: 'Centro agroindustrial - Regional Quindío.',
        },
        {
          nombre: 'Luis Guillermo Álvarez García',
          cargo: 'Evaluador instruccional',
          centro:
            'Centro para el desarrollo agroecológico y agroindustrial Sabanalarga - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Carmen Alicia Martinez Torres',
          cargo: 'Diseñador <em>web</em>',
          centro:
            'Centro para el desarrollo agroecológico y agroindustrial Sabanalarga - Regional Atlántico',
        },
        {
          nombre: 'Rafael Bladimir Pérez Meriño',
          cargo: 'Desarrollador <em>fullstack</em>',
          centro:
            'Centro para el desarrollo agroecológico y agroindustrial Sabanalarga - Regional Atlántico',
        },
        {
          nombre: 'Alexander Rafael Acosta Bedoya',
          cargo: 'Animador y productor audiovisual',
          centro:
            'Centro para el desarrollo agroecológico y agroindustrial Sabanalarga - Regional Atlántico',
        },
        {
          nombre: 'Nelson Ivan Vera Briceño',
          cargo: 'Animador y productor audiovisual',
          centro:
            'Centro para el desarrollo agroecológico y agroindustrial Sabanalarga - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Jairo Luis Valencia Ebratt',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro:
            'Centro para el desarrollo agroecológico y agroindustrial Sabanalarga - Regional Atlántico',
        },
        {
          nombre: 'Juan Carlos Cardona Acosta',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro:
            'Centro para el desarrollo agroecológico y agroindustrial Sabanalarga - Regional Atlántico',
        },
        {
          nombre: 'Carolina Coca Salazar',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro para el desarrollo agroecológico y agroindustrial Sabanalarga - Regional Atlántico',
        },
        {
          nombre: 'Luz Karime Amaya Cabra',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro para el desarrollo agroecológico y agroindustrial Sabanalarga - Regional Atlántico',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
