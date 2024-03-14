import { ReservationUpdateManyWithoutCommonFacilitiesInput } from "./ReservationUpdateManyWithoutCommonFacilitiesInput";

export type CommonFacilityUpdateInput = {
  availabilities?: ReservationUpdateManyWithoutCommonFacilitiesInput;
  facilityType?: "sky_lounge" | "spa_fitness" | "sauna" | null;
};
