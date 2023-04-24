import { useContext } from 'react';
import { Tooltip } from '../../../components';
import TooltipContext from '../../../context/TooltipContext';
import { type Skill } from '../../../data/skills';
import styles from './SkillList.module.scss';

interface Props {
  skills: Skill[];
}

const SkillList = (props: Props): JSX.Element => {
  const { skills } = props;
  const { handleSelect, selectedIndex } = useContext(TooltipContext);
  const { skillsGrid, iconCont, iconContImg } = styles;

  return (
    <div className={skillsGrid}>
      {skills
        .filter(skill => skill.learned)
        .map((skill, index) => (
          <Tooltip
            key={index}
            selected={selectedIndex === index}
            onClick={() => {
              handleSelect(index);
            }}
            text={skill.title}>
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
  );
};

export default SkillList;
