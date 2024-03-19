import { CompanyEmployee } from "../companyEmployee/CompanyEmployee";
import { File } from "../file/File";
import { Notification } from "../notification/Notification";
import { Post } from "../post/Post";
import { Request } from "../request/Request";
import { Reservation } from "../reservation/Reservation";
import { JsonValue } from "type-fest";
import { UserCondo } from "../userCondo/UserCondo";

export type User = {
  companyEmployees?: Array<CompanyEmployee>;
  createdAt: Date;
  email: string;
  files?: Array<File>;
  firstName: string | null;
  id: number;
  lastName: string | null;
  notifications?: Array<Notification>;
  phoneNumber: string;
  posts?: Array<Post>;
  requests?: Array<Request>;
  reservations?: Array<Reservation>;
  roles: JsonValue;
  updatedAt: Date;
  userCondos?: Array<UserCondo>;
  username: string;
};
