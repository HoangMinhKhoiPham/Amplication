import { Company } from "../company/Company";
import { CondoUnit } from "../condoUnit/CondoUnit";
import { File } from "../file/File";
import { Locker } from "../locker/Locker";
import { ParkingSpot } from "../parkingSpot/ParkingSpot";
import { Request } from "../request/Request";

export type Property = {
  address: string;
  company?: Company | null;
  condoUnits?: Array<CondoUnit>;
  createdAt: Date;
  files?: Array<File>;
  id: number;
  lockerCount: number | null;
  Lockers?: Array<Locker>;
  name: string;
  parkingCount: number;
  ParkingSpots?: Array<ParkingSpot>;
  requests?: Array<Request>;
  unitCount: number;
  updatedAt: Date;
};
