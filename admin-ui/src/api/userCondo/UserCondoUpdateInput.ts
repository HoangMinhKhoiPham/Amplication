import { CondoUnitWhereUniqueInput } from "../condoUnit/CondoUnitWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type UserCondoUpdateInput = {
  condo?: CondoUnitWhereUniqueInput | null;
  user?: UserWhereUniqueInput | null;
};
