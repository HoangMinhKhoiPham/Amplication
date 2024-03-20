import { SortOrder } from "../../util/SortOrder";

export type PostOrderByInput = {
  content?: SortOrder;
  createdAt?: SortOrder;
  forumID?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
  userID?: SortOrder;
};
