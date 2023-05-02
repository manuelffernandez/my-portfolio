interface Experience {
  title: string;
  place: string;
  description?: string;
  date: string;
}

export const edexData: { studies: Experience[]; jobs: Experience[] } = {
  studies: [
    {
      title: 'Database administrator',
      place: 'EDTeam',
      description:
        'Recently became interested in database management systems, so I decided to start the db admin career at EDTeam. Currently I am studying SQL and PostgreSQL.',
      date: 'Apr. 2023 - Present',
    },
    {
      title: 'React',
      place: 'Coderhouse',
      description: 'Began studying more formally through an online institute.',
      date: 'June 2022 - Dec. 2022',
    },
    {
      title: 'Web development',
      place: 'Self-taught',
      description:
        'Read tons of documentation and also saw Youtube channels like: Free Code Camp, Traversy Media, The Net Ninja, The Coding Train, Midudev.',
      date: 'March 2021',
    },
    {
      title: 'Bachelor of Mathematics',
      place: 'Universidad del Comahue',
      description:
        'Acquired extensive knowledge in fields like algebra, calculus, geometry, and linear algebra, among others',
      date: 'March 2018 - Nov. 2020',
    },
  ],
  jobs: [
    {
      title: 'HR Collaborator & Cashier',
      place: 'Teleférico Cerro Otto',
      description:
        'Gained a lot of team working experience and communication skills. Collaboration was essential in meeting high demands.',
      date: 'Jan. 2022 - Dec. 2022',
    },
    {
      title: 'Bakery',
      place: 'My own place',
      description: 'Acquired management and planification skills.',
      date: 'Dec. 2020 - Oct. 2021',
    },
    {
      title: 'Customers service',
      place: 'Merchandising Teleférico Cerro Otto',
      description:
        'Communication, planning and organization were key concepts in my daily work performance."',
      date: 'Jan. 2016 - Dec. 2017',
    },
  ],
};
