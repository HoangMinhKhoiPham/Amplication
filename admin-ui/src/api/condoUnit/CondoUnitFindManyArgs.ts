import { CondoUnitWhereInput } from "./CondoUnitWhereInput";
import { CondoUnitOrderByInput } from "./CondoUnitOrderByInput";

export type CondoUnitFindManyArgs = {
  where?: CondoUnitWhereInput;
  orderBy?: Array<CondoUnitOrderByInput>;
  skip?: number;
  take?: number;
};
