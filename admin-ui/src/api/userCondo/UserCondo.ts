import { CondoUnit } from "../condoUnit/CondoUnit";
import { User } from "../user/User";

export type UserCondo = {
  condo?: CondoUnit | null;
  createdAt: Date;
  id: number;
  updatedAt: Date;
  user?: User | null;
};
