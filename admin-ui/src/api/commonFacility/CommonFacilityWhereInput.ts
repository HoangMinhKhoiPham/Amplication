import { ReservationListRelationFilter } from "../reservation/ReservationListRelationFilter";
import { StringFilter } from "../../util/StringFilter";

export type CommonFacilityWhereInput = {
  availabilities?: ReservationListRelationFilter;
  facilityType?: "sky_lounge" | "spa_fitness" | "sauna";
  id?: StringFilter;
};
