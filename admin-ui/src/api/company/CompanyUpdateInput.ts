import { CompanyEmployeeUpdateManyWithoutCompaniesInput } from "./CompanyEmployeeUpdateManyWithoutCompaniesInput";
import { CostUpdateManyWithoutCompaniesInput } from "./CostUpdateManyWithoutCompaniesInput";
import { FileUpdateManyWithoutCompaniesInput } from "./FileUpdateManyWithoutCompaniesInput";
import { ForumUpdateManyWithoutCompaniesInput } from "./ForumUpdateManyWithoutCompaniesInput";
import { PropertyUpdateManyWithoutCompaniesInput } from "./PropertyUpdateManyWithoutCompaniesInput";
import { RequestUpdateManyWithoutCompaniesInput } from "./RequestUpdateManyWithoutCompaniesInput";

export type CompanyUpdateInput = {
  companyEmployees?: CompanyEmployeeUpdateManyWithoutCompaniesInput;
  costs?: CostUpdateManyWithoutCompaniesInput;
  file?: FileUpdateManyWithoutCompaniesInput;
  forums?: ForumUpdateManyWithoutCompaniesInput;
  name?: string;
  properties?: PropertyUpdateManyWithoutCompaniesInput;
  requests?: RequestUpdateManyWithoutCompaniesInput;
};
