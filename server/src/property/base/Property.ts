/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsString,
  ValidateNested,
  IsOptional,
  IsDate,
  IsInt,
} from "class-validator";
import { Company } from "../../company/base/Company";
import { Type } from "class-transformer";
import { CondoUnit } from "../../condoUnit/base/CondoUnit";
import { File } from "../../file/base/File";
import { Locker } from "../../locker/base/Locker";
import { ParkingSpot } from "../../parkingSpot/base/ParkingSpot";

@ObjectType()
class Property {
  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  address!: string;

  @ApiProperty({
    required: false,
    type: () => Company,
  })
  @ValidateNested()
  @Type(() => Company)
  @IsOptional()
  company?: Company | null;

  @ApiProperty({
    required: false,
    type: () => [CondoUnit],
  })
  @ValidateNested()
  @Type(() => CondoUnit)
  @IsOptional()
  condoUnits?: Array<CondoUnit>;

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
  files?: Array<File>;

  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsInt()
  @Field(() => Number)
  id!: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  lockerCount!: number | null;

  @ApiProperty({
    required: false,
    type: () => [Locker],
  })
  @ValidateNested()
  @Type(() => Locker)
  @IsOptional()
  Lockers?: Array<Locker>;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  name!: string;

  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsInt()
  @Field(() => Number)
  parkingCount!: number;

  @ApiProperty({
    required: false,
    type: () => [ParkingSpot],
  })
  @ValidateNested()
  @Type(() => ParkingSpot)
  @IsOptional()
  ParkingSpots?: Array<ParkingSpot>;

  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsInt()
  @Field(() => Number)
  unitCount!: number;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;
}

export { Property as Property };
