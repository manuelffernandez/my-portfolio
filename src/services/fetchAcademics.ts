import { firebaseCollections } from '@/lib/constants/firebase-collections';
import { type Job } from '@/types';
import { collection, getDocs, query } from 'firebase/firestore';
import { db } from './firebaseConfig';

export const fetchAcademics = async (): Promise<Job[]> => {
  const q = query(collection(db, firebaseCollections.academics));
  const querySnapshot = await getDocs(q);

  const jobs = querySnapshot.docs.map(job => ({
    id: job.id,
    ...job.data(),
  })) as Job[];

  return jobs;
};
