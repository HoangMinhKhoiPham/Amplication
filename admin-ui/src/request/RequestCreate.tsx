import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { CompanyTitle } from "../company/CompanyTitle";
import { UserTitle } from "../user/UserTitle";

export const RequestCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="company.id" reference="Company" label="company">
          <SelectInput optionText={CompanyTitle} />
        </ReferenceInput>
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
    </Create>
  );
};
