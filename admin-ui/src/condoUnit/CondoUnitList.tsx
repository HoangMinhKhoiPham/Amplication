import * as React from "react";

import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  BooleanField,
  ReferenceField,
} from "react-admin";

import Pagination from "../Components/Pagination";
import { LOCKER_TITLE_FIELD } from "../locker/LockerTitle";
import { PROPERTY_TITLE_FIELD } from "../property/PropertyTitle";
import { REGISTRATIONKEY_TITLE_FIELD } from "../registrationKey/RegistrationKeyTitle";

export const CondoUnitList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"CondoUnits"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="condoFee" source="condoFee" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <BooleanField label="isPaid" source="isPaid" />
        <ReferenceField label="locker" source="locker.id" reference="Locker">
          <TextField source={LOCKER_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="propertyID"
          source="property.id"
          reference="Property"
        >
          <TextField source={PROPERTY_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="RegistrationKeys"
          source="registrationkey.id"
          reference="RegistrationKey"
        >
          <TextField source={REGISTRATIONKEY_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="size" source="size" />
        <TextField label="test" source="test" />
        <TextField label="unitNumber" source="unitNumber" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
