import { SortOrder } from "../../util/SortOrder";

export type PostOrderByInput = {
  createdAt?: SortOrder;
  forum?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
  user?: SortOrder;
};
