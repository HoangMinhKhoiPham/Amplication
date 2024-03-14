import { StringFilter } from "../../util/StringFilter";
import { PostListRelationFilter } from "../post/PostListRelationFilter";

export type ForumWhereInput = {
  id?: StringFilter;
  posts?: PostListRelationFilter;
};
