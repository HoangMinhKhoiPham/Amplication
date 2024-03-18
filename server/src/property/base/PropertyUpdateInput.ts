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
import { IsString, IsOptional, ValidateNested, IsInt } from "class-validator";
import { CompanyWhereUniqueInput } from "../../company/base/CompanyWhereUniqueInput";
import { Type } from "class-transformer";
import { CondoUnitUpdateManyWithoutPropertiesInput } from "./CondoUnitUpdateManyWithoutPropertiesInput";
import { FileUpdateManyWithoutPropertiesInput } from "./FileUpdateManyWithoutPropertiesInput";
import { LockerUpdateManyWithoutPropertiesInput } from "./LockerUpdateManyWithoutPropertiesInput";
import { ParkingSpotUpdateManyWithoutPropertiesInput } from "./ParkingSpotUpdateManyWithoutPropertiesInput";
import { RequestUpdateManyWithoutPropertiesInput } from "./RequestUpdateManyWithoutPropertiesInput";

@InputType()
class PropertyUpdateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  address?: string;

  @ApiProperty({
    required: false,
    type: () => CompanyWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => CompanyWhereUniqueInput)
  @IsOptional()
  @Field(() => CompanyWhereUniqueInput, {
    nullable: true,
  })
  company?: CompanyWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => CondoUnitUpdateManyWithoutPropertiesInput,
  })
  @ValidateNested()
  @Type(() => CondoUnitUpdateManyWithoutPropertiesInput)
  @IsOptional()
  @Field(() => CondoUnitUpdateManyWithoutPropertiesInput, {
    nullable: true,
  })
  condoUnits?: CondoUnitUpdateManyWithoutPropertiesInput;

  @ApiProperty({
    required: false,
    type: () => FileUpdateManyWithoutPropertiesInput,
  })
  @ValidateNested()
  @Type(() => FileUpdateManyWithoutPropertiesInput)
  @IsOptional()
  @Field(() => FileUpdateManyWithoutPropertiesInput, {
    nullable: true,
  })
  files?: FileUpdateManyWithoutPropertiesInput;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  lockerCount?: number | null;

  @ApiProperty({
    required: false,
    type: () => LockerUpdateManyWithoutPropertiesInput,
  })
  @ValidateNested()
  @Type(() => LockerUpdateManyWithoutPropertiesInput)
  @IsOptional()
  @Field(() => LockerUpdateManyWithoutPropertiesInput, {
    nullable: true,
  })
  Lockers?: LockerUpdateManyWithoutPropertiesInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  parkingCount?: number;

  @ApiProperty({
    required: false,
    type: () => ParkingSpotUpdateManyWithoutPropertiesInput,
  })
  @ValidateNested()
  @Type(() => ParkingSpotUpdateManyWithoutPropertiesInput)
  @IsOptional()
  @Field(() => ParkingSpotUpdateManyWithoutPropertiesInput, {
    nullable: true,
  })
  ParkingSpots?: ParkingSpotUpdateManyWithoutPropertiesInput;

  @ApiProperty({
    required: false,
    type: () => RequestUpdateManyWithoutPropertiesInput,
  })
  @ValidateNested()
  @Type(() => RequestUpdateManyWithoutPropertiesInput)
  @IsOptional()
  @Field(() => RequestUpdateManyWithoutPropertiesInput, {
    nullable: true,
  })
  requests?: RequestUpdateManyWithoutPropertiesInput;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  unitCount?: number;
}

export { PropertyUpdateInput as PropertyUpdateInput };
