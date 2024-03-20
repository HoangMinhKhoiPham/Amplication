import { Decimal } from "decimal.js";
import { Company } from "../company/Company";

export type Cost = {
  amount: Decimal | null;
  company?: Company | null;
  costName: string | null;
  createdAt: Date;
  id: string;
  updatedAt: Date;
};
