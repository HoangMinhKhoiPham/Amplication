import { CompanyEmployee as TCompanyEmployee } from "../api/companyEmployee/CompanyEmployee";

export const COMPANYEMPLOYEE_TITLE_FIELD = "id";

export const CompanyEmployeeTitle = (record: TCompanyEmployee): string => {
  return record.id?.toString() || String(record.id);
};
