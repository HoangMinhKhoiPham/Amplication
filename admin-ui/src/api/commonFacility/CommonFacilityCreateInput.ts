import { ReservationCreateNestedManyWithoutCommonFacilitiesInput } from "./ReservationCreateNestedManyWithoutCommonFacilitiesInput";

export type CommonFacilityCreateInput = {
  availabilities?: ReservationCreateNestedManyWithoutCommonFacilitiesInput;
  facilityType?: "SkyLounge" | "SpaFitness" | null;
};
