import { Company } from "../company/Company";
import { CondoUnit } from "../condoUnit/CondoUnit";
import { Property } from "../property/Property";
import { User } from "../user/User";

export type File = {
  bucket: string;
  company?: Company | null;
  condoUnit?: CondoUnit | null;
  createdAt: Date;
  id: number;
  name: string;
  property?: Property | null;
  updatedAt: Date;
  user?: User | null;
};
