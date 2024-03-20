import { CompanyEmployeeUpdateManyWithoutCompaniesInput } from "./CompanyEmployeeUpdateManyWithoutCompaniesInput";
import { FileUpdateManyWithoutCompaniesInput } from "./FileUpdateManyWithoutCompaniesInput";
import { ForumUpdateManyWithoutCompaniesInput } from "./ForumUpdateManyWithoutCompaniesInput";
import { PropertyUpdateManyWithoutCompaniesInput } from "./PropertyUpdateManyWithoutCompaniesInput";
import { RequestUpdateManyWithoutCompaniesInput } from "./RequestUpdateManyWithoutCompaniesInput";

export type CompanyUpdateInput = {
  companyEmployees?: CompanyEmployeeUpdateManyWithoutCompaniesInput;
  file?: FileUpdateManyWithoutCompaniesInput;
  Forums?: ForumUpdateManyWithoutCompaniesInput;
  name?: string;
  properties?: PropertyUpdateManyWithoutCompaniesInput;
  requests?: RequestUpdateManyWithoutCompaniesInput;
};
