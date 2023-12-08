import { type Timestamp } from 'firebase/firestore';

export interface TimelineEventType {
  title: string;
  place: string;
  description?: string;
  initDate: Timestamp;
  endDate?: Timestamp;
}
