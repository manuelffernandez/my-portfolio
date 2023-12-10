import { Contact } from '@/components';
import { socialNetworkLinks } from '@/lib/constants/socialNetworkLinks';
import styles from './Findme.module.scss';

const Findme = (): JSX.Element => {
  const { contactGrid } = styles;

  return (
    <div className={contactGrid}>
      {socialNetworkLinks.map((net, index) => (
        <Contact key={index} data={net} />
      ))}
    </div>
  );
};

export default Findme;
