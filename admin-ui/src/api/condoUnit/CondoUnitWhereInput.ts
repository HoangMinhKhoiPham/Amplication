import { DecimalNullableFilter } from "../../util/DecimalNullableFilter";
import { FileListRelationFilter } from "../file/FileListRelationFilter";
import { IntFilter } from "../../util/IntFilter";
import { LockerWhereUniqueInput } from "../locker/LockerWhereUniqueInput";
import { ParkingSpotListRelationFilter } from "../parkingSpot/ParkingSpotListRelationFilter";
import { PropertyWhereUniqueInput } from "../property/PropertyWhereUniqueInput";
import { RegistrationKeyWhereUniqueInput } from "../registrationKey/RegistrationKeyWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserCondoListRelationFilter } from "../userCondo/UserCondoListRelationFilter";

export type CondoUnitWhereInput = {
  condoFee?: DecimalNullableFilter;
  file?: FileListRelationFilter;
  id?: IntFilter;
  locker?: LockerWhereUniqueInput;
  parkingSpot?: ParkingSpotListRelationFilter;
  propertyID?: PropertyWhereUniqueInput;
  registrationKeys?: RegistrationKeyWhereUniqueInput;
  size?: StringFilter;
  test?: StringNullableFilter;
  unitNumber?: StringNullableFilter;
  userCondos?: UserCondoListRelationFilter;
};
