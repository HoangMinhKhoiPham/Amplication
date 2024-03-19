import { RequestWhereUniqueInput } from "../request/RequestWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type NotificationUpdateInput = {
  message?: string | null;
  request?: RequestWhereUniqueInput | null;
  title?: string | null;
  user?: UserWhereUniqueInput | null;
};
