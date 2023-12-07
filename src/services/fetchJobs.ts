import { collection, getDocs, query } from 'firebase/firestore';
import { type Job } from '../interfaces/db';
import { firebaseCollections } from '../lib/constants/firebase-collections';
import { db } from './firebaseConfig';

export const fetchJobs = async (): Promise<Job[]> => {
  const q = query(collection(db, firebaseCollections.jobs));
  const querySnapshot = await getDocs(q);

  const jobs = querySnapshot.docs.map(job => ({
    id: job.id,
    ...job.data(),
  })) as Job[];

  return jobs;
};
