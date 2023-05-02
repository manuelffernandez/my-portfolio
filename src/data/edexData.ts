interface Experience {
  title: string;
  place: string;
  description?: string;
  date: string;
}

export const edexData: { studies: Experience[]; jobs: Experience[] } = {
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
};
