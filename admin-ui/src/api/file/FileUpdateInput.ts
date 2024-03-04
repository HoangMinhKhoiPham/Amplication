import { CompanyWhereUniqueInput } from "../company/CompanyWhereUniqueInput";
import { CondoUnitWhereUniqueInput } from "../condoUnit/CondoUnitWhereUniqueInput";
import { PropertyWhereUniqueInput } from "../property/PropertyWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type FileUpdateInput = {
  bucket?: string;
  company?: CompanyWhereUniqueInput | null;
  condoUnit?: CondoUnitWhereUniqueInput | null;
  name?: string;
  property?: PropertyWhereUniqueInput | null;
  user?: UserWhereUniqueInput | null;
};
