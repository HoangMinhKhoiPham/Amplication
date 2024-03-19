import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { REQUEST_TITLE_FIELD } from "./RequestTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";
import { COMPANY_TITLE_FIELD } from "../company/CompanyTitle";
import { CONDOUNIT_TITLE_FIELD } from "../condoUnit/CondoUnitTitle";
import { COMPANYEMPLOYEE_TITLE_FIELD } from "../companyEmployee/CompanyEmployeeTitle";
import { PROPERTY_TITLE_FIELD } from "../property/PropertyTitle";

export const RequestShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <ReferenceField label="company" source="company.id" reference="Company">
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
        <ReferenceManyField
          reference="Notification"
          target="requestID"
          label="Notifications"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="message" source="message" />
            <ReferenceField
              label="request"
              source="request.id"
              reference="Request"
            >
              <TextField source={REQUEST_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="title" source="title" />
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
