import { Decimal } from "decimal.js";
import { FileUpdateManyWithoutCondoUnitsInput } from "./FileUpdateManyWithoutCondoUnitsInput";
import { LockerWhereUniqueInput } from "../locker/LockerWhereUniqueInput";
import { ParkingSpotUpdateManyWithoutCondoUnitsInput } from "./ParkingSpotUpdateManyWithoutCondoUnitsInput";
import { PropertyWhereUniqueInput } from "../property/PropertyWhereUniqueInput";
import { RegistrationKeyWhereUniqueInput } from "../registrationKey/RegistrationKeyWhereUniqueInput";
import { UserCondoUpdateManyWithoutCondoUnitsInput } from "./UserCondoUpdateManyWithoutCondoUnitsInput";

export type CondoUnitUpdateInput = {
  condoFee?: Decimal | null;
  file?: FileUpdateManyWithoutCondoUnitsInput;
  locker?: LockerWhereUniqueInput | null;
  parkingSpot?: ParkingSpotUpdateManyWithoutCondoUnitsInput;
  propertyID?: PropertyWhereUniqueInput | null;
  registrationKeys?: RegistrationKeyWhereUniqueInput | null;
  size?: string;
  test?: string | null;
  unitNumber?: string | null;
  userCondos?: UserCondoUpdateManyWithoutCondoUnitsInput;
};
