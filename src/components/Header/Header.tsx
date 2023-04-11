import { useEffect, useState } from 'react';
import styles from './Header.module.scss';
import { sections } from '../../helpers/sections';

const Header = (): JSX.Element => {
  const bpMedium: number = 968;
  const [displayMenu, setDisplayMenu] = useState<boolean>(false);

  const {
    header,
    nav,
    navLogo,
    navMenu,
    navMenuDisplayed,
    navList,
    navLink,
    navClose,
    navButtonMenu,
  } = styles;

  useEffect(() => {
    const onResize = (): void => {
      if (window.innerWidth > bpMedium && displayMenu) {
        setDisplayMenu(false);
      }
    };
    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, [displayMenu]);

  return (
    <header className={`${header}`}>
      <nav className={`container ${nav}`}>
        <a href={`#${sections[0]}`} className={`fw-100 ${navLogo}`}>
          M
        </a>
        <div className={`${navMenu} ${displayMenu ? navMenuDisplayed : ''}`}>
          <ul className={`grid ${navList}`}>
            {sections
              .filter(section => section !== sections[0])
              .map(section => (
                <li key={section}>
                  <a
                    onClick={() => {
                      setDisplayMenu(false);
                    }}
                    href={`#${section}`}
                    className={navLink}>
                    {section}
                  </a>
                </li>
              ))}
          </ul>
          <i
            onClick={() => {
              setDisplayMenu(false);
            }}
            className={`fa-solid fa-xmark ${navClose}`}></i>
        </div>
        <div
          onClick={() => {
            setDisplayMenu(true);
          }}>
          <i className={`fa-solid fa-bars ${navButtonMenu}`}></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
