import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { ForumTitle } from "../forum/ForumTitle";
import { UserTitle } from "../user/UserTitle";

export const PostEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="forumId.id" reference="Forum" label="forumID">
          <SelectInput optionText={ForumTitle} />
        </ReferenceInput>
        <ReferenceInput source="userID.id" reference="User" label="userID">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
