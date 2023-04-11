import { Home, Findme } from '../../sections';
import styles from './Main.module.scss';

const Main = (): JSX.Element => {
  const { mainCont } = styles;

  return (
    <main className={mainCont}>
      <Home />
      <Findme />
    </main>
  );
};

export default Main;
