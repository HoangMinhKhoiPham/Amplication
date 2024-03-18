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

import { COMPANY_TITLE_FIELD } from "../company/CompanyTitle";
import { USER_TITLE_FIELD } from "./UserTitle";
import { CONDOUNIT_TITLE_FIELD } from "../condoUnit/CondoUnitTitle";
import { PROPERTY_TITLE_FIELD } from "../property/PropertyTitle";
import { FORUM_TITLE_FIELD } from "../forum/ForumTitle";
import { COMPANYEMPLOYEE_TITLE_FIELD } from "../companyEmployee/CompanyEmployeeTitle";
import { COMMONFACILITY_TITLE_FIELD } from "../commonFacility/CommonFacilityTitle";

export const UserShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="email" source="email" />
        <TextField label="firstName" source="firstName" />
        <TextField label="ID" source="id" />
        <TextField label="lastName" source="lastName" />
        <TextField label="phoneNumber" source="phoneNumber" />
        <TextField label="Roles" source="roles" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Username" source="username" />
        <ReferenceManyField
          reference="CompanyEmployee"
          target="userID"
          label="CompanyEmployees"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="company"
              source="company.id"
              reference="Company"
            >
              <TextField source={COMPANY_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <ReferenceField label="user" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField reference="File" target="userID" label="Files">
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
        <ReferenceManyField reference="Post" target="userID" label="Posts">
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <ReferenceField label="forum" source="forum.id" reference="Forum">
              <TextField source={FORUM_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField label="user" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Request"
          target="userID"
          label="Requests"
        >
          <Datagrid rowClick="show">
            <TextField label="comment" source="comment" />
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
          reference="Reservation"
          target="userID"
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
            <ReferenceField label="user" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="UserCondo"
          target="userID"
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
