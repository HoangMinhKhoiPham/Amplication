import { Post } from "../post/Post";

export type Forum = {
  createdAt: Date;
  id: string;
  posts?: Array<Post>;
  updatedAt: Date;
};
