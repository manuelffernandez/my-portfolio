import manuPortrait from '../../assets/img/me.jpg';
import styles from './Home.module.scss';
import myCv from '../../assets/pdf/Manuel Facundo Fernadez.pdf';

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
          <h2 className={homeDescSubtitle}>Front-End developer</h2>
          <p className={`fw-200 ${homeDescText}`}>
            Im currently seeking my first job in IT. Over the past year I have
            been dedicated to mastering web development with React as my primary
            library.
          </p>
        </div>
        <div>
          <a download={true} href={myCv} className={homeDescButton}>
            <span className={cvStyle}>
              Download <span className={cvStyleCV}>CV</span>
            </span>
          </a>
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
