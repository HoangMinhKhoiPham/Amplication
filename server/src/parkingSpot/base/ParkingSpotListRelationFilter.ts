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
import { ParkingSpotWhereInput } from "./ParkingSpotWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class ParkingSpotListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => ParkingSpotWhereInput,
  })
  @ValidateNested()
  @Type(() => ParkingSpotWhereInput)
  @IsOptional()
  @Field(() => ParkingSpotWhereInput, {
    nullable: true,
  })
  every?: ParkingSpotWhereInput;

  @ApiProperty({
    required: false,
    type: () => ParkingSpotWhereInput,
  })
  @ValidateNested()
  @Type(() => ParkingSpotWhereInput)
  @IsOptional()
  @Field(() => ParkingSpotWhereInput, {
    nullable: true,
  })
  some?: ParkingSpotWhereInput;

  @ApiProperty({
    required: false,
    type: () => ParkingSpotWhereInput,
  })
  @ValidateNested()
  @Type(() => ParkingSpotWhereInput)
  @IsOptional()
  @Field(() => ParkingSpotWhereInput, {
    nullable: true,
  })
  none?: ParkingSpotWhereInput;
}
export { ParkingSpotListRelationFilter as ParkingSpotListRelationFilter };