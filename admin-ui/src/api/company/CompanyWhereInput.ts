import { CompanyEmployeeListRelationFilter } from "../companyEmployee/CompanyEmployeeListRelationFilter";
import { FileListRelationFilter } from "../file/FileListRelationFilter";
import { ForumListRelationFilter } from "../forum/ForumListRelationFilter";
import { IntFilter } from "../../util/IntFilter";
import { StringFilter } from "../../util/StringFilter";
import { PropertyListRelationFilter } from "../property/PropertyListRelationFilter";
import { RequestListRelationFilter } from "../request/RequestListRelationFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type CompanyWhereInput = {
  companyEmployees?: CompanyEmployeeListRelationFilter;
  file?: FileListRelationFilter;
  Forums?: ForumListRelationFilter;
  id?: IntFilter;
  name?: StringFilter;
  properties?: PropertyListRelationFilter;
  requests?: RequestListRelationFilter;
  updatedAt?: DateTimeNullableFilter;
};
