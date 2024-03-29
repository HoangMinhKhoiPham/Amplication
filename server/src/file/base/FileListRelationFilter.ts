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
import { FileWhereInput } from "./FileWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class FileListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => FileWhereInput,
  })
  @ValidateNested()
  @Type(() => FileWhereInput)
  @IsOptional()
  @Field(() => FileWhereInput, {
    nullable: true,
  })
  every?: FileWhereInput;

  @ApiProperty({
    required: false,
    type: () => FileWhereInput,
  })
  @ValidateNested()
  @Type(() => FileWhereInput)
  @IsOptional()
  @Field(() => FileWhereInput, {
    nullable: true,
  })
  some?: FileWhereInput;

  @ApiProperty({
    required: false,
    type: () => FileWhereInput,
  })
  @ValidateNested()
  @Type(() => FileWhereInput)
  @IsOptional()
  @Field(() => FileWhereInput, {
    nullable: true,
  })
  none?: FileWhereInput;
}
export { FileListRelationFilter as FileListRelationFilter };
