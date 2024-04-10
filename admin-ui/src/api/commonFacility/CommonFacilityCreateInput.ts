import { ReservationCreateNestedManyWithoutCommonFacilitiesInput } from "./ReservationCreateNestedManyWithoutCommonFacilitiesInput";
import { PropertyWhereUniqueInput } from "../property/PropertyWhereUniqueInput";

export type CommonFacilityCreateInput = {
  availabilities?: ReservationCreateNestedManyWithoutCommonFacilitiesInput;
  facilityType?: "sky_lounge" | "spa_fitness" | "sauna" | null;
  property?: PropertyWhereUniqueInput | null;
  status?: string | null;
};
