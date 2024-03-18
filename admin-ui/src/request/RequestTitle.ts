import { Request as TRequest } from "../api/request/Request";

export const REQUEST_TITLE_FIELD = "comment";

export const RequestTitle = (record: TRequest): string => {
  return record.comment?.toString() || String(record.id);
};
