import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
} from "react-admin";

import { CompanyEmployeeTitle } from "../companyEmployee/CompanyEmployeeTitle";
import { CostTitle } from "../cost/CostTitle";
import { FileTitle } from "../file/FileTitle";
import { ForumTitle } from "../forum/ForumTitle";
import { PropertyTitle } from "../property/PropertyTitle";
import { RequestTitle } from "../request/RequestTitle";

export const CompanyEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="companyEmployees"
          reference="CompanyEmployee"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={CompanyEmployeeTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="costs"
          reference="Cost"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={CostTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="file"
          reference="File"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={FileTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="forums"
          reference="Forum"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ForumTitle} />
        </ReferenceArrayInput>
        <TextInput label="name" source="name" />
        <ReferenceArrayInput
          source="properties"
          reference="Property"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={PropertyTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="requests"
          reference="Request"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={RequestTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
