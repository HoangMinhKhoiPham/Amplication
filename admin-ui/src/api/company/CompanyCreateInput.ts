import { CompanyEmployeeCreateNestedManyWithoutCompaniesInput } from "./CompanyEmployeeCreateNestedManyWithoutCompaniesInput";
import { CostCreateNestedManyWithoutCompaniesInput } from "./CostCreateNestedManyWithoutCompaniesInput";
import { FileCreateNestedManyWithoutCompaniesInput } from "./FileCreateNestedManyWithoutCompaniesInput";
import { ForumCreateNestedManyWithoutCompaniesInput } from "./ForumCreateNestedManyWithoutCompaniesInput";
import { PropertyCreateNestedManyWithoutCompaniesInput } from "./PropertyCreateNestedManyWithoutCompaniesInput";
import { RequestCreateNestedManyWithoutCompaniesInput } from "./RequestCreateNestedManyWithoutCompaniesInput";

export type CompanyCreateInput = {
  companyEmployees?: CompanyEmployeeCreateNestedManyWithoutCompaniesInput;
  costs?: CostCreateNestedManyWithoutCompaniesInput;
  file?: FileCreateNestedManyWithoutCompaniesInput;
  Forums?: ForumCreateNestedManyWithoutCompaniesInput;
  name: string;
  properties?: PropertyCreateNestedManyWithoutCompaniesInput;
  requests?: RequestCreateNestedManyWithoutCompaniesInput;
};
