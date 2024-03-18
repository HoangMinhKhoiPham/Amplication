import { SortOrder } from "../../util/SortOrder";

export type RequestOrderByInput = {
  companyID?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  requestType?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
  userID?: SortOrder;
};
