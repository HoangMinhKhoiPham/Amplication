import { CondoUnitWhereUniqueInput } from "../condoUnit/CondoUnitWhereUniqueInput";
import { IntFilter } from "../../util/IntFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type UserCondoWhereInput = {
  condo?: CondoUnitWhereUniqueInput;
  id?: IntFilter;
  user?: UserWhereUniqueInput;
};
