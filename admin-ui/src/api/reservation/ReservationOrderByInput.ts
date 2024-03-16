import { SortOrder } from "../../util/SortOrder";

export type ReservationOrderByInput = {
  availablity?: SortOrder;
  commonFacilityIDId?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  notes?: SortOrder;
  updatedAt?: SortOrder;
  userIDId?: SortOrder;
};
