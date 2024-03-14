import { CompanyWhereUniqueInput } from "../company/CompanyWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type RequestWhereInput = {
  companyID?: CompanyWhereUniqueInput;
  id?: StringFilter;
  requestType?:
    | "moving_in"
    | "moving_out"
    | "intercom_change"
    | "access_request"
    | "violation_report"
    | "deficiency_report"
    | "question";
  userID?: UserWhereUniqueInput;
};
