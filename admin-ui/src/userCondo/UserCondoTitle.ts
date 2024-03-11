import { UserCondo as TUserCondo } from "../api/userCondo/UserCondo";

export const USERCONDO_TITLE_FIELD = "id";

export const UserCondoTitle = (record: TUserCondo): string => {
  return record.id?.toString() || String(record.id);
};
