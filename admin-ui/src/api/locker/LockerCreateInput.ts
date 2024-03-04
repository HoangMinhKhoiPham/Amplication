import { CondoUnitWhereUniqueInput } from "../condoUnit/CondoUnitWhereUniqueInput";
import { PropertyWhereUniqueInput } from "../property/PropertyWhereUniqueInput";

export type LockerCreateInput = {
  condoUnits?: CondoUnitWhereUniqueInput | null;
  property?: PropertyWhereUniqueInput | null;
};
