export interface Network {
  link: string;
  title: string;
  icon: JSX.Element;
}

export const socialNetworkLinks: Network[] = [
  {
    link: 'https://www.linkedin.com/in/manuelffernandez/',
    title: 'LinkedIn',
    icon: <i className='fa-brands fa-linkedin-in'></i>,
  },
  {
    link: 'https://github.com/manuelffernandez',
    title: 'Github',
    icon: <i className='fa-brands fa-github'></i>,
  },
  {
    link: 'mailto:manufer6503@gmail.com',
    title: 'Mail',
    icon: <i className='fa-regular fa-envelope'></i>,
  },
];
