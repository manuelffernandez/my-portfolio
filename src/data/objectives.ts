import jestIcon from '../assets/icons/jest.svg';
import dockerIcon from '../assets/icons/docker.svg';
import postgresIcon from '../assets/icons/postgresql.svg';

interface Objective {
  title: string;
  studying: boolean;
  icon: string;
}

export const objectives: Objective[] = [
  {
    title: 'PostgreSQL',
    studying: true,
    icon: postgresIcon,
  },
  {
    title: 'Jest',
    studying: false,
    icon: jestIcon,
  },
  {
    title: 'Docker',
    studying: false,
    icon: dockerIcon,
  },
];
