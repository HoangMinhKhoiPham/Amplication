import { CondoUnit } from "../condoUnit/CondoUnit";
import { Property } from "../property/Property";

export type ParkingSpot = {
  condoUnit?: CondoUnit | null;
  createdAt: Date;
  id: number;
  property?: Property | null;
  updatedAt: Date;
};
