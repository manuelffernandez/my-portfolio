import { firebaseCollections } from '@/lib/constants/firebase-collections';
import { type Info } from '@/types';
import { collection, getDocs, query } from 'firebase/firestore';
import { db } from './firebaseConfig';

export const fetchInfo = async (): Promise<Info> => {
  const q = query(collection(db, firebaseCollections.info));
  const querySnapshot = await getDocs(q);

  const descriptions = querySnapshot.docs.map(job => ({
    ...job.data(),
  })) as Info[];

  const description = descriptions[0];
  return description;
};
