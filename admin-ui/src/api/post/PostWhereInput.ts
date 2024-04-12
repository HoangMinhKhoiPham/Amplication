import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ForumWhereUniqueInput } from "../forum/ForumWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PostWhereInput = {
  content?: StringNullableFilter;
  forum?: ForumWhereUniqueInput;
  id?: StringFilter;
  user?: UserWhereUniqueInput;
};
