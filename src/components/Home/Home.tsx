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
          <a
            target='__blank'
            rel='noopener noreferrer'
            href='https://firebasestorage.googleapis.com/v0/b/portfolio-1c1e5.appspot.com/o/Manuel Facundo Fernadez - Resume.pdf?alt=media'
            className={homeDescButton}>
            <span className={cvStyle}>
              <span className={cvStyleCV}>CV</span> English
            </span>
          </a>
          <a
            target='__blank'
            rel='noopener noreferrer'
            href='https://firebasestorage.googleapis.com/v0/b/portfolio-1c1e5.appspot.com/o/Manuel%20Facundo%20Fernadez%20-%20Curr%C3%ADculum.pdf?alt=media'
            className={homeDescButton}>
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
