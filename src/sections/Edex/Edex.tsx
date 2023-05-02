import { useState } from 'react';
import styles from './Edex.module.scss';
import { Timeline } from '../../components';
import { edexData } from '../../data/edexData';

const Edex = (): JSX.Element => {
  const [showEducactionSegment, setShowEducactionSegment] =
    useState<boolean>(true);

  const {
    edexCont,
    edexTab,
    edexTabButton,
    edexTabButtonActive,
    edexSegments,
  } = styles;

  return (
    <div className={edexCont}>
      <div className={edexTab}>
        <p
          className={
            showEducactionSegment ? edexTabButtonActive : edexTabButton
          }
          onClick={() => {
            setShowEducactionSegment(true);
          }}>
          Education
        </p>
        <p
          className={
            !showEducactionSegment ? edexTabButtonActive : edexTabButton
          }
          onClick={() => {
            setShowEducactionSegment(false);
          }}>
          Experience
        </p>
      </div>
      <div className={edexSegments}>
        {showEducactionSegment ? (
          <Timeline events={edexData.studies} />
        ) : (
          <Timeline events={edexData.jobs} />
        )}
      </div>
    </div>
  );
};

export default Edex;
