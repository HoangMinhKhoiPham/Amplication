import { Company } from "../company/Company";
import { User } from "../user/User";

export type Request = {
  company?: Company | null;
  createdAt: Date;
  id: string;
  requestType?:
    | "moving_in"
    | "moving_out"
    | "intercom_change"
    | "access_request"
    | "violation_report"
    | "deficiency_report"
    | "question"
    | null;
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
