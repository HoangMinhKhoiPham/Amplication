import { CompanyEmployeeListRelationFilter } from "../companyEmployee/CompanyEmployeeListRelationFilter";
import { FileListRelationFilter } from "../file/FileListRelationFilter";
import { IntFilter } from "../../util/IntFilter";
import { StringFilter } from "../../util/StringFilter";
import { PropertyListRelationFilter } from "../property/PropertyListRelationFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type CompanyWhereInput = {
  companyEmployees?: CompanyEmployeeListRelationFilter;
  file?: FileListRelationFilter;
  id?: IntFilter;
  name?: StringFilter;
  properties?: PropertyListRelationFilter;
  updatedAt?: DateTimeNullableFilter;
};
