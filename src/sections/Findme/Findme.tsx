import { Section } from '../../components';
import { sections } from '../../helpers/sections';

const Findme = (): JSX.Element => {
  return (
    <Section
      sectionName={sections[1]}
      title='Find me'
      subtitle='Get in contact'>
      <div>Linkedin</div>
    </Section>
  );
};

export default Findme;
