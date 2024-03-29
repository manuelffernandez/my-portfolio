import { type Network } from '@/lib/constants/socialNetworkLinks';
import styles from './Contact.module.scss';

interface Props {
  data: Network;
}

const Contact = (props: Props): JSX.Element => {
  const { data } = props;
  const { contactCont, contactTitle, contactIcon } = styles;

  return (
    <a
      href={data.link}
      target='_blank'
      className={contactCont}
      rel='noopener noreferrer'>
      <div className={contactIcon}>{data.icon}</div>
      <p className={contactTitle}>{data.title}</p>
    </a>
  );
};

export default Contact;
