import { Resource } from './resource.model';

export interface Comment extends Resource {
  name: string;
  body: string;
  email: string;
  postId: number;
}
