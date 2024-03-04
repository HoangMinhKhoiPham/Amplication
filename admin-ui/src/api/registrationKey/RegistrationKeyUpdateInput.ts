import { CondoUnitWhereUniqueInput } from "../condoUnit/CondoUnitWhereUniqueInput";
import { InputJsonValue } from "../../types";

export type RegistrationKeyUpdateInput = {
  condoUnit?: CondoUnitWhereUniqueInput;
  role?: InputJsonValue;
  value?: string;
};
