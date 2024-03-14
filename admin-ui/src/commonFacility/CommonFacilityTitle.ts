import { CommonFacility as TCommonFacility } from "../api/commonFacility/CommonFacility";

export const COMMONFACILITY_TITLE_FIELD = "id";

export const CommonFacilityTitle = (record: TCommonFacility): string => {
  return record.id?.toString() || String(record.id);
};
