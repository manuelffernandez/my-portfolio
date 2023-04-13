import { Findme } from './Findme';
import { Edex } from './Edex';

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
  // { sectionId: 'Ed/Ex', element: '' },
  // { sectionId: 'Skills', element: '' },
  // { sectionId: 'Projects', element: '' },
];

export default sections;
