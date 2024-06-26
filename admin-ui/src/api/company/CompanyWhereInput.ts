import { CompanyEmployeeListRelationFilter } from "../companyEmployee/CompanyEmployeeListRelationFilter";
import { CostListRelationFilter } from "../cost/CostListRelationFilter";
import { FileListRelationFilter } from "../file/FileListRelationFilter";
import { ForumListRelationFilter } from "../forum/ForumListRelationFilter";
import { IntFilter } from "../../util/IntFilter";
import { StringFilter } from "../../util/StringFilter";
import { PropertyListRelationFilter } from "../property/PropertyListRelationFilter";
import { RequestListRelationFilter } from "../request/RequestListRelationFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type CompanyWhereInput = {
  companyEmployees?: CompanyEmployeeListRelationFilter;
  costs?: CostListRelationFilter;
  file?: FileListRelationFilter;
  forums?: ForumListRelationFilter;
  id?: IntFilter;
  name?: StringFilter;
  properties?: PropertyListRelationFilter;
  requests?: RequestListRelationFilter;
  updatedAt?: DateTimeNullableFilter;
};
