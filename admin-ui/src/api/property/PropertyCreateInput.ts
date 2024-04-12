import { CommonFacilityCreateNestedManyWithoutPropertiesInput } from "./CommonFacilityCreateNestedManyWithoutPropertiesInput";
import { CompanyWhereUniqueInput } from "../company/CompanyWhereUniqueInput";
import { CondoUnitCreateNestedManyWithoutPropertiesInput } from "./CondoUnitCreateNestedManyWithoutPropertiesInput";
import { FileCreateNestedManyWithoutPropertiesInput } from "./FileCreateNestedManyWithoutPropertiesInput";
import { LockerCreateNestedManyWithoutPropertiesInput } from "./LockerCreateNestedManyWithoutPropertiesInput";
import { ParkingSpotCreateNestedManyWithoutPropertiesInput } from "./ParkingSpotCreateNestedManyWithoutPropertiesInput";
import { RequestCreateNestedManyWithoutPropertiesInput } from "./RequestCreateNestedManyWithoutPropertiesInput";

export type PropertyCreateInput = {
  address: string;
  commonFacilities?: CommonFacilityCreateNestedManyWithoutPropertiesInput;
  company?: CompanyWhereUniqueInput | null;
  condoUnits?: CondoUnitCreateNestedManyWithoutPropertiesInput;
  files?: FileCreateNestedManyWithoutPropertiesInput;
  lockerCount?: number | null;
  Lockers?: LockerCreateNestedManyWithoutPropertiesInput;
  name: string;
  parkingCount: number;
  ParkingSpots?: ParkingSpotCreateNestedManyWithoutPropertiesInput;
  requests?: RequestCreateNestedManyWithoutPropertiesInput;
  unitCount: number;
};
