import { CompanyWhereUniqueInput } from "../company/CompanyWhereUniqueInput";
import { CondoUnitWhereUniqueInput } from "../condoUnit/CondoUnitWhereUniqueInput";
import { CompanyEmployeeWhereUniqueInput } from "../companyEmployee/CompanyEmployeeWhereUniqueInput";
import { PropertyWhereUniqueInput } from "../property/PropertyWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type RequestUpdateInput = {
  comment?: string | null;
  company?: CompanyWhereUniqueInput | null;
  condoUnit?: CondoUnitWhereUniqueInput | null;
  elevator?: string | null;
  employee?: CompanyEmployeeWhereUniqueInput | null;
  key?: string | null;
  property?: PropertyWhereUniqueInput | null;
  question?: string | null;
  requestType?:
    | "moving_in"
    | "moving_out"
    | "intercom_change"
    | "access_request"
    | "violation_report"
    | "deficiency_report"
    | "question"
    | null;
  response?: string | null;
  status?:
    | "New"
    | "In_Progress"
    | "Pending_Approval"
    | "Approved"
    | "Disapproved"
    | "Complete"
    | null;
  user?: UserWhereUniqueInput | null;
};
