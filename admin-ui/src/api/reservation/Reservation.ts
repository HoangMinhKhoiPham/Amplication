import { CommonFacility } from "../commonFacility/CommonFacility";
import { User } from "../user/User";

export type Reservation = {
  availablity: string | null;
  commonFacilityID?: CommonFacility | null;
  createdAt: Date;
  id: string;
  notes: string | null;
  updatedAt: Date;
  userID?: User | null;
};
