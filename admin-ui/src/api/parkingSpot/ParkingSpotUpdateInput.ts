import { CondoUnitWhereUniqueInput } from "../condoUnit/CondoUnitWhereUniqueInput";
import { PropertyWhereUniqueInput } from "../property/PropertyWhereUniqueInput";

export type ParkingSpotUpdateInput = {
  condoUnit?: CondoUnitWhereUniqueInput | null;
  property?: PropertyWhereUniqueInput | null;
};
