import { Locker as TLocker } from "../api/locker/Locker";

export const LOCKER_TITLE_FIELD = "id";

export const LockerTitle = (record: TLocker): string => {
  return record.id?.toString() || String(record.id);
};
