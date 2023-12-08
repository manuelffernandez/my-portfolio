import { fetchSkills } from '@/services/fetchSkills';
import { type Skill } from '@/types';
import { useEffect, useState } from 'react';
import styles from './Objectives.module.scss';

const Objectives = (): JSX.Element => {
  const { objCont, iconCont, iconContTitle, iconContImg, iconContImgDisabled } =
    styles;

  const [objs, setObjs] = useState<Skill[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const getObjs = async (): Promise<void> => {
      const skills = await fetchSkills();
      setLoading(false);
      setObjs(skills);
    };

    setLoading(true);
    void getObjs();
  }, []);

  return (
    <div className={objCont}>
      {loading ? (
        <p>Loading...</p>
      ) : (
        objs
          .filter(skill => !skill.learned)
          .sort((skillA, skillB) => {
            if (skillA.studying && !skillB.studying) return -1;
            if (!skillA.studying && skillB.studying) return 1;
            return 0;
          })
          .map((skill, index) => (
            <div key={index} className={iconCont}>
              {skill.studying ? (
                <>
                  <img
                    className={iconContImg}
                    src={skill.icon}
                    alt={skill.title}
                  />
                  <div>
                    <h5 className={iconContTitle}>{skill.title}</h5>
                    <p className='color-cyan'>Currently studying</p>
                  </div>
                </>
              ) : (
                <>
                  <img
                    className={iconContImgDisabled}
                    src={skill.icon}
                    alt={skill.title}
                  />
                  <div>
                    <h5 className={iconContTitle}>{skill.title}</h5>
                    <p className='color-blue'>Planning to study</p>
                  </div>
                </>
              )}
            </div>
          ))
      )}
    </div>
  );
};

export default Objectives;
