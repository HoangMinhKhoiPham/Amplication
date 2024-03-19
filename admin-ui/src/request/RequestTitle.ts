import { Request as TRequest } from "../api/request/Request";

export const REQUEST_TITLE_FIELD = "elevator";

export const RequestTitle = (record: TRequest): string => {
  return record.elevator?.toString() || String(record.id);
};
