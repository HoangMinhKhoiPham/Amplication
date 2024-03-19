import { CompanyWhereUniqueInput } from "../company/CompanyWhereUniqueInput";
import { IntFilter } from "../../util/IntFilter";
import { RequestListRelationFilter } from "../request/RequestListRelationFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CompanyEmployeeWhereInput = {
  company?: CompanyWhereUniqueInput;
  id?: IntFilter;
  requests?: RequestListRelationFilter;
  user?: UserWhereUniqueInput;
};
