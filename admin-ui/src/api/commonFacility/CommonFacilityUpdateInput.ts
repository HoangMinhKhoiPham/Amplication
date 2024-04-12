import { ReservationUpdateManyWithoutCommonFacilitiesInput } from "./ReservationUpdateManyWithoutCommonFacilitiesInput";
import { PropertyWhereUniqueInput } from "../property/PropertyWhereUniqueInput";

export type CommonFacilityUpdateInput = {
  availabilities?: ReservationUpdateManyWithoutCommonFacilitiesInput;
  facilityType?: "sky_lounge" | "spa_fitness" | "sauna" | null;
  property?: PropertyWhereUniqueInput | null;
  status?: string | null;
};
