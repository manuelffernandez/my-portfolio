import styles from './Footer.module.scss';

const Footer = (): JSX.Element => {
  const { footer, name, subname, portfolioRepo } = styles;

  return (
    <footer className={footer}>
      <div>
        <p className={name}>Manuel Fernandez</p>
        <p className={subname}>Front-End developer</p>
      </div>
      <a
        href='https://github.com/manuelffernandez/my-portfolio'
        rel='noopener noreferrer'
        target='__blank'
        title='Portfolio repository'
        className={portfolioRepo}>
        <i className='fa-brands fa-github'></i>
      </a>
    </footer>
  );
};

export default Footer;
