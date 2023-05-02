import styles from './Home.module.scss';
import englishCv from '../../assets/pdf/Manuel Facundo Fernadez - English.pdf';
import spanishCv from '../../assets/pdf/Manuel Facundo Fernadez - Español.pdf';

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
    buttons,
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
        <div className={buttons}>
          <a download={true} href={englishCv} className={homeDescButton}>
            <span className={cvStyle}>
              <span className={cvStyleCV}>CV</span> English
            </span>
          </a>
          <a download={true} href={spanishCv} className={homeDescButton}>
            <span className={cvStyle}>
              <span className={cvStyleCV}>CV</span> Español
            </span>
          </a>
        </div>
      </div>
      <div className={homeImgCont}>
        <img
          src='https://res.cloudinary.com/dke7ynizq/image/upload/v1682985824/portfolio/me_y8hndj.jpg'
          alt='Self-portrait of Manuel'
          className={homeImgContImage}
        />
      </div>
    </section>
  );
};

export default Home;
