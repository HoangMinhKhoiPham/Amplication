import { ForumWhereUniqueInput } from "../forum/ForumWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PostUpdateInput = {
  forumId?: ForumWhereUniqueInput | null;
  userID?: UserWhereUniqueInput | null;
};
