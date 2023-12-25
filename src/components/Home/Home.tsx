import { type Info, type ResumeReferences } from '@/types';
import { fetchResume } from '@/services/fetchResume';
import { useEffect, useState } from 'react';
import styles from './Home.module.scss';
import { fetchInfo } from '@/services/fetchInfo';

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

  const INITIAL_STATES = {
    resumes: { en: '', es: '' },
    info: { subtitle: 'Front-end developer', description: 'Loading...' },
  };
  const [resumes, setResumes] = useState<ResumeReferences>(
    INITIAL_STATES.resumes
  );
  const [info, setInfo] = useState<Info>(INITIAL_STATES.info);

  useEffect(() => {
    fetchResume()
      .then(res => {
        setResumes(res);
      })
      .catch(err => {
        console.log(err);
      });

    fetchInfo()
      .then(res => {
        setInfo(res);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <section className={`container ${homeCont}`}>
      <div className={homeDesc}>
        <div>
          <h1 className={homeDescTitle}>Manuel Fernandez</h1>
          <h2 className={homeDescSubtitle}>{info.subtitle}</h2>
          <p className={`fw-200 ${homeDescText}`}>{info.description}</p>
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
