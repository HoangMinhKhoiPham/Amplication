import { CompanyWhereUniqueInput } from "../company/CompanyWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type RequestCreateInput = {
  company?: CompanyWhereUniqueInput | null;
  requestType?:
    | "moving_in"
    | "moving_out"
    | "intercom_change"
    | "access_request"
    | "violation_report"
    | "deficiency_report"
    | "question"
    | null;
  user?: UserWhereUniqueInput | null;
};
