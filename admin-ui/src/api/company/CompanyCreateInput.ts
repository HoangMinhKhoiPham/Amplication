import { CompanyEmployeeCreateNestedManyWithoutCompaniesInput } from "./CompanyEmployeeCreateNestedManyWithoutCompaniesInput";
import { FileCreateNestedManyWithoutCompaniesInput } from "./FileCreateNestedManyWithoutCompaniesInput";
import { PropertyCreateNestedManyWithoutCompaniesInput } from "./PropertyCreateNestedManyWithoutCompaniesInput";
import { RequestCreateNestedManyWithoutCompaniesInput } from "./RequestCreateNestedManyWithoutCompaniesInput";

export type CompanyCreateInput = {
  companyEmployees?: CompanyEmployeeCreateNestedManyWithoutCompaniesInput;
  file?: FileCreateNestedManyWithoutCompaniesInput;
  name: string;
  properties?: PropertyCreateNestedManyWithoutCompaniesInput;
  requests?: RequestCreateNestedManyWithoutCompaniesInput;
};
