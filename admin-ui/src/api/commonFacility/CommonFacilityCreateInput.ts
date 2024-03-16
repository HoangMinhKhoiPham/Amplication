import { ReservationCreateNestedManyWithoutCommonFacilitiesInput } from "./ReservationCreateNestedManyWithoutCommonFacilitiesInput";

export type CommonFacilityCreateInput = {
  availabilities?: ReservationCreateNestedManyWithoutCommonFacilitiesInput;
  facilityType?: "sky_lounge" | "spa_fitness" | "sauna" | null;
};
