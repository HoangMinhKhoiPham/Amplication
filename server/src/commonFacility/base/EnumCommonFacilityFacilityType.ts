/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { registerEnumType } from "@nestjs/graphql";

export enum EnumCommonFacilityFacilityType {
  Type_1 = "sky_lounge",
  Type_2 = "spa_fitness",
  Type_3 = "sauna",
}

registerEnumType(EnumCommonFacilityFacilityType, {
  name: "EnumCommonFacilityFacilityType",
});
