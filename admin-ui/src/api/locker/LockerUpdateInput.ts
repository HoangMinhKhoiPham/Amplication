import { CondoUnitWhereUniqueInput } from "../condoUnit/CondoUnitWhereUniqueInput";
import { PropertyWhereUniqueInput } from "../property/PropertyWhereUniqueInput";

export type LockerUpdateInput = {
  condoUnits?: CondoUnitWhereUniqueInput | null;
  property?: PropertyWhereUniqueInput | null;
};
