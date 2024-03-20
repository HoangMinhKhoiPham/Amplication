import { DecimalNullableFilter } from "../../util/DecimalNullableFilter";
import { CompanyWhereUniqueInput } from "../company/CompanyWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type CostWhereInput = {
  amount?: DecimalNullableFilter;
  company?: CompanyWhereUniqueInput;
  costName?: StringNullableFilter;
  id?: StringFilter;
};
