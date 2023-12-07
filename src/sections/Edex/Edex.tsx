import { useEffect, useState } from 'react';
import { Timeline } from '../../components';
import { type TimelineEventType } from '../../interfaces/timelineEvent';
import { fetchAcademics } from '../../services/fetchAcademics';
import { fetchJobs } from '../../services/fetchJobs';
import styles from './Edex.module.scss';

const Edex = (): JSX.Element => {
  const [showEducactionSegment, setShowEducactionSegment] =
    useState<boolean>(true);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [timelineData, setTimelineData] = useState<{
    academics: TimelineEventType[];
    jobs: TimelineEventType[];
  }>({ academics: [], jobs: [] });

  useEffect(() => {
    const fetchEdex = async (): Promise<void> => {
      setIsLoading(true);
      try {
        const academics = await fetchAcademics();
        const jobs = await fetchJobs();

        setTimelineData({ academics, jobs });
      } catch (error) {
        console.log('fetch edex error', error);
      }
      setIsLoading(false);
    };

    void fetchEdex();
  }, []);

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
          isLoading ? (
            <p>Loading...</p>
          ) : (
            <Timeline events={timelineData.academics} />
          )
        ) : isLoading ? (
          <p>Loading...</p>
        ) : (
          <Timeline events={timelineData.jobs} />
        )}
      </div>
    </div>
  );
};

export default Edex;
