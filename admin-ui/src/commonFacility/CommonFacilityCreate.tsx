import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
  SelectInput,
  ReferenceInput,
  TextInput,
} from "react-admin";

import { ReservationTitle } from "../reservation/ReservationTitle";
import { PropertyTitle } from "../property/PropertyTitle";

export const CommonFacilityCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="availabilities"
          reference="Reservation"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ReservationTitle} />
        </ReferenceArrayInput>
        <SelectInput
          source="facilityType"
          label="facilityType"
          choices={[
            { label: "Type_1", value: "sky_lounge" },
            { label: "Type_2", value: "spa_fitness" },
            { label: "Type_3", value: "sauna" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <ReferenceInput
          source="property.id"
          reference="Property"
          label="Property"
        >
          <SelectInput optionText={PropertyTitle} />
        </ReferenceInput>
        <TextInput label="status" source="status" />
      </SimpleForm>
    </Create>
  );
};
