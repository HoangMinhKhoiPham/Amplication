import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
  ReferenceInput,
  SelectInput,
  NumberInput,
} from "react-admin";

import { CommonFacilityTitle } from "../commonFacility/CommonFacilityTitle";
import { CompanyTitle } from "../company/CompanyTitle";
import { CondoUnitTitle } from "../condoUnit/CondoUnitTitle";
import { FileTitle } from "../file/FileTitle";
import { LockerTitle } from "../locker/LockerTitle";
import { ParkingSpotTitle } from "../parkingSpot/ParkingSpotTitle";
import { RequestTitle } from "../request/RequestTitle";

export const PropertyCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="address" source="address" />
        <ReferenceArrayInput
          source="commonFacilities"
          reference="CommonFacility"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={CommonFacilityTitle} />
        </ReferenceArrayInput>
        <ReferenceInput source="company.id" reference="Company" label="Company">
          <SelectInput optionText={CompanyTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="condoUnits"
          reference="CondoUnit"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={CondoUnitTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="files"
          reference="File"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={FileTitle} />
        </ReferenceArrayInput>
        <NumberInput step={1} label="lockerCount" source="lockerCount" />
        <ReferenceArrayInput
          source="Lockers"
          reference="Locker"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={LockerTitle} />
        </ReferenceArrayInput>
        <TextInput label="name" source="name" />
        <NumberInput step={1} label="parkingCount" source="parkingCount" />
        <ReferenceArrayInput
          source="ParkingSpots"
          reference="ParkingSpot"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ParkingSpotTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="requests"
          reference="Request"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={RequestTitle} />
        </ReferenceArrayInput>
        <NumberInput step={1} label="unitCount" source="unitCount" />
      </SimpleForm>
    </Create>
  );
};
