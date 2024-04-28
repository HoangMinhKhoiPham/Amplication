import { SortOrder } from "../../util/SortOrder";

export type ReplyOrderByInput = {
  content?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  postID?: SortOrder;
  updatedAt?: SortOrder;
};
