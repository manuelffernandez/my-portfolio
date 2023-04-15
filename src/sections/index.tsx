import { Findme } from './Findme';
import { Edex } from './Edex';
import { Skills } from './Skills';
import { Projects } from './Projects';
import { Objectives } from './Objectives';

interface Section {
  id: string;
  title: string;
  subtitle: string;
  element: JSX.Element;
}

const sections: Section[] = [
  {
    id: 'findme',
    title: 'Find me',
    subtitle: 'Get in contact',
    element: <Findme />,
  },
  {
    id: 'edex',
    title: 'Background',
    subtitle: 'Education and Work Experience',
    element: <Edex />,
  },
  {
    id: 'skills',
    title: 'Skills',
    subtitle: 'My tech level',
    element: <Skills />,
  },
  {
    id: 'projects',
    title: 'Projects',
    subtitle: 'Favorite works',
    element: <Projects />,
  },
  {
    id: 'objectives',
    title: 'Objectives',
    subtitle: `What I'm currently learning`,
    element: <Objectives />,
  },
];

export default sections;
