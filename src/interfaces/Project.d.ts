export interface Project {
  id: string;
  title: string;
  description: string;
  imgUrl: string;
  repoLink: string;
  deployLink?: string;
  show: boolean;
}
