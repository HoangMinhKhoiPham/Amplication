/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { LockerWhereInput } from "./LockerWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { LockerOrderByInput } from "./LockerOrderByInput";

@ArgsType()
class LockerFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => LockerWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => LockerWhereInput, { nullable: true })
  @Type(() => LockerWhereInput)
  where?: LockerWhereInput;

  @ApiProperty({
    required: false,
    type: [LockerOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [LockerOrderByInput], { nullable: true })
  @Type(() => LockerOrderByInput)
  orderBy?: Array<LockerOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { LockerFindManyArgs as LockerFindManyArgs };
