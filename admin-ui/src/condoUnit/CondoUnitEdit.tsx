import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  ReferenceArrayInput,
  SelectArrayInput,
  BooleanInput,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";

import { FileTitle } from "../file/FileTitle";
import { LockerTitle } from "../locker/LockerTitle";
import { ParkingSpotTitle } from "../parkingSpot/ParkingSpotTitle";
import { PropertyTitle } from "../property/PropertyTitle";
import { RegistrationKeyTitle } from "../registrationKey/RegistrationKeyTitle";
import { RequestTitle } from "../request/RequestTitle";
import { UserCondoTitle } from "../userCondo/UserCondoTitle";

export const CondoUnitEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput label="condoFee" source="condoFee" />
        <ReferenceArrayInput
          source="file"
          reference="File"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={FileTitle} />
        </ReferenceArrayInput>
        <BooleanInput label="isPaid" source="isPaid" />
        <ReferenceInput source="locker.id" reference="Locker" label="locker">
          <SelectInput optionText={LockerTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="parkingSpot"
          reference="ParkingSpot"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ParkingSpotTitle} />
        </ReferenceArrayInput>
        <ReferenceInput
          source="propertyID.id"
          reference="Property"
          label="propertyID"
        >
          <SelectInput optionText={PropertyTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="registrationKeys.id"
          reference="RegistrationKey"
          label="RegistrationKeys"
        >
          <SelectInput optionText={RegistrationKeyTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="requests"
          reference="Request"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={RequestTitle} />
        </ReferenceArrayInput>
        <TextInput label="size" source="size" />
        <TextInput label="test" source="test" />
        <TextInput label="unitNumber" source="unitNumber" />
        <ReferenceArrayInput
          source="userCondos"
          reference="UserCondo"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={UserCondoTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
