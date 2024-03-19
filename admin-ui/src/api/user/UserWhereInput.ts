import { CompanyEmployeeListRelationFilter } from "../companyEmployee/CompanyEmployeeListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { FileListRelationFilter } from "../file/FileListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntFilter } from "../../util/IntFilter";
import { NotificationListRelationFilter } from "../notification/NotificationListRelationFilter";
import { PostListRelationFilter } from "../post/PostListRelationFilter";
import { RequestListRelationFilter } from "../request/RequestListRelationFilter";
import { ReservationListRelationFilter } from "../reservation/ReservationListRelationFilter";
import { UserCondoListRelationFilter } from "../userCondo/UserCondoListRelationFilter";

export type UserWhereInput = {
  companyEmployees?: CompanyEmployeeListRelationFilter;
  email?: StringFilter;
  files?: FileListRelationFilter;
  firstName?: StringNullableFilter;
  id?: IntFilter;
  lastName?: StringNullableFilter;
  notifications?: NotificationListRelationFilter;
  phoneNumber?: StringFilter;
  posts?: PostListRelationFilter;
  requests?: RequestListRelationFilter;
  reservations?: ReservationListRelationFilter;
  userCondos?: UserCondoListRelationFilter;
  username?: StringFilter;
};
