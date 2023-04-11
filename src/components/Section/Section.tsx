import styles from './Section.module.scss';

interface Props {
  sectionName: string;
  title: string;
  subtitle: string;
  children: JSX.Element | JSX.Element[];
}

const Section = (props: Props): JSX.Element => {
  const { sectionName, children, title, subtitle } = props;
  const { section, sectionTitle, sectionSubtitle } = styles;
  return (
    <section id={sectionName} className={`container ${section}`}>
      <h3 className={sectionTitle}>{title}</h3>
      <h4 className={sectionSubtitle}>{subtitle}</h4>
      {children}
    </section>
  );
};

export default Section;
