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
import { CondoUnitWhereUniqueInput } from "../../condoUnit/base/CondoUnitWhereUniqueInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { PropertyWhereUniqueInput } from "../../property/base/PropertyWhereUniqueInput";

@InputType()
class ParkingSpotCreateInput {
  @ApiProperty({
    required: false,
    type: () => CondoUnitWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => CondoUnitWhereUniqueInput)
  @IsOptional()
  @Field(() => CondoUnitWhereUniqueInput, {
    nullable: true,
  })
  condoUnit?: CondoUnitWhereUniqueInput | null;

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
}

export { ParkingSpotCreateInput as ParkingSpotCreateInput };
