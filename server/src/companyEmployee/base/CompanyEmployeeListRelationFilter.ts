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
import { CompanyEmployeeWhereInput } from "./CompanyEmployeeWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class CompanyEmployeeListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => CompanyEmployeeWhereInput,
  })
  @ValidateNested()
  @Type(() => CompanyEmployeeWhereInput)
  @IsOptional()
  @Field(() => CompanyEmployeeWhereInput, {
    nullable: true,
  })
  every?: CompanyEmployeeWhereInput;

  @ApiProperty({
    required: false,
    type: () => CompanyEmployeeWhereInput,
  })
  @ValidateNested()
  @Type(() => CompanyEmployeeWhereInput)
  @IsOptional()
  @Field(() => CompanyEmployeeWhereInput, {
    nullable: true,
  })
  some?: CompanyEmployeeWhereInput;

  @ApiProperty({
    required: false,
    type: () => CompanyEmployeeWhereInput,
  })
  @ValidateNested()
  @Type(() => CompanyEmployeeWhereInput)
  @IsOptional()
  @Field(() => CompanyEmployeeWhereInput, {
    nullable: true,
  })
  none?: CompanyEmployeeWhereInput;
}
export { CompanyEmployeeListRelationFilter as CompanyEmployeeListRelationFilter };
