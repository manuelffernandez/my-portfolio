import styles from './Objectives.module.scss';
import { skills } from '../../data/skills';

const Objectives = (): JSX.Element => {
  const { objCont, iconCont, iconContTitle, iconContImg, iconContImgDisabled } =
    styles;

  return (
    <div className={objCont}>
      {skills
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
                  <p className='color-blue'>Not yet</p>
                </div>
              </>
            )}
          </div>
        ))}
    </div>
  );
};

export default Objectives;
