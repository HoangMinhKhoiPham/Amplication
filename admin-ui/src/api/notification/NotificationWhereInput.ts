import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { RequestWhereUniqueInput } from "../request/RequestWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type NotificationWhereInput = {
  id?: StringFilter;
  message?: StringNullableFilter;
  request?: RequestWhereUniqueInput;
  title?: StringNullableFilter;
  user?: UserWhereUniqueInput;
};
