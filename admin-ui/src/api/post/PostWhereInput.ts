import { ForumWhereUniqueInput } from "../forum/ForumWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PostWhereInput = {
  forumId?: ForumWhereUniqueInput;
  id?: StringFilter;
  userID?: UserWhereUniqueInput;
};
