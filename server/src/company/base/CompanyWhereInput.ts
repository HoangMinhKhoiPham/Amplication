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
import { CompanyEmployeeListRelationFilter } from "../../companyEmployee/base/CompanyEmployeeListRelationFilter";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { FileListRelationFilter } from "../../file/base/FileListRelationFilter";
import { IntFilter } from "../../util/IntFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

@InputType()
class CompanyWhereInput {
  @ApiProperty({
    required: false,
    type: () => CompanyEmployeeListRelationFilter,
  })
  @ValidateNested()
  @Type(() => CompanyEmployeeListRelationFilter)
  @IsOptional()
  @Field(() => CompanyEmployeeListRelationFilter, {
    nullable: true,
  })
  companyEmployees?: CompanyEmployeeListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => FileListRelationFilter,
  })
  @ValidateNested()
  @Type(() => FileListRelationFilter)
  @IsOptional()
  @Field(() => FileListRelationFilter, {
    nullable: true,
  })
  files?: FileListRelationFilter;

  @ApiProperty({
    required: false,
    type: IntFilter,
  })
  @Type(() => IntFilter)
  @IsOptional()
  @Field(() => IntFilter, {
    nullable: true,
  })
  id?: IntFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  name?: StringFilter;

  @ApiProperty({
    required: false,
    type: DateTimeNullableFilter,
  })
  @Type(() => DateTimeNullableFilter)
  @IsOptional()
  @Field(() => DateTimeNullableFilter, {
    nullable: true,
  })
  updatedAt?: DateTimeNullableFilter;
}

export { CompanyWhereInput as CompanyWhereInput };
