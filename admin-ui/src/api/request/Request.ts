import { Company } from "../company/Company";
import { CondoUnit } from "../condoUnit/CondoUnit";
import { CompanyEmployee } from "../companyEmployee/CompanyEmployee";
import { Property } from "../property/Property";
import { User } from "../user/User";

export type Request = {
  comment: string | null;
  company?: Company | null;
  condoUnit?: CondoUnit | null;
  createdAt: Date;
  elevator: string | null;
  employee?: CompanyEmployee | null;
  id: string;
  key: string | null;
  property?: Property | null;
  question: string | null;
  requestType?:
    | "moving_in"
    | "moving_out"
    | "intercom_change"
    | "access_request"
    | "violation_report"
    | "deficiency_report"
    | "question"
    | null;
  response: string | null;
  status?:
    | "New"
    | "In_Progress"
    | "Pending_Approval"
    | "Approved"
    | "Disapproved"
    | "Complete"
    | null;
  updatedAt: Date;
  user?: User | null;
};
