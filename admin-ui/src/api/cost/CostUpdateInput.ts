import { Decimal } from "decimal.js";
import { CompanyWhereUniqueInput } from "../company/CompanyWhereUniqueInput";

export type CostUpdateInput = {
  amount?: Decimal | null;
  company?: CompanyWhereUniqueInput | null;
  costName?: string | null;
};
