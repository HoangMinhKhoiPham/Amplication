import { ForumWhereUniqueInput } from "../forum/ForumWhereUniqueInput";
import { ReplyUpdateManyWithoutPostsInput } from "./ReplyUpdateManyWithoutPostsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PostUpdateInput = {
  content?: string | null;
  forum?: ForumWhereUniqueInput | null;
  replies?: ReplyUpdateManyWithoutPostsInput;
  user?: UserWhereUniqueInput | null;
};
