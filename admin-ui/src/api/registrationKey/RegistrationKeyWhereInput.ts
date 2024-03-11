import { CondoUnitWhereUniqueInput } from "../condoUnit/CondoUnitWhereUniqueInput";
import { IntFilter } from "../../util/IntFilter";
import { StringFilter } from "../../util/StringFilter";

export type RegistrationKeyWhereInput = {
  condoUnit?: CondoUnitWhereUniqueInput;
  id?: IntFilter;
  value?: StringFilter;
};
