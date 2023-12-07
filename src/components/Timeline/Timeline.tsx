import { TimelineEvent } from '../';
import { type TimelineEventType } from '../../interfaces/timelineEvent';
import styles from './Timeline.module.scss';

interface Props {
  events: TimelineEventType[];
}

const Timeline = (props: Props): JSX.Element => {
  const { events } = props;
  const { timelineCont } = styles;

  return (
    <div className={timelineCont}>
      {events.length !== 0 ? (
        events
          .sort((a, b) => b.initDate.seconds - a.initDate.seconds)
          .map((event, index) => <TimelineEvent key={index} event={event} />)
      ) : (
        <p>No content to show</p>
      )}
    </div>
  );
};

export default Timeline;
