import { CondoUnitWhereUniqueInput } from "../condoUnit/CondoUnitWhereUniqueInput";
import { InputJsonValue } from "../../types";

export type RegistrationKeyCreateInput = {
  condoUnit: CondoUnitWhereUniqueInput;
  role: InputJsonValue;
  value: string;
};
