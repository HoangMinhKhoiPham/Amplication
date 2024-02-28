/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ObjectType, Field, Float } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsNumber,
  IsOptional,
  IsDate,
  ValidateNested,
  IsInt,
  IsString,
} from "class-validator";
import { Decimal } from "decimal.js";
import { Type } from "class-transformer";
import { File } from "../../file/base/File";
import { Locker } from "../../locker/base/Locker";
import { ParkingSpot } from "../../parkingSpot/base/ParkingSpot";
import { Property } from "../../property/base/Property";
import { RegistrationKey } from "../../registrationKey/base/RegistrationKey";
import { UserCondo } from "../../userCondo/base/UserCondo";

@ObjectType()
class CondoUnit {
  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @IsOptional()
  @Field(() => Float, {
    nullable: true,
  })
  condoFee!: Decimal | null;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: false,
    type: () => [File],
  })
  @ValidateNested()
  @Type(() => File)
  @IsOptional()
  file?: Array<File>;

  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsInt()
  @Field(() => Number)
  id!: number;

  @ApiProperty({
    required: false,
    type: () => Locker,
  })
  @ValidateNested()
  @Type(() => Locker)
  @IsOptional()
  locker?: Locker | null;

  @ApiProperty({
    required: false,
    type: () => [ParkingSpot],
  })
  @ValidateNested()
  @Type(() => ParkingSpot)
  @IsOptional()
  parkingSpot?: Array<ParkingSpot>;

  @ApiProperty({
    required: false,
    type: () => Property,
  })
  @ValidateNested()
  @Type(() => Property)
  @IsOptional()
  propertyID?: Property | null;

  @ApiProperty({
    required: false,
    type: () => RegistrationKey,
  })
  @ValidateNested()
  @Type(() => RegistrationKey)
  @IsOptional()
  registrationKeys?: RegistrationKey | null;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  size!: string;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  unitNumber!: string | null;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;

  @ApiProperty({
    required: false,
    type: () => [UserCondo],
  })
  @ValidateNested()
  @Type(() => UserCondo)
  @IsOptional()
  userCondos?: Array<UserCondo>;
}

export { CondoUnit as CondoUnit };
