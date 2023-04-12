import manuPortrait from '../../assets/img/me.jpg';
import styles from './Home.module.scss';

const Home = (): JSX.Element => {
  const {
    homeCont,
    homeDesc,
    homeDescTitle,
    homeDescSubtitle,
    homeDescText,
    homeDescButton,
    homeImgCont,
    homeImgContImage,
    cvStyle,
    cvStyleCV,
  } = styles;

  return (
    <section className={`container ${homeCont}`}>
      <div className={homeDesc}>
        <div>
          <h1 className={homeDescTitle}>Manuel Fernandez</h1>
          <h2 className={homeDescSubtitle}>Frontend developer</h2>
          <p className={`fw-200 ${homeDescText}`}>
            Im currently seeking my first job in IT. Over the past year I have
            been dedicated to mastering web development with React as my primary
            technology.
          </p>
        </div>
        <div>
          <button className={homeDescButton}>
            <span className={cvStyle}>
              Download <span className={cvStyleCV}>CV</span>
            </span>
          </button>
        </div>
      </div>
      <div className={homeImgCont}>
        <img
          src={manuPortrait}
          alt='Self-portrait of Manuel'
          className={homeImgContImage}
        />
      </div>
    </section>
  );
};

export default Home;
