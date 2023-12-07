import format from 'date-fns/format';
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

  const initDate = format(new Date(event.initDate.seconds * 1000), 'MMM yyyy');
  const endDate =
    event.endDate !== undefined
      ? format(new Date(event.endDate.seconds * 1000), 'MMM yyyy')
      : undefined;

  return (
    <div className={item}>
      <div className={content}>
        <span className={contentTitle}>{event.title}</span>
        <time className={contentDate}>
          <span>{initDate}</span>
          <span>{' - '}</span>
          <span>{endDate ?? 'Present'}</span>
        </time>
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
