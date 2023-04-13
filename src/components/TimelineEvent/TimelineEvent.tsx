import { type TimelineEventType } from '../../interfaces/timelineEvent';
import styles from './TimelineEvent.module.scss';

interface Props {
  event: TimelineEventType;
}

const Event = (props: Props): JSX.Element => {
  const { event } = props;
  const {
    item,
    content,
    contentTitle,
    contentPlace,
    contentDesc,
    contentDate,
    circle,
  } = styles;

  return (
    <div className={item}>
      <div className={content}>
        <span className={contentTitle}>{event.title}</span>
        <time className={contentDate}>{event.date}</time>
        <span className={contentPlace}>{event.place}</span>
        {event.description !== undefined ? (
          <p className={contentDesc}>{event.description}</p>
        ) : null}
      </div>
      <span className={circle}></span>
    </div>
  );
};

export default Event;
