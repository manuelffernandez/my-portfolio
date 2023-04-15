import styles from './Section.module.scss';

interface Props {
  id: string;
  children: JSX.Element | JSX.Element[];
  title: string;
  subtitle: string;
}

const Section = (props: Props): JSX.Element => {
  const { id, children, title, subtitle } = props;
  const { section, sectionTitle, sectionSubtitle } = styles;

  return (
    <section id={id} className={`container ${section}`}>
      <h3 className={sectionTitle}>{title}</h3>
      <h4 className={sectionSubtitle}>{subtitle}</h4>
      {children}
    </section>
  );
};

export default Section;
