import { CompanyEmployee } from "../companyEmployee/CompanyEmployee";
import { File } from "../file/File";
import { Property } from "../property/Property";

export type Company = {
  companyEmployees?: Array<CompanyEmployee>;
  createdAt: Date;
  file?: Array<File>;
  id: number;
  name: string;
  properties?: Array<Property>;
  updatedAt: Date | null;
};
