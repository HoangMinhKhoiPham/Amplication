import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  ReferenceField,
  DateField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { COMMONFACILITY_TITLE_FIELD } from "../commonFacility/CommonFacilityTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const ReservationList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Reservations"}
      perPage={50}
      pagination={<Pagination />}
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
    </List>
  );
};
