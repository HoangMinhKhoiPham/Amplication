/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { GrpcMethod } from "@nestjs/microservices";
import { UserCondoService } from "../userCondo.service";
import { UserCondoCreateInput } from "./UserCondoCreateInput";
import { UserCondoWhereInput } from "./UserCondoWhereInput";
import { UserCondoWhereUniqueInput } from "./UserCondoWhereUniqueInput";
import { UserCondoFindManyArgs } from "./UserCondoFindManyArgs";
import { UserCondoUpdateInput } from "./UserCondoUpdateInput";
import { UserCondo } from "./UserCondo";
import { Post } from "../../post/base/Post";
import { Request } from "../../request/base/Request";

export class UserCondoGrpcControllerBase {
  constructor(protected readonly service: UserCondoService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: UserCondo })
  @GrpcMethod("UserCondoService", "createUserCondo")
  async createUserCondo(
    @common.Body() data: UserCondoCreateInput
  ): Promise<UserCondo> {
    return await this.service.createUserCondo({
      data: {
        ...data,

        condo: data.condo
          ? {
              connect: data.condo,
            }
          : undefined,

        user: data.user
          ? {
              connect: data.user,
            }
          : undefined,
      },
      select: {
        condo: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        id: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [UserCondo] })
  @ApiNestedQuery(UserCondoFindManyArgs)
  @GrpcMethod("UserCondoService", "userCondos")
  async userCondos(@common.Req() request: Request): Promise<UserCondo[]> {
    const args = plainToClass(UserCondoFindManyArgs, request.query);
    return this.service.userCondos({
      ...args,
      select: {
        condo: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        id: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: UserCondo })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("UserCondoService", "userCondo")
  async userCondo(
    @common.Param() params: UserCondoWhereUniqueInput
  ): Promise<UserCondo | null> {
    const result = await this.service.userCondo({
      where: params,
      select: {
        condo: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        id: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: UserCondo })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("UserCondoService", "updateUserCondo")
  async updateUserCondo(
    @common.Param() params: UserCondoWhereUniqueInput,
    @common.Body() data: UserCondoUpdateInput
  ): Promise<UserCondo | null> {
    try {
      return await this.service.updateUserCondo({
        where: params,
        data: {
          ...data,

          condo: data.condo
            ? {
                connect: data.condo,
              }
            : undefined,

          user: data.user
            ? {
                connect: data.user,
              }
            : undefined,
        },
        select: {
          condo: {
            select: {
              id: true,
            },
          },

          createdAt: true,
          id: true,
          updatedAt: true,

          user: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: UserCondo })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("UserCondoService", "deleteUserCondo")
  async deleteUserCondo(
    @common.Param() params: UserCondoWhereUniqueInput
  ): Promise<UserCondo | null> {
    try {
      return await this.service.deleteUserCondo({
        where: params,
        select: {
          condo: {
            select: {
              id: true,
            },
          },

          createdAt: true,
          id: true,
          updatedAt: true,

          user: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
