import { CompanyEmployeeUpdateManyWithoutUsersInput } from "./CompanyEmployeeUpdateManyWithoutUsersInput";
import { FileUpdateManyWithoutUsersInput } from "./FileUpdateManyWithoutUsersInput";
import { NotificationUpdateManyWithoutUsersInput } from "./NotificationUpdateManyWithoutUsersInput";
import { PostUpdateManyWithoutUsersInput } from "./PostUpdateManyWithoutUsersInput";
import { RequestUpdateManyWithoutUsersInput } from "./RequestUpdateManyWithoutUsersInput";
import { ReservationUpdateManyWithoutUsersInput } from "./ReservationUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";
import { UserCondoUpdateManyWithoutUsersInput } from "./UserCondoUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  companyEmployees?: CompanyEmployeeUpdateManyWithoutUsersInput;
  email?: string;
  files?: FileUpdateManyWithoutUsersInput;
  firstName?: string | null;
  lastName?: string | null;
  notifications?: NotificationUpdateManyWithoutUsersInput;
  password?: string;
  phoneNumber?: string;
  posts?: PostUpdateManyWithoutUsersInput;
  requests?: RequestUpdateManyWithoutUsersInput;
  reservations?: ReservationUpdateManyWithoutUsersInput;
  roles?: InputJsonValue;
  userCondos?: UserCondoUpdateManyWithoutUsersInput;
  username?: string;
};
