import { StringNullableFilter } from "../../util/StringNullableFilter";
import { CommonFacilityWhereUniqueInput } from "../commonFacility/CommonFacilityWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ReservationWhereInput = {
  availablity?: StringNullableFilter;
  commonFacility?: CommonFacilityWhereUniqueInput;
  id?: StringFilter;
  notes?: StringNullableFilter;
  user?: UserWhereUniqueInput;
};
