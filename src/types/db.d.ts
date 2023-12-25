import { type Timestamp } from 'firebase/firestore';

export interface Certificate {
  id: string;
  title: string;
  institute: string;
  issueDate: Timestamp;
  link: string;
  image: string;
  instituteLink: stirng;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  imgUrl: string;
  repoLink: string;
  deployLink?: string;
  show: boolean;
}

export interface Skill {
  id: string;
  title: string;
  link: string;
  icon: string;
  learned: boolean;
  studying: boolean;
  order: number;
}

export interface ResumeReferences {
  en: string;
  es: string;
}

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

export interface Info {
  subtitle: string;
  description: string;
}
