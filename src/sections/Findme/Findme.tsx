import { Contact, Section } from '../../components';
import { sections } from '../../helpers/sections';
import { socialNetworkLinks } from '../../helpers/socialNetworkLinks';
import styles from './Findme.module.scss';

const Findme = (): JSX.Element => {
  const { contactGrid } = styles;
  return (
    <Section
      sectionName={sections[1]}
      title='Find me'
      subtitle='Get in contact'>
      <div className={contactGrid}>
        {socialNetworkLinks.map((net, index) => (
          <Contact key={index} data={net} />
        ))}
      </div>
    </Section>
  );
};

export default Findme;
