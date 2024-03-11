import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  SelectArrayInput,
  TextInput,
} from "react-admin";

import { CondoUnitTitle } from "../condoUnit/CondoUnitTitle";
import { ROLES_OPTIONS } from "../user/RolesOptions";

export const RegistrationKeyCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="condoUnit.id"
          reference="CondoUnit"
          label="condoUnit"
        >
          <SelectInput optionText={CondoUnitTitle} />
        </ReferenceInput>
        <SelectArrayInput
          source="role"
          choices={ROLES_OPTIONS}
          optionText="label"
          optionValue="value"
        />
        <TextInput label="value" source="value" />
      </SimpleForm>
    </Create>
  );
};
