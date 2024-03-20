import { Company } from "../company/Company";
import { Post } from "../post/Post";

export type Forum = {
  companies?: Company | null;
  createdAt: Date;
  id: string;
  posts?: Array<Post>;
  updatedAt: Date;
};
