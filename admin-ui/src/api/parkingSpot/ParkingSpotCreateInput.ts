import { CondoUnitWhereUniqueInput } from "../condoUnit/CondoUnitWhereUniqueInput";
import { PropertyWhereUniqueInput } from "../property/PropertyWhereUniqueInput";

export type ParkingSpotCreateInput = {
  condoUnit?: CondoUnitWhereUniqueInput | null;
  property?: PropertyWhereUniqueInput | null;
};
