import { Home, Section } from '@/components';
import sections from '@/sections';
import styles from './Main.module.scss';

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
