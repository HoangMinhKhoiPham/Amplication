import { Forum } from "../forum/Forum";
import { User } from "../user/User";

export type Post = {
  createdAt: Date;
  forum?: Forum | null;
  id: string;
  updatedAt: Date;
  user?: User | null;
};
