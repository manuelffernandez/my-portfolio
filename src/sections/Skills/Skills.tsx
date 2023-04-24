import { Tooltip, TooltipWrapper } from '../../components';
import { skills } from '../../data/skills';
import styles from './Skills.module.scss';

const Skills = (): JSX.Element => {
  const { skillsGrid, iconCont, iconContImg } = styles;

  return (
    <TooltipWrapper>
      <div className={skillsGrid}>
        {skills
          .filter(skill => skill.learned)
          .map((skill, index) => (
            <Tooltip key={index} index={index} text={skill.title}>
              <div className={iconCont}>
                <img
                  className={iconContImg}
                  src={skill.icon}
                  alt={skill.title.concat(' icon')}
                />
              </div>
            </Tooltip>
          ))}
      </div>
    </TooltipWrapper>
  );
};

export default Skills;
