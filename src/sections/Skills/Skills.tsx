import { icons } from '../../data/icons';
import styles from './Skills.module.scss';

const Skills = (): JSX.Element => {
  const { skillsGrid, iconCont, iconContImg } = styles;

  return (
    <div className={skillsGrid}>
      {icons.map((icon, index) => (
        <div key={index} className={iconCont}>
          <img
            className={iconContImg}
            src={icon.icon}
            alt={icon.title.concat(' icon')}
          />
        </div>
      ))}
    </div>
  );
};

export default Skills;
