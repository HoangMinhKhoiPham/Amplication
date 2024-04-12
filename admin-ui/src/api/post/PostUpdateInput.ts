import { ForumWhereUniqueInput } from "../forum/ForumWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PostUpdateInput = {
  content?: string | null;
  forum?: ForumWhereUniqueInput | null;
  user?: UserWhereUniqueInput | null;
};
