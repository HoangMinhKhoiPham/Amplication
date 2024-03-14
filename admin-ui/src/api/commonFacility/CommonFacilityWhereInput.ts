import { ReservationListRelationFilter } from "../reservation/ReservationListRelationFilter";
import { StringFilter } from "../../util/StringFilter";

export type CommonFacilityWhereInput = {
  availabilities?: ReservationListRelationFilter;
  facilityType?: "SkyLounge" | "SpaFitness";
  id?: StringFilter;
};
