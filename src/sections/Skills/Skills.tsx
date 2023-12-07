import { useEffect, useState } from 'react';
import { Tooltip, TooltipWrapper } from '../../components';
import { type Skill } from '../../interfaces/Skill';
import { fetchSkills } from '../../services/fetchSkills';
import styles from './Skills.module.scss';

const Skills = (): JSX.Element => {
  const { skillsGrid, iconCont, iconContImg } = styles;

  const [skills, setSkills] = useState<Skill[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const getObjs = async (): Promise<void> => {
      const skills = await fetchSkills();
      setLoading(false);
      setSkills(skills);
    };

    setLoading(true);
    void getObjs();
  }, []);

  return (
    <TooltipWrapper>
      <div className={skillsGrid}>
        {loading ? (
          <p>Loading...</p>
        ) : (
          skills
            .filter(skill => skill.learned)
            .sort((a, b) => a.order - b.order)
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
            ))
        )}
      </div>
    </TooltipWrapper>
  );
};

export default Skills;
