import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { PostWhereUniqueInput } from "../post/PostWhereUniqueInput";

export type ReplyWhereInput = {
  content?: StringNullableFilter;
  id?: StringFilter;
  posts?: PostWhereUniqueInput;
};
