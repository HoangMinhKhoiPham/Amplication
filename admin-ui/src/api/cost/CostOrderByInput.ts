import { SortOrder } from "../../util/SortOrder";

export type CostOrderByInput = {
  amount?: SortOrder;
  companyID?: SortOrder;
  costName?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
