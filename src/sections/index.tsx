import { Findme } from './Findme';

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
  // { sectionId: 'Ed/Ex', element: '' },
  // { sectionId: 'Skills', element: '' },
  // { sectionId: 'Projects', element: '' },
];

export default sections;
