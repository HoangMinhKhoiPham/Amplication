import { Company } from "../company/Company";
import { Post } from "../post/Post";

export type Forum = {
  company?: Company | null;
  createdAt: Date;
  id: string;
  name: string;
  posts?: Array<Post>;
  updatedAt: Date;
};
