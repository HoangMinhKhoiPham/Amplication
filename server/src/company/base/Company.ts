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
import { CompanyEmployee } from "../../companyEmployee/base/CompanyEmployee";
import {
  ValidateNested,
  IsOptional,
  IsDate,
  IsInt,
  IsString,
} from "class-validator";
import { Type } from "class-transformer";
import { File } from "../../file/base/File";
import { Property } from "../../property/base/Property";

@ObjectType()
class Company {
  @ApiProperty({
    required: false,
    type: () => [CompanyEmployee],
  })
  @ValidateNested()
  @Type(() => CompanyEmployee)
  @IsOptional()
  companyEmployees?: Array<CompanyEmployee>;

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
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  name!: string;

  @ApiProperty({
    required: false,
    type: () => [Property],
  })
  @ValidateNested()
  @Type(() => Property)
  @IsOptional()
  properties?: Array<Property>;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  updatedAt!: Date | null;
}

export { Company as Company };
