import { Company } from "../company/Company";
import { User } from "../user/User";

export type CompanyEmployee = {
  company?: Company | null;
  id: number;
  user?: User | null;
};
