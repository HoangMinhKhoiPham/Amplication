import { Reply as TReply } from "../api/reply/Reply";

export const REPLY_TITLE_FIELD = "content";

export const ReplyTitle = (record: TReply): string => {
  return record.content?.toString() || String(record.id);
};
