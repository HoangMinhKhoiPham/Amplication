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
import { CompanyEmployeeUpdateManyWithoutCompaniesInput } from "./CompanyEmployeeUpdateManyWithoutCompaniesInput";
import { ValidateNested, IsOptional, IsString } from "class-validator";
import { Type } from "class-transformer";
import { FileUpdateManyWithoutCompaniesInput } from "./FileUpdateManyWithoutCompaniesInput";

@InputType()
class CompanyUpdateInput {
  @ApiProperty({
    required: false,
    type: () => CompanyEmployeeUpdateManyWithoutCompaniesInput,
  })
  @ValidateNested()
  @Type(() => CompanyEmployeeUpdateManyWithoutCompaniesInput)
  @IsOptional()
  @Field(() => CompanyEmployeeUpdateManyWithoutCompaniesInput, {
    nullable: true,
  })
  companyEmployees?: CompanyEmployeeUpdateManyWithoutCompaniesInput;

  @ApiProperty({
    required: false,
    type: () => FileUpdateManyWithoutCompaniesInput,
  })
  @ValidateNested()
  @Type(() => FileUpdateManyWithoutCompaniesInput)
  @IsOptional()
  @Field(() => FileUpdateManyWithoutCompaniesInput, {
    nullable: true,
  })
  files?: FileUpdateManyWithoutCompaniesInput;

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
}

export { CompanyUpdateInput as CompanyUpdateInput };
