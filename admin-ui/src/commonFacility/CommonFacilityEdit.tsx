import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
  SelectInput,
} from "react-admin";

import { ReservationTitle } from "../reservation/ReservationTitle";

export const CommonFacilityEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
      </SimpleForm>
    </Edit>
  );
};
