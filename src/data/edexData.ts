interface Experience {
  title: string;
  place: string;
  description?: string;
  startDate: Date;
  finishDate?: Date;
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
          'I did not end the university degree, but I adquired a lot of math knowledges.',
        startDate: new Date(2018, 2, 1),
        finishDate: new Date(2020, 10, 30),
      },
      {
        title: 'Web development',
        place: 'Self-taught',
        description:
          'I read tons of documentation and also saw Youtube channels like: FreeCodeCamp, Traversy Media, The Net Ninja, The Coding Train, Midudev.',
        startDate: new Date(2021, 2, 15),
      },
      {
        title: 'React',
        place: 'Coderhouse',
        description:
          'I began studying more formally through an online institute.',
        startDate: new Date(2022, 5, 8),
        finishDate: new Date(2022, 11, 21),
      },
      {
        title: 'PostgreSQL',
        place: 'EDTeam',
        description: 'I recently became interested in databases.',
        startDate: new Date(2022, 3, 5),
      },
    ],
    jobs: [
      {
        title: 'Customers service',
        place: 'Merchandising Teleférico Cerro Otto',
        startDate: new Date(2016, 0, 1),
        finishDate: new Date(2017, 11, 20),
      },
      {
        title: 'Bakery entrepreneurship',
        place: 'my own place',
        startDate: new Date(2016, 0, 1),
        finishDate: new Date(2017, 11, 20),
      },
      {
        title: 'Cashier',
        place: 'Teleférico Cerro Otto',
        description: 'I gained a lot of team working experience.',
        startDate: new Date(2022, 0, 3),
        finishDate: new Date(2022, 11, 31),
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
        startDate: new Date(2018, 2, 1),
        finishDate: new Date(2020, 10, 30),
      },
      {
        title: 'Web development',
        place: 'Self-taught',
        description:
          'Leí documentación y ví canales de Youtube como: FreeCodeCamp, Traversy Media, The Net Ninja, The Coding Train, Midudev.',
        startDate: new Date(2021, 2, 15),
      },
      {
        title: 'React',
        place: 'Coderhouse',
        description:
          'Comencé a estudiar formalmente a través de un instituo online.',
        startDate: new Date(2022, 5, 8),
        finishDate: new Date(2022, 11, 21),
      },
      {
        title: 'PostgreSQL',
        place: 'EDTeam',
        description: 'Recientemente me he interesado por las bases de datos.',
        startDate: new Date(2022, 3, 5),
      },
    ],
    jobs: [
      {
        title: 'Atención al cliente',
        place: 'Merchandising Teleférico Cerro Otto',
        startDate: new Date(2016, 0, 1),
        finishDate: new Date(2017, 11, 20),
      },
      {
        title: 'Emprendimiento panadero',
        place: 'Mi propio lugar',
        startDate: new Date(2016, 0, 1),
        finishDate: new Date(2017, 11, 20),
      },
      {
        title: 'Cajero',
        place: 'Teleférico Cerro Otto',
        description: 'Gané un monton de experiencia de trabajo en equipo.',
        startDate: new Date(2022, 0, 3),
        finishDate: new Date(2022, 11, 31),
      },
    ],
  },
};
