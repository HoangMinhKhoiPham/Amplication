import { Company } from "../company/Company";
import { User } from "../user/User";

export type Request = {
  companyID?: Company | null;
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
  updatedAt: Date;
  userID?: User | null;
};
