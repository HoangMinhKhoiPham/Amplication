import { Cost as TCost } from "../api/cost/Cost";

export const COST_TITLE_FIELD = "costName";

export const CostTitle = (record: TCost): string => {
  return record.costName?.toString() || String(record.id);
};
