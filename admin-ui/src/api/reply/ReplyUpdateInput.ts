import { PostWhereUniqueInput } from "../post/PostWhereUniqueInput";

export type ReplyUpdateInput = {
  content?: string | null;
  post?: PostWhereUniqueInput;
};
