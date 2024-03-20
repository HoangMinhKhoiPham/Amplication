import { CompanyUpdateManyWithoutForumsInput } from "./CompanyUpdateManyWithoutForumsInput";
import { PostUpdateManyWithoutForumsInput } from "./PostUpdateManyWithoutForumsInput";

export type ForumUpdateInput = {
  companies?: CompanyUpdateManyWithoutForumsInput;
  posts?: PostUpdateManyWithoutForumsInput;
};
