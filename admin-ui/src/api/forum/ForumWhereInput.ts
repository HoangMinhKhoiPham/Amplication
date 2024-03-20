import { CompanyListRelationFilter } from "../company/CompanyListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { PostListRelationFilter } from "../post/PostListRelationFilter";

export type ForumWhereInput = {
  companies?: CompanyListRelationFilter;
  id?: StringFilter;
  posts?: PostListRelationFilter;
};
