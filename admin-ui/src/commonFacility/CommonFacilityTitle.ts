import { CommonFacility as TCommonFacility } from "../api/commonFacility/CommonFacility";

export const COMMONFACILITY_TITLE_FIELD = "status";

export const CommonFacilityTitle = (record: TCommonFacility): string => {
  return record.status?.toString() || String(record.id);
};
