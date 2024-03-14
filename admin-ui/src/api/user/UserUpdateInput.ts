import { CompanyEmployeeUpdateManyWithoutUsersInput } from "./CompanyEmployeeUpdateManyWithoutUsersInput";
import { FileUpdateManyWithoutUsersInput } from "./FileUpdateManyWithoutUsersInput";
import { PostUpdateManyWithoutUsersInput } from "./PostUpdateManyWithoutUsersInput";
import { ReservationUpdateManyWithoutUsersInput } from "./ReservationUpdateManyWithoutUsersInput";
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
  posts?: PostUpdateManyWithoutUsersInput;
  reservations?: ReservationUpdateManyWithoutUsersInput;
  roles?: InputJsonValue;
  userCondos?: UserCondoUpdateManyWithoutUsersInput;
  username?: string;
};
