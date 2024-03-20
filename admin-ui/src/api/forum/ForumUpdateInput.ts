import { CompanyWhereUniqueInput } from "../company/CompanyWhereUniqueInput";
import { PostUpdateManyWithoutForumsInput } from "./PostUpdateManyWithoutForumsInput";

export type ForumUpdateInput = {
  companies?: CompanyWhereUniqueInput | null;
  posts?: PostUpdateManyWithoutForumsInput;
};
