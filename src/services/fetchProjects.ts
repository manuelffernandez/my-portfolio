import { type Project } from '@/types';
import { collection, getDocs, query } from 'firebase/firestore';
import { db } from './firebaseConfig';

export const fetchProjects = async (): Promise<Project[]> => {
  const q = query(collection(db, 'projects'));
  const querySnapshot = await getDocs(q)
    .then(docs => docs)
    .catch(err => {
      throw new Error(err);
    });

  const projects = querySnapshot.docs.map(project => ({
    id: project.id,
    ...project.data(),
  })) as Project[];

  return projects;
};
