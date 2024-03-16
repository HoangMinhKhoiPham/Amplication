import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { CommonFacilityTitle } from "../commonFacility/CommonFacilityTitle";
import { UserTitle } from "../user/UserTitle";

export const ReservationCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="availablity" source="availablity" />
        <ReferenceInput
          source="commonFacilityID.id"
          reference="CommonFacility"
          label="commonFacilityID"
        >
          <SelectInput optionText={CommonFacilityTitle} />
        </ReferenceInput>
        <TextInput label="notes" source="notes" />
        <ReferenceInput source="user.id" reference="User" label="user">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
