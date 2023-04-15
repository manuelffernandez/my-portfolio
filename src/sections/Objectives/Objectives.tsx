import styles from './Objectives.module.scss';
import { objectives } from '../../data/objectives';

const Objectives = (): JSX.Element => {
  const { objCont, iconCont, iconContTitle, iconContImg, iconContImgDisabled } =
    styles;

  return (
    <div className={objCont}>
      {objectives.map((objective, index) => (
        <div key={index} className={iconCont}>
          {objective.studying ? (
            <>
              <img
                className={iconContImg}
                src={objective.icon}
                alt={objective.title}
              />
              <div>
                <h5 className={iconContTitle}>{objective.title}</h5>
                <p className='color-cyan'>Currently studying</p>
              </div>
            </>
          ) : (
            <>
              <img
                className={iconContImgDisabled}
                src={objective.icon}
                alt={objective.title}
              />
              <div>
                <h5 className={iconContTitle}>{objective.title}</h5>
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
