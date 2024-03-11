import { CondoUnit } from "../condoUnit/CondoUnit";
import { JsonValue } from "type-fest";

export type RegistrationKey = {
  condoUnit?: CondoUnit;
  createdAt: Date;
  id: number;
  role: JsonValue;
  updatedAt: Date;
  value: string;
};
