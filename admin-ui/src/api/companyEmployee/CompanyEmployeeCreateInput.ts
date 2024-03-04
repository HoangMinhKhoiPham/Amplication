import { CompanyWhereUniqueInput } from "../company/CompanyWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CompanyEmployeeCreateInput = {
  company?: CompanyWhereUniqueInput | null;
  user?: UserWhereUniqueInput | null;
};
