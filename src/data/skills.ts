import htmlIcon from '../assets/icons/html5.svg';
import cssIcon from '../assets/icons/css3.svg';
import sassIcon from '../assets/icons/sass.svg';
import jsIcon from '../assets/icons/javascript.svg';
import tsIcon from '../assets/icons/typescript.svg';
import gitIcon from '../assets/icons/git.svg';
import bsIcon from '../assets/icons/bootstrap.svg';
import muiIcon from '../assets/icons/mui.svg';
import eslintIcon from '../assets/icons/eslint.svg';
import formikIcon from '../assets/icons/formik.svg';
import reactrouterIcon from '../assets/icons/react-router.svg';
import reactIcon from '../assets/icons/react.svg';
import reduxIcon from '../assets/icons/redux.svg';
import jestIcon from '../assets/icons/jest.svg';
import dockerIcon from '../assets/icons/docker.svg';
import postgresIcon from '../assets/icons/postgresql.svg';

export interface Skill {
  title: string;
  link: string;
  icon: string;
  learned: boolean;
  studying: boolean;
}

export const skills: Skill[] = [
  {
    title: 'HTML5',
    link: 'https://www.w3.org/',
    icon: htmlIcon,
    learned: true,
    studying: false,
  },
  {
    title: 'CSS3',
    link: 'https://developer.mozilla.org/es/docs/Web/CSS',
    icon: cssIcon,
    learned: true,
    studying: false,
  },
  {
    title: 'Sass',
    link: 'https://sass-lang.com/',
    icon: sassIcon,
    learned: true,
    studying: false,
  },
  {
    title: 'JavaScript',
    link: 'https://developer.mozilla.org/es/docs/Web/JavaScript',
    icon: jsIcon,
    learned: true,
    studying: false,
  },
  {
    title: 'TypeScript',
    link: 'https://www.typescriptlang.org/',
    icon: tsIcon,
    learned: true,
    studying: false,
  },
  {
    title: 'git',
    link: 'https://git-scm.com/',
    icon: gitIcon,
    learned: true,
    studying: false,
  },
  {
    title: 'Bootstrap',
    link: 'https://getbootstrap.com/',
    icon: bsIcon,
    learned: true,
    studying: false,
  },
  {
    title: 'MaterialUI',
    link: 'https://mui.com/',
    icon: muiIcon,
    learned: true,
    studying: false,
  },
  {
    title: 'ESLint',
    link: 'https://eslint.org/',
    icon: eslintIcon,
    learned: true,
    studying: false,
  },
  {
    title: 'Formik',
    link: 'https://formik.org/',
    icon: formikIcon,
    learned: true,
    studying: false,
  },
  {
    title: 'React Router',
    link: 'https://reactrouter.com/en/main',
    icon: reactrouterIcon,
    learned: true,
    studying: false,
  },
  {
    title: 'React',
    link: 'https://react.dev/',
    icon: reactIcon,
    learned: true,
    studying: false,
  },
  {
    title: 'Redux',
    link: 'https://redux.js.org/',
    icon: reduxIcon,
    learned: true,
    studying: false,
  },
  {
    title: 'Jest',
    link: 'https://redux.js.org/',
    icon: jestIcon,
    learned: false,
    studying: false,
  },
  {
    title: 'Docker',
    link: 'https://redux.js.org/',
    icon: dockerIcon,
    learned: false,
    studying: false,
  },
  {
    title: 'PostgreSQL',
    link: 'https://redux.js.org/',
    icon: postgresIcon,
    learned: false,
    studying: true,
  },
];
