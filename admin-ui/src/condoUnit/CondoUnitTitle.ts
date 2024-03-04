import { CondoUnit as TCondoUnit } from "../api/condoUnit/CondoUnit";

export const CONDOUNIT_TITLE_FIELD = "size";

export const CondoUnitTitle = (record: TCondoUnit): string => {
  return record.size?.toString() || String(record.id);
};
