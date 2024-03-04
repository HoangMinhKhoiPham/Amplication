import { RegistrationKeyWhereInput } from "./RegistrationKeyWhereInput";
import { RegistrationKeyOrderByInput } from "./RegistrationKeyOrderByInput";

export type RegistrationKeyFindManyArgs = {
  where?: RegistrationKeyWhereInput;
  orderBy?: Array<RegistrationKeyOrderByInput>;
  skip?: number;
  take?: number;
};
