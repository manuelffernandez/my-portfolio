interface Experience {
  title: string;
  place: string;
  description?: string;
  date: string;
}

export const edexData: {
  en: { studies: Experience[]; jobs: Experience[] };
  es: { studies: Experience[]; jobs: Experience[] };
} = {
  en: {
    studies: [
      {
        title: 'Bachelor of Mathematics',
        place: 'Universidad del Comahue',
        description:
          'I did not end the university degree, but I acquired a lot of math knowledge.',
        date: 'March 2018 - Nov. 2020',
      },
      {
        title: 'Web development',
        place: 'Self-taught',
        description:
          'I read tons of documentation and also saw Youtube channels like: Free Code Camp, Traversy Media, The Net Ninja, The Coding Train, Midudev.',
        date: 'March 2021',
      },
      {
        title: 'React',
        place: 'Coderhouse',
        description:
          'I began studying more formally through an online institute.',
        date: 'June 2022 - Dec. 2022',
      },
      {
        title: 'PostgreSQL',
        place: 'EDTeam',
        description: 'I recently became interested in databases.',
        date: 'Apr. 2023 - Present',
      },
    ],
    jobs: [
      {
        title: 'Customers service',
        place: 'Merchandising Teleférico Cerro Otto',
        date: 'Jan. 2016 - Dec. 2017',
      },
      {
        title: 'Bakery',
        place: 'My own place',
        date: 'Dec. 2020 - Oct. 2021',
      },
      {
        title: 'Cashier',
        place: 'Teleférico Cerro Otto',
        description: 'I gained a lot of team working experience.',
        date: 'Jan. 2022 - Dec. 2022',
      },
    ],
  },
  es: {
    studies: [
      {
        title: 'Licenciatura en Matemáticas',
        place: 'Universidad del Comahue',
        description:
          'No terminé la carrera, pero adquirí un montón de conociemiento matemáticos.',
        date: 'Mar. 2018 - Nov. 2020',
      },
      {
        title: 'Web development',
        place: 'Self-taught',
        description:
          'Leí documentación y ví canales de Youtube como: Free Code Camp, Traversy Media, The Net Ninja, The Coding Train, Midudev.',
        date: 'Mar. 2021',
      },
      {
        title: 'React',
        place: 'Coderhouse',
        description:
          'Comencé a estudiar formalmente a través de un instituo online.',
        date: 'Jun. 2022 - Dic. 2022',
      },
      {
        title: 'PostgreSQL',
        place: 'EDTeam',
        description: 'Recientemente me he interesado por las bases de datos.',
        date: 'Ene. 2023 - Actualidad',
      },
    ],
    jobs: [
      {
        title: 'Atención al cliente',
        place: 'Merchandising Teleférico Cerro Otto',
        date: 'Ene. 2016 - Dic. 2017',
      },
      {
        title: 'Panadero',
        place: 'Mi propio lugar',
        date: 'Dic. 2020 - Oct. 2021',
      },
      {
        title: 'Cajero',
        place: 'Teleférico Cerro Otto',
        description: 'Gané un monton de experiencia de trabajo en equipo.',
        date: 'Ene. 2022 - Dic. 2022',
      },
    ],
  },
};
