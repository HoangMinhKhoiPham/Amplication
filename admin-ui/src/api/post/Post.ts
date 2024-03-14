import { Forum } from "../forum/Forum";
import { User } from "../user/User";

export type Post = {
  createdAt: Date;
  forumId?: Forum | null;
  id: string;
  updatedAt: Date;
  userID?: User | null;
};
