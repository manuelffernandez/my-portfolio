import { Findme } from './Findme';
import { Edex } from './Edex';
import { Skills } from './Skills';

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
  // { sectionId: 'Projects', element: '' },
];

export default sections;
