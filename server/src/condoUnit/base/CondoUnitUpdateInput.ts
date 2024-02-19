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
import { IsString, IsOptional, ValidateNested } from "class-validator";
import { LockerWhereUniqueInput } from "../../locker/base/LockerWhereUniqueInput";
import { Type } from "class-transformer";
import { ParkingSpotUpdateManyWithoutCondoUnitsInput } from "./ParkingSpotUpdateManyWithoutCondoUnitsInput";
import { PropertyWhereUniqueInput } from "../../property/base/PropertyWhereUniqueInput";

@InputType()
class CondoUnitUpdateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  condoFee?: string | null;

  @ApiProperty({
    required: false,
    type: () => LockerWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => LockerWhereUniqueInput)
  @IsOptional()
  @Field(() => LockerWhereUniqueInput, {
    nullable: true,
  })
  lockerId?: LockerWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => ParkingSpotUpdateManyWithoutCondoUnitsInput,
  })
  @ValidateNested()
  @Type(() => ParkingSpotUpdateManyWithoutCondoUnitsInput)
  @IsOptional()
  @Field(() => ParkingSpotUpdateManyWithoutCondoUnitsInput, {
    nullable: true,
  })
  parkingSpotId?: ParkingSpotUpdateManyWithoutCondoUnitsInput;

  @ApiProperty({
    required: false,
    type: () => PropertyWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => PropertyWhereUniqueInput)
  @IsOptional()
  @Field(() => PropertyWhereUniqueInput, {
    nullable: true,
  })
  propertyId?: PropertyWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  size?: string;
}

export { CondoUnitUpdateInput as CondoUnitUpdateInput };
