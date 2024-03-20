import { CompanyWhereUniqueInput } from "../company/CompanyWhereUniqueInput";
import { PostCreateNestedManyWithoutForumsInput } from "./PostCreateNestedManyWithoutForumsInput";

export type ForumCreateInput = {
  companies?: CompanyWhereUniqueInput | null;
  posts?: PostCreateNestedManyWithoutForumsInput;
};
