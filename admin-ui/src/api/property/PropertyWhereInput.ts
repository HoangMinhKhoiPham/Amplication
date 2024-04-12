import { StringFilter } from "../../util/StringFilter";
import { CommonFacilityListRelationFilter } from "../commonFacility/CommonFacilityListRelationFilter";
import { CompanyWhereUniqueInput } from "../company/CompanyWhereUniqueInput";
import { CondoUnitListRelationFilter } from "../condoUnit/CondoUnitListRelationFilter";
import { FileListRelationFilter } from "../file/FileListRelationFilter";
import { IntFilter } from "../../util/IntFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { LockerListRelationFilter } from "../locker/LockerListRelationFilter";
import { ParkingSpotListRelationFilter } from "../parkingSpot/ParkingSpotListRelationFilter";
import { RequestListRelationFilter } from "../request/RequestListRelationFilter";

export type PropertyWhereInput = {
  address?: StringFilter;
  commonFacilities?: CommonFacilityListRelationFilter;
  company?: CompanyWhereUniqueInput;
  condoUnits?: CondoUnitListRelationFilter;
  files?: FileListRelationFilter;
  id?: IntFilter;
  lockerCount?: IntNullableFilter;
  Lockers?: LockerListRelationFilter;
  name?: StringFilter;
  parkingCount?: IntFilter;
  ParkingSpots?: ParkingSpotListRelationFilter;
  requests?: RequestListRelationFilter;
  unitCount?: IntFilter;
};
