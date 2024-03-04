import { CompanyWhereUniqueInput } from "../company/CompanyWhereUniqueInput";
import { CondoUnitCreateNestedManyWithoutPropertiesInput } from "./CondoUnitCreateNestedManyWithoutPropertiesInput";
import { FileCreateNestedManyWithoutPropertiesInput } from "./FileCreateNestedManyWithoutPropertiesInput";
import { LockerCreateNestedManyWithoutPropertiesInput } from "./LockerCreateNestedManyWithoutPropertiesInput";
import { ParkingSpotCreateNestedManyWithoutPropertiesInput } from "./ParkingSpotCreateNestedManyWithoutPropertiesInput";

export type PropertyCreateInput = {
  address: string;
  company?: CompanyWhereUniqueInput | null;
  condoUnits?: CondoUnitCreateNestedManyWithoutPropertiesInput;
  files?: FileCreateNestedManyWithoutPropertiesInput;
  lockerCount?: number | null;
  Lockers?: LockerCreateNestedManyWithoutPropertiesInput;
  name: string;
  parkingCount: number;
  ParkingSpots?: ParkingSpotCreateNestedManyWithoutPropertiesInput;
  unitCount: number;
};
