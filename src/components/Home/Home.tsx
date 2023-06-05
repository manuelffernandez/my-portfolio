import { useEffect, useState } from 'react';
import { fetchResume } from '../../services/fetchResume';
import styles from './Home.module.scss';
import { type ResumeReferences } from '../../interfaces/Resume';

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

  const INITIAL_STATE = {en: '', es: ''}
  const [resumes, setResumes] = useState<ResumeReferences>(INITIAL_STATE)

  useEffect(() => {
    fetchResume()
    .then((res) => { setResumes(res) })
    .catch((err) => { console.log(err) })
  },[])


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
            href={resumes.en}
            className={homeDescButton}>
            <span className={cvStyle}>
              <span className={cvStyleCV}>CV</span> English
            </span>
          </a>
          <a
            target='__blank'
            rel='noopener noreferrer'
            href={resumes.es}
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
