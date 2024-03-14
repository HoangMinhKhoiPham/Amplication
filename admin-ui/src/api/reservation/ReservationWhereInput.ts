import { StringNullableFilter } from "../../util/StringNullableFilter";
import { CommonFacilityWhereUniqueInput } from "../commonFacility/CommonFacilityWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ReservationWhereInput = {
  availablity?: StringNullableFilter;
  commonFacilityID?: CommonFacilityWhereUniqueInput;
  id?: StringFilter;
  notes?: StringNullableFilter;
  userID?: UserWhereUniqueInput;
};
