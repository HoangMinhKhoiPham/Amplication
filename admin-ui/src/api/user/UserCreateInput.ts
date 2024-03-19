import { CompanyEmployeeCreateNestedManyWithoutUsersInput } from "./CompanyEmployeeCreateNestedManyWithoutUsersInput";
import { FileCreateNestedManyWithoutUsersInput } from "./FileCreateNestedManyWithoutUsersInput";
import { NotificationCreateNestedManyWithoutUsersInput } from "./NotificationCreateNestedManyWithoutUsersInput";
import { PostCreateNestedManyWithoutUsersInput } from "./PostCreateNestedManyWithoutUsersInput";
import { RequestCreateNestedManyWithoutUsersInput } from "./RequestCreateNestedManyWithoutUsersInput";
import { ReservationCreateNestedManyWithoutUsersInput } from "./ReservationCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";
import { UserCondoCreateNestedManyWithoutUsersInput } from "./UserCondoCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  companyEmployees?: CompanyEmployeeCreateNestedManyWithoutUsersInput;
  email: string;
  files?: FileCreateNestedManyWithoutUsersInput;
  firstName?: string | null;
  lastName?: string | null;
  notifications?: NotificationCreateNestedManyWithoutUsersInput;
  password: string;
  phoneNumber: string;
  posts?: PostCreateNestedManyWithoutUsersInput;
  requests?: RequestCreateNestedManyWithoutUsersInput;
  reservations?: ReservationCreateNestedManyWithoutUsersInput;
  roles: InputJsonValue;
  userCondos?: UserCondoCreateNestedManyWithoutUsersInput;
  username: string;
};
