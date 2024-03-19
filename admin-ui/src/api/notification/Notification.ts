import { Request } from "../request/Request";
import { User } from "../user/User";

export type Notification = {
  createdAt: Date;
  id: string;
  message: string | null;
  request?: Request | null;
  title: string | null;
  updatedAt: Date;
  user?: User | null;
};
