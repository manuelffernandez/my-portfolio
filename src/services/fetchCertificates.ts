import { type Certificate } from '@/types';
import { collection, getDocs, query } from 'firebase/firestore';
import { db } from './firebaseConfig';

export const fetchCertificates = async (): Promise<Certificate[]> => {
  const q = query(collection(db, 'certificates'));
  const querySnapshot = await getDocs(q)
    .then(docs => docs)
    .catch(err => {
      throw new Error(err);
    });

  const certificates = querySnapshot.docs.map(project => ({
    id: project.id,
    ...project.data(),
  })) as Certificate[];

  return certificates;
};
