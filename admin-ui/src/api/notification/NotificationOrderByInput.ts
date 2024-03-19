import { SortOrder } from "../../util/SortOrder";

export type NotificationOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  message?: SortOrder;
  requestID?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
  userID?: SortOrder;
};
