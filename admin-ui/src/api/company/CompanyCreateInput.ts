import { CompanyEmployeeCreateNestedManyWithoutCompaniesInput } from "./CompanyEmployeeCreateNestedManyWithoutCompaniesInput";
import { FileCreateNestedManyWithoutCompaniesInput } from "./FileCreateNestedManyWithoutCompaniesInput";
import { PropertyCreateNestedManyWithoutCompaniesInput } from "./PropertyCreateNestedManyWithoutCompaniesInput";

export type CompanyCreateInput = {
  companyEmployees?: CompanyEmployeeCreateNestedManyWithoutCompaniesInput;
  file?: FileCreateNestedManyWithoutCompaniesInput;
  name: string;
  properties?: PropertyCreateNestedManyWithoutCompaniesInput;
};
