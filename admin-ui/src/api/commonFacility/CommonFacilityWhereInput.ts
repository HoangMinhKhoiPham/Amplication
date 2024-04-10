import { ReservationListRelationFilter } from "../reservation/ReservationListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { PropertyWhereUniqueInput } from "../property/PropertyWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type CommonFacilityWhereInput = {
  availabilities?: ReservationListRelationFilter;
  facilityType?: "sky_lounge" | "spa_fitness" | "sauna";
  id?: StringFilter;
  property?: PropertyWhereUniqueInput;
  status?: StringNullableFilter;
};
