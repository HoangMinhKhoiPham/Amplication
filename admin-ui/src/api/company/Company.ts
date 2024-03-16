import { CompanyEmployee } from "../companyEmployee/CompanyEmployee";
import { File } from "../file/File";
import { Property } from "../property/Property";
import { Request } from "../request/Request";

export type Company = {
  companyEmployees?: Array<CompanyEmployee>;
  createdAt: Date;
  file?: Array<File>;
  id: number;
  name: string;
  properties?: Array<Property>;
  requests?: Array<Request>;
  updatedAt: Date | null;
};
