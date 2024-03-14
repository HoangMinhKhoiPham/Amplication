import { CompanyEmployeeListRelationFilter } from "../companyEmployee/CompanyEmployeeListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { FileListRelationFilter } from "../file/FileListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntFilter } from "../../util/IntFilter";
import { PostListRelationFilter } from "../post/PostListRelationFilter";
import { ReservationListRelationFilter } from "../reservation/ReservationListRelationFilter";
import { UserCondoListRelationFilter } from "../userCondo/UserCondoListRelationFilter";

export type UserWhereInput = {
  companyEmployees?: CompanyEmployeeListRelationFilter;
  email?: StringFilter;
  files?: FileListRelationFilter;
  firstName?: StringNullableFilter;
  id?: IntFilter;
  lastName?: StringNullableFilter;
  phoneNumber?: StringFilter;
  posts?: PostListRelationFilter;
  reservations?: ReservationListRelationFilter;
  userCondos?: UserCondoListRelationFilter;
  username?: StringFilter;
};
