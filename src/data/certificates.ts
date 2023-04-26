interface Certificate {
  title: string;
  institute: string;
  issueDate: Date;
  link: string;
}

export const certificates: Certificate[] = [
  {
    title: 'Web Development',
    institute: 'Coderhouse',
    issueDate: new Date(2022, 7),
    link: 'https://www.coderhouse.com/certificados/631cea991b5ea30019ab2a4c',
  },
  {
    title: 'JavaScript',
    institute: 'Coderhouse',
    issueDate: new Date(2022, 9),
    link: 'https://www.coderhouse.com/certificados/6365bdda0fa3c3000f75e7f6',
  },
  {
    title: 'React Js',
    institute: 'Coderhouse',
    issueDate: new Date(2022, 11),
    link: 'https://www.coderhouse.com/certificados/63b0b31adb7d5f000eb16839',
  },
  {
    title: 'Frontend React',
    institute: 'Coderhouse',
    issueDate: new Date(2022, 11),
    link: 'https://www.coderhouse.com/certificados/63b0b31adb7d5f000eb1683c',
  },
  {
    title: 'Programming paradigms',
    institute: 'EDTeam',
    issueDate: new Date(2023, 3),
    link: 'https://app.ed.team/u/manuelfernandez1fa/curso/paradigmas',
  },
];
