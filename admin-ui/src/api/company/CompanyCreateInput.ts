import { CompanyEmployeeCreateNestedManyWithoutCompaniesInput } from "./CompanyEmployeeCreateNestedManyWithoutCompaniesInput";
import { FileCreateNestedManyWithoutCompaniesInput } from "./FileCreateNestedManyWithoutCompaniesInput";
import { ForumCreateNestedManyWithoutCompaniesInput } from "./ForumCreateNestedManyWithoutCompaniesInput";
import { PropertyCreateNestedManyWithoutCompaniesInput } from "./PropertyCreateNestedManyWithoutCompaniesInput";
import { RequestCreateNestedManyWithoutCompaniesInput } from "./RequestCreateNestedManyWithoutCompaniesInput";

export type CompanyCreateInput = {
  companyEmployees?: CompanyEmployeeCreateNestedManyWithoutCompaniesInput;
  file?: FileCreateNestedManyWithoutCompaniesInput;
  Forums?: ForumCreateNestedManyWithoutCompaniesInput;
  name: string;
  properties?: PropertyCreateNestedManyWithoutCompaniesInput;
  requests?: RequestCreateNestedManyWithoutCompaniesInput;
};
