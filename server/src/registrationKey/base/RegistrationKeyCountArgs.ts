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
import { RegistrationKeyWhereInput } from "./RegistrationKeyWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class RegistrationKeyCountArgs {
  @ApiProperty({
    required: false,
    type: () => RegistrationKeyWhereInput,
  })
  @Field(() => RegistrationKeyWhereInput, { nullable: true })
  @Type(() => RegistrationKeyWhereInput)
  where?: RegistrationKeyWhereInput;
}

export { RegistrationKeyCountArgs as RegistrationKeyCountArgs };