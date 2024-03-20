import { Company } from "../company/Company";
import { Post } from "../post/Post";

export type Forum = {
  companies?: Array<Company>;
  createdAt: Date;
  id: string;
  posts?: Array<Post>;
  updatedAt: Date;
};
