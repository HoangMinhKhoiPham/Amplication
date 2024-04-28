import { SortOrder } from "../../util/SortOrder";

export type CondoUnitOrderByInput = {
  condoFee?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  isPaid?: SortOrder;
  lockerID?: SortOrder;
  propertyIDId?: SortOrder;
  registrationKeysId?: SortOrder;
  size?: SortOrder;
  test?: SortOrder;
  unitNumber?: SortOrder;
  updatedAt?: SortOrder;
};
