import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { CondoUnitTitle } from "../condoUnit/CondoUnitTitle";
import { PropertyTitle } from "../property/PropertyTitle";

export const ParkingSpotCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="condoUnit.id"
          reference="CondoUnit"
          label="CondoUnit"
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
    </Create>
  );
};
