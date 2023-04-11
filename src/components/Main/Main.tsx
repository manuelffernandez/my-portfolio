import { Home } from '../';
import styles from './Main.module.scss';

const Main = (): JSX.Element => {
  const { mainCont } = styles;

  return (
    <main className={mainCont}>
      <Home />
    </main>
  );
};

export default Main;
