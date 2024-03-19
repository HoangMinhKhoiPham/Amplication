import { Decimal } from "decimal.js";
import { FileCreateNestedManyWithoutCondoUnitsInput } from "./FileCreateNestedManyWithoutCondoUnitsInput";
import { LockerWhereUniqueInput } from "../locker/LockerWhereUniqueInput";
import { ParkingSpotCreateNestedManyWithoutCondoUnitsInput } from "./ParkingSpotCreateNestedManyWithoutCondoUnitsInput";
import { PropertyWhereUniqueInput } from "../property/PropertyWhereUniqueInput";
import { RegistrationKeyWhereUniqueInput } from "../registrationKey/RegistrationKeyWhereUniqueInput";
import { RequestCreateNestedManyWithoutCondoUnitsInput } from "./RequestCreateNestedManyWithoutCondoUnitsInput";
import { UserCondoCreateNestedManyWithoutCondoUnitsInput } from "./UserCondoCreateNestedManyWithoutCondoUnitsInput";

export type CondoUnitCreateInput = {
  condoFee?: Decimal | null;
  file?: FileCreateNestedManyWithoutCondoUnitsInput;
  locker?: LockerWhereUniqueInput | null;
  parkingSpot?: ParkingSpotCreateNestedManyWithoutCondoUnitsInput;
  propertyID?: PropertyWhereUniqueInput | null;
  registrationKeys?: RegistrationKeyWhereUniqueInput | null;
  requests?: RequestCreateNestedManyWithoutCondoUnitsInput;
  size: string;
  test?: string | null;
  unitNumber?: string | null;
  userCondos?: UserCondoCreateNestedManyWithoutCondoUnitsInput;
};
