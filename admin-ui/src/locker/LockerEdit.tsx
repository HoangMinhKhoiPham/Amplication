import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { CondoUnitTitle } from "../condoUnit/CondoUnitTitle";
import { PropertyTitle } from "../property/PropertyTitle";

export const LockerEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput
          source="condoUnits.id"
          reference="CondoUnit"
          label="CondoUnits"
        >
          <SelectInput optionText={CondoUnitTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="property.id"
          reference="Property"
          label="property"
        >
          <SelectInput optionText={PropertyTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
