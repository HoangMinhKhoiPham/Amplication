import { SortOrder } from "../../util/SortOrder";

export type FileOrderByInput = {
  bucket?: SortOrder;
  companyID?: SortOrder;
  condoUnitID?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  propertyID?: SortOrder;
  updatedAt?: SortOrder;
  userID?: SortOrder;
};
