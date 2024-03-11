import { CompanyWhereUniqueInput } from "../company/CompanyWhereUniqueInput";
import { IntFilter } from "../../util/IntFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CompanyEmployeeWhereInput = {
  company?: CompanyWhereUniqueInput;
  id?: IntFilter;
  user?: UserWhereUniqueInput;
};
