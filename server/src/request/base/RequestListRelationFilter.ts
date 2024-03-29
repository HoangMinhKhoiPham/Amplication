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
import { RequestWhereInput } from "./RequestWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class RequestListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => RequestWhereInput,
  })
  @ValidateNested()
  @Type(() => RequestWhereInput)
  @IsOptional()
  @Field(() => RequestWhereInput, {
    nullable: true,
  })
  every?: RequestWhereInput;

  @ApiProperty({
    required: false,
    type: () => RequestWhereInput,
  })
  @ValidateNested()
  @Type(() => RequestWhereInput)
  @IsOptional()
  @Field(() => RequestWhereInput, {
    nullable: true,
  })
  some?: RequestWhereInput;

  @ApiProperty({
    required: false,
    type: () => RequestWhereInput,
  })
  @ValidateNested()
  @Type(() => RequestWhereInput)
  @IsOptional()
  @Field(() => RequestWhereInput, {
    nullable: true,
  })
  none?: RequestWhereInput;
}
export { RequestListRelationFilter as RequestListRelationFilter };
