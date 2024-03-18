import { CompanyWhereUniqueInput } from "../company/CompanyWhereUniqueInput";
import { RequestUpdateManyWithoutCompanyEmployeesInput } from "./RequestUpdateManyWithoutCompanyEmployeesInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CompanyEmployeeUpdateInput = {
  company?: CompanyWhereUniqueInput | null;
  requests?: RequestUpdateManyWithoutCompanyEmployeesInput;
  user?: UserWhereUniqueInput | null;
};
