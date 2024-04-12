import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  BooleanField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { COMPANY_TITLE_FIELD } from "../company/CompanyTitle";
import { CONDOUNIT_TITLE_FIELD } from "./CondoUnitTitle";
import { PROPERTY_TITLE_FIELD } from "../property/PropertyTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";
import { COMPANYEMPLOYEE_TITLE_FIELD } from "../companyEmployee/CompanyEmployeeTitle";
import { LOCKER_TITLE_FIELD } from "../locker/LockerTitle";
import { REGISTRATIONKEY_TITLE_FIELD } from "../registrationKey/RegistrationKeyTitle";

export const CondoUnitShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
        <ReferenceManyField reference="File" target="condoUnitID" label="Files">
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
          reference="ParkingSpot"
          target="condoUnitId"
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
        <ReferenceManyField
          reference="Request"
          target="condoUnitID"
          label="Requests"
        >
          <Datagrid rowClick="show">
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
            <TextField label="elevator" source="elevator" />
            <ReferenceField
              label="employee"
              source="companyemployee.id"
              reference="CompanyEmployee"
            >
              <TextField source={COMPANYEMPLOYEE_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <TextField label="key" source="key" />
            <ReferenceField
              label="property"
              source="property.id"
              reference="Property"
            >
              <TextField source={PROPERTY_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="question" source="question" />
            <TextField label="reportMessage" source="reportMessage" />
            <TextField label="requestType" source="requestType" />
            <TextField label="response" source="response" />
            <TextField label="status" source="status" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField label="user" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="UserCondo"
          target="condoID"
          label="UserCondos"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="condo"
              source="condounit.id"
              reference="CondoUnit"
            >
              <TextField source={CONDOUNIT_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
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
