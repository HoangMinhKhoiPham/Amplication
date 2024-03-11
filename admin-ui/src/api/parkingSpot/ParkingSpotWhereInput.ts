import { CondoUnitWhereUniqueInput } from "../condoUnit/CondoUnitWhereUniqueInput";
import { IntFilter } from "../../util/IntFilter";
import { PropertyWhereUniqueInput } from "../property/PropertyWhereUniqueInput";

export type ParkingSpotWhereInput = {
  condoUnit?: CondoUnitWhereUniqueInput;
  id?: IntFilter;
  property?: PropertyWhereUniqueInput;
};
