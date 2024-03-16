import { ForumWhereUniqueInput } from "../forum/ForumWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PostUpdateInput = {
  forum?: ForumWhereUniqueInput | null;
  user?: UserWhereUniqueInput | null;
};
