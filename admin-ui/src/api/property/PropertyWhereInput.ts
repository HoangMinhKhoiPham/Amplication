import { StringFilter } from "../../util/StringFilter";
import { CompanyWhereUniqueInput } from "../company/CompanyWhereUniqueInput";
import { CondoUnitListRelationFilter } from "../condoUnit/CondoUnitListRelationFilter";
import { FileListRelationFilter } from "../file/FileListRelationFilter";
import { IntFilter } from "../../util/IntFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { LockerListRelationFilter } from "../locker/LockerListRelationFilter";
import { ParkingSpotListRelationFilter } from "../parkingSpot/ParkingSpotListRelationFilter";

export type PropertyWhereInput = {
  address?: StringFilter;
  company?: CompanyWhereUniqueInput;
  condoUnits?: CondoUnitListRelationFilter;
  files?: FileListRelationFilter;
  id?: IntFilter;
  lockerCount?: IntNullableFilter;
  Lockers?: LockerListRelationFilter;
  name?: StringFilter;
  parkingCount?: IntFilter;
  ParkingSpots?: ParkingSpotListRelationFilter;
  unitCount?: IntFilter;
};
