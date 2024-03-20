import { CompanyWhereUniqueInput } from "../company/CompanyWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { PostListRelationFilter } from "../post/PostListRelationFilter";

export type ForumWhereInput = {
  companies?: CompanyWhereUniqueInput;
  id?: StringFilter;
  posts?: PostListRelationFilter;
};
