import { CommonFacilityWhereUniqueInput } from "../commonFacility/CommonFacilityWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ReservationCreateInput = {
  availablity?: string | null;
  commonFacility?: CommonFacilityWhereUniqueInput | null;
  notes?: string | null;
  user?: UserWhereUniqueInput | null;
};
