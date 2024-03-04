import { SortOrder } from "../../util/SortOrder";

export type PropertyOrderByInput = {
  address?: SortOrder;
  companyID?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  lockerCount?: SortOrder;
  name?: SortOrder;
  parkingCount?: SortOrder;
  unitCount?: SortOrder;
  updatedAt?: SortOrder;
};
