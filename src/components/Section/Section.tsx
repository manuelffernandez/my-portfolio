import styles from './Section.module.scss';

interface Props {
  sectionName: string;
  title: string;
  children: JSX.Element | JSX.Element[];
}

const Section = (props: Props): JSX.Element => {
  const { sectionName, children, title } = props;
  const { section, sectionTitle } = styles;
  return (
    <section id={sectionName} className={section}>
      <h2 className={sectionTitle}>{title}</h2>
      {children}
    </section>
  );
};

export default Section;
