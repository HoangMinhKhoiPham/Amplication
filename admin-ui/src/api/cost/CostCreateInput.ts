import { Decimal } from "decimal.js";
import { CompanyWhereUniqueInput } from "../company/CompanyWhereUniqueInput";

export type CostCreateInput = {
  amount?: Decimal | null;
  company?: CompanyWhereUniqueInput | null;
  costName?: string | null;
};
