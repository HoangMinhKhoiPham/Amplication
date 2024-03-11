import { CompanyEmployeeWhereInput } from "./CompanyEmployeeWhereInput";
import { CompanyEmployeeOrderByInput } from "./CompanyEmployeeOrderByInput";

export type CompanyEmployeeFindManyArgs = {
  where?: CompanyEmployeeWhereInput;
  orderBy?: Array<CompanyEmployeeOrderByInput>;
  skip?: number;
  take?: number;
};
