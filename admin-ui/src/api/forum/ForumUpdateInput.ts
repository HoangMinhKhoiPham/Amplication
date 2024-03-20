import { CompanyWhereUniqueInput } from "../company/CompanyWhereUniqueInput";
import { PostUpdateManyWithoutForumsInput } from "./PostUpdateManyWithoutForumsInput";

export type ForumUpdateInput = {
  company?: CompanyWhereUniqueInput | null;
  name?: string;
  posts?: PostUpdateManyWithoutForumsInput;
};
