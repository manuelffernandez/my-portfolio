import { type Timestamp } from 'firebase/firestore';

export interface Job {
  id: string;
  title: string;
  place: string;
  initDate: Timestamp;
  endDate?: Timestamp;
  description?: string;
}

export interface Academic {
  id: string;
  title: string;
  place: string;
  initDate: Timestamp;
  endDate?: Timestamp;
  description?: string;
}
