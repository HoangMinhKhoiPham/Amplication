import { CompanyWhereUniqueInput } from "../company/CompanyWhereUniqueInput";
import { CondoUnitWhereUniqueInput } from "../condoUnit/CondoUnitWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { CompanyEmployeeWhereUniqueInput } from "../companyEmployee/CompanyEmployeeWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { NotificationListRelationFilter } from "../notification/NotificationListRelationFilter";
import { PropertyWhereUniqueInput } from "../property/PropertyWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type RequestWhereInput = {
  company?: CompanyWhereUniqueInput;
  condoUnit?: CondoUnitWhereUniqueInput;
  elevator?: StringNullableFilter;
  employee?: CompanyEmployeeWhereUniqueInput;
  id?: StringFilter;
  key?: StringNullableFilter;
  notifications?: NotificationListRelationFilter;
  property?: PropertyWhereUniqueInput;
  question?: StringNullableFilter;
  reportMessage?: StringNullableFilter;
  requestType?:
    | "moving_in"
    | "moving_out"
    | "intercom_change"
    | "access_request"
    | "violation_report"
    | "deficiency_report"
    | "question";
  response?: StringNullableFilter;
  status?:
    | "New"
    | "In_Progress"
    | "Pending_Approval"
    | "Approved"
    | "Disapproved"
    | "Complete";
  user?: UserWhereUniqueInput;
};
