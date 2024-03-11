import { StringFilter } from "../../util/StringFilter";
import { CompanyWhereUniqueInput } from "../company/CompanyWhereUniqueInput";
import { CondoUnitWhereUniqueInput } from "../condoUnit/CondoUnitWhereUniqueInput";
import { IntFilter } from "../../util/IntFilter";
import { PropertyWhereUniqueInput } from "../property/PropertyWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type FileWhereInput = {
  bucket?: StringFilter;
  company?: CompanyWhereUniqueInput;
  condoUnit?: CondoUnitWhereUniqueInput;
  id?: IntFilter;
  name?: StringFilter;
  property?: PropertyWhereUniqueInput;
  user?: UserWhereUniqueInput;
};
