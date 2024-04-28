import { Forum } from "../forum/Forum";
import { Reply } from "../reply/Reply";
import { User } from "../user/User";

export type Post = {
  content: string | null;
  createdAt: Date;
  forum?: Forum | null;
  id: string;
  replies?: Array<Reply>;
  updatedAt: Date;
  user?: User | null;
};
