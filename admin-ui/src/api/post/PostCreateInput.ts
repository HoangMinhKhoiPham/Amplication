import { ForumWhereUniqueInput } from "../forum/ForumWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PostCreateInput = {
  forum?: ForumWhereUniqueInput | null;
  user?: UserWhereUniqueInput | null;
};
