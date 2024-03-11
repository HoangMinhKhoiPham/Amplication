import { CondoUnitWhereUniqueInput } from "../condoUnit/CondoUnitWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type UserCondoCreateInput = {
  condo?: CondoUnitWhereUniqueInput | null;
  user?: UserWhereUniqueInput | null;
};
