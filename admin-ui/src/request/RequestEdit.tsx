import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { CompanyTitle } from "../company/CompanyTitle";
import { UserTitle } from "../user/UserTitle";

export const RequestEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
        <ReferenceInput source="user.id" reference="User" label="user">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
