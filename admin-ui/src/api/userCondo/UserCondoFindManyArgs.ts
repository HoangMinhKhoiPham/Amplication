import { UserCondoWhereInput } from "./UserCondoWhereInput";
import { UserCondoOrderByInput } from "./UserCondoOrderByInput";

export type UserCondoFindManyArgs = {
  where?: UserCondoWhereInput;
  orderBy?: Array<UserCondoOrderByInput>;
  skip?: number;
  take?: number;
};
