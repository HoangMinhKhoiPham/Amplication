import { PostCreateNestedManyWithoutForumsInput } from "./PostCreateNestedManyWithoutForumsInput";

export type ForumCreateInput = {
  posts?: PostCreateNestedManyWithoutForumsInput;
};
