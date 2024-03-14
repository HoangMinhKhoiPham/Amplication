import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { ForumTitle } from "../forum/ForumTitle";
import { UserTitle } from "../user/UserTitle";

export const PostCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="forumId.id" reference="Forum" label="forumID">
          <SelectInput optionText={ForumTitle} />
        </ReferenceInput>
        <ReferenceInput source="userID.id" reference="User" label="userID">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
