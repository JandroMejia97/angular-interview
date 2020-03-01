import { Resource } from './resource.model';

export interface Post extends Resource {
  userId: number;
  title: string;
  body: string;
  comments: Comment[];
}
