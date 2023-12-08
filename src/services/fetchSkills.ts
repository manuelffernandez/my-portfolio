import { type Skill } from '@/types';
import { collection, getDocs, query } from 'firebase/firestore';
import { db } from './firebaseConfig';

export const fetchSkills = async (): Promise<Skill[]> => {
  const q = query(collection(db, 'skills'));
  const querySnapshot = await getDocs(q)
    .then(docs => docs)
    .catch(err => {
      throw new Error(err);
    });

  const skills = querySnapshot.docs.map(skill => ({
    id: skill.id,
    ...skill.data(),
  })) as Skill[];

  return skills;
};
