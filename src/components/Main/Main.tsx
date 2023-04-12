import styles from './Main.module.scss';
import sections from '../../sections';
import { Home, Section } from '../';

const Main = (): JSX.Element => {
  const { mainCont } = styles;

  return (
    <main className={mainCont}>
      <Home />
      {sections.map((section, index) => {
        const { id, title, subtitle, element } = section;
        return (
          <Section key={index} id={id} title={title} subtitle={subtitle}>
            {element}
          </Section>
        );
      })}
    </main>
  );
};

export default Main;
