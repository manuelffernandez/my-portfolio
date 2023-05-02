import { type Timestamp } from 'firebase/firestore';

export interface Certificate {
  id: string;
  title: string;
  institute: string;
  issueDate: Timestamp;
  link: string;
}
