import { SortOrder } from "../../util/SortOrder";

export type ReservationOrderByInput = {
  availablity?: SortOrder;
  commonFacilityID?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  notes?: SortOrder;
  updatedAt?: SortOrder;
  userID?: SortOrder;
};
