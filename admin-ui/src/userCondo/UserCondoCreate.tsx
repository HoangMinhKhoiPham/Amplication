import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { CondoUnitTitle } from "../condoUnit/CondoUnitTitle";
import { UserTitle } from "../user/UserTitle";

export const UserCondoCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="condo.id" reference="CondoUnit" label="condo">
          <SelectInput optionText={CondoUnitTitle} />
        </ReferenceInput>
        <ReferenceInput source="user.id" reference="User" label="user">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
