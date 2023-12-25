import { Certificates } from './Certificates';
import { Edex } from './Edex';
import { Findme } from './Findme';
import { Projects } from './Projects';
import { Skills } from './Skills';
// import { Objectives } from './Objectives';

interface Section {
  id: string;
  title: string;
  subtitle: string;
  element: JSX.Element;
}

const sections: Section[] = [
  {
    id: 'edex',
    title: 'Background',
    subtitle: 'Education and Work Experience',
    element: <Edex />,
  },
  {
    id: 'projects',
    title: 'Projects',
    subtitle: 'Favorite works',
    element: <Projects />,
  },
  {
    id: 'skills',
    title: 'Skills',
    subtitle: 'My tech level',
    element: <Skills />,
  },
  // {
  //   id: 'objectives',
  //   title: 'Objectives',
  //   subtitle: `Techs I will learn`,
  //   element: <Objectives />,
  // },
  {
    id: 'certificates',
    title: 'Certificates',
    subtitle: 'External links',
    element: <Certificates />,
  },
  {
    id: 'findme',
    title: 'Find me',
    subtitle: 'Get in contact',
    element: <Findme />,
  },
];

export default sections;
