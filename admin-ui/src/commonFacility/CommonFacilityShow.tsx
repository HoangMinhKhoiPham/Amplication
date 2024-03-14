import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { COMMONFACILITY_TITLE_FIELD } from "./CommonFacilityTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const CommonFacilityShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="facilityType" source="facilityType" />
        <TextField label="ID" source="id" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Reservation"
          target="commonFacilityID"
          label="Reservations"
        >
          <Datagrid rowClick="show">
            <TextField label="availablity" source="availablity" />
            <ReferenceField
              label="commonFacilityID"
              source="commonfacility.id"
              reference="CommonFacility"
            >
              <TextField source={COMMONFACILITY_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="notes" source="notes" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField label="userID" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
