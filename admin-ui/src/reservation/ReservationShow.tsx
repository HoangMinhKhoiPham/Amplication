import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  ReferenceField,
  DateField,
} from "react-admin";
import { COMMONFACILITY_TITLE_FIELD } from "../commonFacility/CommonFacilityTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const ReservationShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
        <ReferenceField label="user" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
      </SimpleShowLayout>
    </Show>
  );
};
