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
class CostCreateNestedManyWithoutCompaniesInput {
  @Field(() => [CostWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [CostWhereUniqueInput],
  })
  connect?: Array<CostWhereUniqueInput>;
}

export { CostCreateNestedManyWithoutCompaniesInput as CostCreateNestedManyWithoutCompaniesInput };