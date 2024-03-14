import { ForumWhereUniqueInput } from "../forum/ForumWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PostCreateInput = {
  forumId?: ForumWhereUniqueInput | null;
  userID?: UserWhereUniqueInput | null;
};
