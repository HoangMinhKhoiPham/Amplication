import { Company } from "../company/Company";
import { Request } from "../request/Request";
import { User } from "../user/User";

export type CompanyEmployee = {
  company?: Company | null;
  id: number;
  requests?: Array<Request>;
  user?: User | null;
};
