import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { COMMONFACILITY_TITLE_FIELD } from "./CommonFacilityTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";
import { PROPERTY_TITLE_FIELD } from "../property/PropertyTitle";

export const CommonFacilityShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="facilityType" source="facilityType" />
        <TextField label="ID" source="id" />
        <ReferenceField
          label="Property"
          source="property.id"
          reference="Property"
        >
          <TextField source={PROPERTY_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="status" source="status" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Reservation"
          target="commonFacilityID"
          label="Reservations"
        >
          <Datagrid rowClick="show">
            <TextField label="availablity" source="availablity" />
            <ReferenceField
              label="commonFacility"
              source="commonfacility.id"
              reference="CommonFacility"
            >
              <TextField source={COMMONFACILITY_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="notes" source="notes" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField label="user" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
