import { CondoUnit } from "../condoUnit/CondoUnit";
import { Property } from "../property/Property";

export type Locker = {
  condoUnits?: CondoUnit | null;
  createdAt: Date;
  id: number;
  property?: Property | null;
  updatedAt: Date;
};
