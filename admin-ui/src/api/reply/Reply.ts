import { Post } from "../post/Post";

export type Reply = {
  content: string | null;
  createdAt: Date;
  id: string;
  posts?: Post | null;
  updatedAt: Date;
};
