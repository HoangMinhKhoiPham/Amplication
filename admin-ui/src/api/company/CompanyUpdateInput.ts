import { CompanyEmployeeUpdateManyWithoutCompaniesInput } from "./CompanyEmployeeUpdateManyWithoutCompaniesInput";
import { FileUpdateManyWithoutCompaniesInput } from "./FileUpdateManyWithoutCompaniesInput";
import { PropertyUpdateManyWithoutCompaniesInput } from "./PropertyUpdateManyWithoutCompaniesInput";

export type CompanyUpdateInput = {
  companyEmployees?: CompanyEmployeeUpdateManyWithoutCompaniesInput;
  file?: FileUpdateManyWithoutCompaniesInput;
  name?: string;
  properties?: PropertyUpdateManyWithoutCompaniesInput;
};
