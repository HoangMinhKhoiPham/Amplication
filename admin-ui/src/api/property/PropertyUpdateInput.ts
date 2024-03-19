import { CompanyWhereUniqueInput } from "../company/CompanyWhereUniqueInput";
import { CondoUnitUpdateManyWithoutPropertiesInput } from "./CondoUnitUpdateManyWithoutPropertiesInput";
import { FileUpdateManyWithoutPropertiesInput } from "./FileUpdateManyWithoutPropertiesInput";
import { LockerUpdateManyWithoutPropertiesInput } from "./LockerUpdateManyWithoutPropertiesInput";
import { ParkingSpotUpdateManyWithoutPropertiesInput } from "./ParkingSpotUpdateManyWithoutPropertiesInput";
import { RequestUpdateManyWithoutPropertiesInput } from "./RequestUpdateManyWithoutPropertiesInput";

export type PropertyUpdateInput = {
  address?: string;
  company?: CompanyWhereUniqueInput | null;
  condoUnits?: CondoUnitUpdateManyWithoutPropertiesInput;
  files?: FileUpdateManyWithoutPropertiesInput;
  lockerCount?: number | null;
  Lockers?: LockerUpdateManyWithoutPropertiesInput;
  name?: string;
  parkingCount?: number;
  ParkingSpots?: ParkingSpotUpdateManyWithoutPropertiesInput;
  requests?: RequestUpdateManyWithoutPropertiesInput;
  unitCount?: number;
};
