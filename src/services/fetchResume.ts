import { type ResumeReferences } from '@/types';
import { collection, getDocs, query } from 'firebase/firestore';
import { db } from './firebaseConfig';

export const fetchResume = async (): Promise<ResumeReferences> => {
  const q = query(collection(db, 'resumes'));
  const querySnapshot = await getDocs(q)
    .then(docs => docs)
    .catch(err => {
      throw new Error(err);
    });

  const resumes: ResumeReferences = {
    en: '',
    es: '',
  };

  querySnapshot.forEach(resume => {
    const lang = resume.data().language as keyof typeof resumes;
    resumes[lang] = resume.data().link;
  });

  return resumes;
};
