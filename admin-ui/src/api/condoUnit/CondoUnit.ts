import { Decimal } from "decimal.js";
import { File } from "../file/File";
import { Locker } from "../locker/Locker";
import { ParkingSpot } from "../parkingSpot/ParkingSpot";
import { Property } from "../property/Property";
import { RegistrationKey } from "../registrationKey/RegistrationKey";
import { UserCondo } from "../userCondo/UserCondo";

export type CondoUnit = {
  condoFee: Decimal | null;
  createdAt: Date;
  file?: Array<File>;
  id: number;
  locker?: Locker | null;
  parkingSpot?: Array<ParkingSpot>;
  propertyID?: Property | null;
  registrationKeys?: RegistrationKey | null;
  size: string;
  test: string | null;
  unitNumber: string | null;
  updatedAt: Date;
  userCondos?: Array<UserCondo>;
};
