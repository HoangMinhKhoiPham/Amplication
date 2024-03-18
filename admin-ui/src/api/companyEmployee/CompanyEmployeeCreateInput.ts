import { CompanyWhereUniqueInput } from "../company/CompanyWhereUniqueInput";
import { RequestCreateNestedManyWithoutCompanyEmployeesInput } from "./RequestCreateNestedManyWithoutCompanyEmployeesInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CompanyEmployeeCreateInput = {
  company?: CompanyWhereUniqueInput | null;
  requests?: RequestCreateNestedManyWithoutCompanyEmployeesInput;
  user?: UserWhereUniqueInput | null;
};
