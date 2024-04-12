import { CompanyWhereUniqueInput } from "../company/CompanyWhereUniqueInput";
import { PostCreateNestedManyWithoutForumsInput } from "./PostCreateNestedManyWithoutForumsInput";

export type ForumCreateInput = {
  company?: CompanyWhereUniqueInput | null;
  name: string;
  posts?: PostCreateNestedManyWithoutForumsInput;
};
