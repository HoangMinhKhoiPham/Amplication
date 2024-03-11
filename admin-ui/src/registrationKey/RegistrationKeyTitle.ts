import { RegistrationKey as TRegistrationKey } from "../api/registrationKey/RegistrationKey";

export const REGISTRATIONKEY_TITLE_FIELD = "value";

export const RegistrationKeyTitle = (record: TRegistrationKey): string => {
  return record.value?.toString() || String(record.id);
};
