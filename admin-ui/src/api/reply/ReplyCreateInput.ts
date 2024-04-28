import { PostWhereUniqueInput } from "../post/PostWhereUniqueInput";

export type ReplyCreateInput = {
  content?: string | null;
  post: PostWhereUniqueInput;
};
