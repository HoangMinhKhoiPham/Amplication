import { CompanyWhereUniqueInput } from "../company/CompanyWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CompanyEmployeeUpdateInput = {
  company?: CompanyWhereUniqueInput | null;
  user?: UserWhereUniqueInput | null;
};
