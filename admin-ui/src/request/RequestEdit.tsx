import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { CompanyTitle } from "../company/CompanyTitle";
import { CondoUnitTitle } from "../condoUnit/CondoUnitTitle";
import { CompanyEmployeeTitle } from "../companyEmployee/CompanyEmployeeTitle";
import { NotificationTitle } from "../notification/NotificationTitle";
import { PropertyTitle } from "../property/PropertyTitle";
import { UserTitle } from "../user/UserTitle";

export const RequestEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="company.id" reference="Company" label="company">
          <SelectInput optionText={CompanyTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="condoUnit.id"
          reference="CondoUnit"
          label="condoUnit"
        >
          <SelectInput optionText={CondoUnitTitle} />
        </ReferenceInput>
        <TextInput label="elevator" source="elevator" />
        <ReferenceInput
          source="employee.id"
          reference="CompanyEmployee"
          label="employee"
        >
          <SelectInput optionText={CompanyEmployeeTitle} />
        </ReferenceInput>
        <TextInput label="key" source="key" />
        <ReferenceArrayInput
          source="notifications"
          reference="Notification"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={NotificationTitle} />
        </ReferenceArrayInput>
        <ReferenceInput
          source="property.id"
          reference="Property"
          label="property"
        >
          <SelectInput optionText={PropertyTitle} />
        </ReferenceInput>
        <TextInput label="question" source="question" />
        <TextInput label="reportMessage" multiline source="reportMessage" />
        <SelectInput
          source="requestType"
          label="requestType"
          choices={[
            { label: "Type_1", value: "moving_in" },
            { label: "Type_2", value: "moving_out" },
            { label: "Type_3", value: "intercom_change" },
            { label: "Type_4", value: "access_request" },
            { label: "Type_5", value: "violation_report" },
            { label: "Type_6", value: "deficiency_report" },
            { label: "Type_7", value: "question" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <TextInput label="response" source="response" />
        <SelectInput
          source="status"
          label="status"
          choices={[
            { label: "Option 1", value: "New" },
            { label: "Option 2", value: "In_Progress" },
            { label: "Option 3", value: "Pending_Approval" },
            { label: "Option 4", value: "Approved" },
            { label: "Option 5", value: "Disapproved" },
            { label: "Option 6 ", value: "Complete" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <ReferenceInput source="user.id" reference="User" label="user">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
