import { CompanyEmployeeCreateNestedManyWithoutUsersInput } from "./CompanyEmployeeCreateNestedManyWithoutUsersInput";
import { FileCreateNestedManyWithoutUsersInput } from "./FileCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";
import { UserCondoCreateNestedManyWithoutUsersInput } from "./UserCondoCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  companyEmployees?: CompanyEmployeeCreateNestedManyWithoutUsersInput;
  email: string;
  files?: FileCreateNestedManyWithoutUsersInput;
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  phoneNumber: string;
  roles: InputJsonValue;
  userCondos?: UserCondoCreateNestedManyWithoutUsersInput;
  username: string;
};
