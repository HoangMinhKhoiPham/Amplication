/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ForumWhereUniqueInput } from "../../forum/base/ForumWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class ForumUpdateManyWithoutCompaniesInput {
  @Field(() => [ForumWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ForumWhereUniqueInput],
  })
  connect?: Array<ForumWhereUniqueInput>;

  @Field(() => [ForumWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ForumWhereUniqueInput],
  })
  disconnect?: Array<ForumWhereUniqueInput>;

  @Field(() => [ForumWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ForumWhereUniqueInput],
  })
  set?: Array<ForumWhereUniqueInput>;
}

export { ForumUpdateManyWithoutCompaniesInput as ForumUpdateManyWithoutCompaniesInput };
