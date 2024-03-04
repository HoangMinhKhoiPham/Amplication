import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  ReferenceField,
  DateField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { LOCKER_TITLE_FIELD } from "../locker/LockerTitle";
import { PROPERTY_TITLE_FIELD } from "./PropertyTitle";
import { REGISTRATIONKEY_TITLE_FIELD } from "../registrationKey/RegistrationKeyTitle";
import { COMPANY_TITLE_FIELD } from "../company/CompanyTitle";
import { CONDOUNIT_TITLE_FIELD } from "../condoUnit/CondoUnitTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const PropertyShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="address" source="address" />
        <ReferenceField label="Company" source="company.id" reference="Company">
          <TextField source={COMPANY_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="lockerCount" source="lockerCount" />
        <TextField label="name" source="name" />
        <TextField label="parkingCount" source="parkingCount" />
        <TextField label="unitCount" source="unitCount" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="CondoUnit"
          target="propertyIDId"
          label="CondoUnits"
        >
          <Datagrid rowClick="show">
            <TextField label="condoFee" source="condoFee" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="locker"
              source="locker.id"
              reference="Locker"
            >
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
        </ReferenceManyField>
        <ReferenceManyField reference="File" target="propertyID" label="Files">
          <Datagrid rowClick="show">
            <TextField label="bucket" source="bucket" />
            <ReferenceField
              label="company"
              source="company.id"
              reference="Company"
            >
              <TextField source={COMPANY_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="condoUnit"
              source="condounit.id"
              reference="CondoUnit"
            >
              <TextField source={CONDOUNIT_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="name" source="name" />
            <ReferenceField
              label="property"
              source="property.id"
              reference="Property"
            >
              <TextField source={PROPERTY_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField label="user" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Locker"
          target="propertyID"
          label="Lockers"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="CondoUnits"
              source="condounit.id"
              reference="CondoUnit"
            >
              <TextField source={CONDOUNIT_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="property"
              source="property.id"
              reference="Property"
            >
              <TextField source={PROPERTY_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="ParkingSpot"
          target="propertyID"
          label="ParkingSpots"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="CondoUnit"
              source="condounit.id"
              reference="CondoUnit"
            >
              <TextField source={CONDOUNIT_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="property"
              source="property.id"
              reference="Property"
            >
              <TextField source={PROPERTY_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
