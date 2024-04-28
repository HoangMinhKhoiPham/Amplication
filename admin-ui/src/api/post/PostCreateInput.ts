import { ForumWhereUniqueInput } from "../forum/ForumWhereUniqueInput";
import { ReplyCreateNestedManyWithoutPostsInput } from "./ReplyCreateNestedManyWithoutPostsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PostCreateInput = {
  content?: string | null;
  forum?: ForumWhereUniqueInput | null;
  replies?: ReplyCreateNestedManyWithoutPostsInput;
  user?: UserWhereUniqueInput | null;
};
