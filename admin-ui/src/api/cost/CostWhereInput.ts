import { DecimalNullableFilter } from "../../util/DecimalNullableFilter";
import { CompanyWhereUniqueInput } from "../company/CompanyWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntFilter } from "../../util/IntFilter";

export type CostWhereInput = {
  amount?: DecimalNullableFilter;
  company?: CompanyWhereUniqueInput;
  costName?: StringNullableFilter;
  id?: IntFilter;
};
