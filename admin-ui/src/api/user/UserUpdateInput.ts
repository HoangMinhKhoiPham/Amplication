import { CompanyEmployeeUpdateManyWithoutUsersInput } from "./CompanyEmployeeUpdateManyWithoutUsersInput";
import { FileUpdateManyWithoutUsersInput } from "./FileUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";
import { UserCondoUpdateManyWithoutUsersInput } from "./UserCondoUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  companyEmployees?: CompanyEmployeeUpdateManyWithoutUsersInput;
  email?: string;
  files?: FileUpdateManyWithoutUsersInput;
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  phoneNumber?: string;
  roles?: InputJsonValue;
  userCondos?: UserCondoUpdateManyWithoutUsersInput;
  username?: string;
};
