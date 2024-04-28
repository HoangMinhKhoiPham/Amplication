import { PostWhereUniqueInput } from "../post/PostWhereUniqueInput";

export type ReplyUpdateInput = {
  content?: string | null;
  posts?: PostWhereUniqueInput | null;
};
