import { ReservationUpdateManyWithoutCommonFacilitiesInput } from "./ReservationUpdateManyWithoutCommonFacilitiesInput";

export type CommonFacilityUpdateInput = {
  availabilities?: ReservationUpdateManyWithoutCommonFacilitiesInput;
  facilityType?: "SkyLounge" | "SpaFitness" | null;
};
