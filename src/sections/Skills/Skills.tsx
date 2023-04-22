import { skills } from '../../data/skills';
import styles from './Skills.module.scss';

const Skills = (): JSX.Element => {
  const { skillsGrid, iconCont, iconContImg } = styles;

  return (
    <div className={skillsGrid}>
      {skills
        .filter(skill => skill.learned)
        .map((skill, index) => (
          <div key={index} className={iconCont}>
            <img
              className={iconContImg}
              src={skill.icon}
              alt={skill.title.concat(' icon')}
            />
          </div>
        ))}
    </div>
  );
};

export default Skills;
