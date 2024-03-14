import { CompanyEmployeeUpdateManyWithoutCompaniesInput } from "./CompanyEmployeeUpdateManyWithoutCompaniesInput";
import { FileUpdateManyWithoutCompaniesInput } from "./FileUpdateManyWithoutCompaniesInput";
import { PropertyUpdateManyWithoutCompaniesInput } from "./PropertyUpdateManyWithoutCompaniesInput";
import { RequestUpdateManyWithoutCompaniesInput } from "./RequestUpdateManyWithoutCompaniesInput";

export type CompanyUpdateInput = {
  companyEmployees?: CompanyEmployeeUpdateManyWithoutCompaniesInput;
  file?: FileUpdateManyWithoutCompaniesInput;
  name?: string;
  properties?: PropertyUpdateManyWithoutCompaniesInput;
  requests?: RequestUpdateManyWithoutCompaniesInput;
};
