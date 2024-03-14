/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ReservationListRelationFilter } from "../../reservation/base/ReservationListRelationFilter";
import { ValidateNested, IsOptional, IsEnum } from "class-validator";
import { Type } from "class-transformer";
import { EnumCommonFacilityFacilityType } from "./EnumCommonFacilityFacilityType";
import { StringFilter } from "../../util/StringFilter";

@InputType()
class CommonFacilityWhereInput {
  @ApiProperty({
    required: false,
    type: () => ReservationListRelationFilter,
  })
  @ValidateNested()
  @Type(() => ReservationListRelationFilter)
  @IsOptional()
  @Field(() => ReservationListRelationFilter, {
    nullable: true,
  })
  availabilities?: ReservationListRelationFilter;

  @ApiProperty({
    required: false,
    enum: EnumCommonFacilityFacilityType,
  })
  @IsEnum(EnumCommonFacilityFacilityType)
  @IsOptional()
  @Field(() => EnumCommonFacilityFacilityType, {
    nullable: true,
  })
  facilityType?: "SkyLounge" | "SpaFitness";

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;
}

export { CommonFacilityWhereInput as CommonFacilityWhereInput };
