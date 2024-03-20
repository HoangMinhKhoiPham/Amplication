import { CompanyWhereUniqueInput } from "../company/CompanyWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { PostListRelationFilter } from "../post/PostListRelationFilter";

export type ForumWhereInput = {
  company?: CompanyWhereUniqueInput;
  id?: StringFilter;
  name?: StringFilter;
  posts?: PostListRelationFilter;
};
