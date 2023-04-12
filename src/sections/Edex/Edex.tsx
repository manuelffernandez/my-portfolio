import { useState } from 'react';
import styles from './Edex.module.scss';

const Edex = (): JSX.Element => {
  const [showEducactionSegment, setShowEducactionSegment] =
    useState<boolean>(true);

  const {
    edexCont,
    edexTab,
    edexTabButton,
    edexTabButtonActive,
    edexSegments,
    edexSegment,
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
          Experiencie
        </p>
      </div>
      <div className={edexSegments}>
        {showEducactionSegment ? (
          <div className={edexSegment}>Ed Segment</div>
        ) : (
          <div className={edexSegment}>Ed Section</div>
        )}
      </div>
    </div>
  );
};

export default Edex;
