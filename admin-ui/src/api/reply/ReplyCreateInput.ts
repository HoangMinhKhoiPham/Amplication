import { PostWhereUniqueInput } from "../post/PostWhereUniqueInput";

export type ReplyCreateInput = {
  content?: string | null;
  posts?: PostWhereUniqueInput | null;
};
