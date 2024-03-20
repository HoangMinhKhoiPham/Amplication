import { CompanyCreateNestedManyWithoutForumsInput } from "./CompanyCreateNestedManyWithoutForumsInput";
import { PostCreateNestedManyWithoutForumsInput } from "./PostCreateNestedManyWithoutForumsInput";

export type ForumCreateInput = {
  companies?: CompanyCreateNestedManyWithoutForumsInput;
  posts?: PostCreateNestedManyWithoutForumsInput;
};
