/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { CostWhereUniqueInput } from "../../cost/base/CostWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class CostUpdateManyWithoutCompaniesInput {
  @Field(() => [CostWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [CostWhereUniqueInput],
  })
  connect?: Array<CostWhereUniqueInput>;

  @Field(() => [CostWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [CostWhereUniqueInput],
  })
  disconnect?: Array<CostWhereUniqueInput>;

  @Field(() => [CostWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [CostWhereUniqueInput],
  })
  set?: Array<CostWhereUniqueInput>;
}

export { CostUpdateManyWithoutCompaniesInput as CostUpdateManyWithoutCompaniesInput };
