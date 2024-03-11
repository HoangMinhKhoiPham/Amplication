import { LockerWhereInput } from "./LockerWhereInput";
import { LockerOrderByInput } from "./LockerOrderByInput";

export type LockerFindManyArgs = {
  where?: LockerWhereInput;
  orderBy?: Array<LockerOrderByInput>;
  skip?: number;
  take?: number;
};
