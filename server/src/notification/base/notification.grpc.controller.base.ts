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
import { NotificationService } from "../notification.service";
import { NotificationCreateInput } from "./NotificationCreateInput";
import { NotificationWhereInput } from "./NotificationWhereInput";
import { NotificationWhereUniqueInput } from "./NotificationWhereUniqueInput";
import { NotificationFindManyArgs } from "./NotificationFindManyArgs";
import { NotificationUpdateInput } from "./NotificationUpdateInput";
import { Notification } from "./Notification";
import { Post } from "../../post/base/Post";
import { Request } from "../../request/base/Request";

export class NotificationGrpcControllerBase {
  constructor(protected readonly service: NotificationService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Notification })
  @GrpcMethod("NotificationService", "createNotification")
  async createNotification(
    @common.Body() data: NotificationCreateInput
  ): Promise<Notification> {
    return await this.service.createNotification({
      data: {
        ...data,

        request: data.request
          ? {
              connect: data.request,
            }
          : undefined,

        user: data.user
          ? {
              connect: data.user,
            }
          : undefined,
      },
      select: {
        createdAt: true,
        id: true,
        message: true,

        request: {
          select: {
            id: true,
          },
        },

        title: true,
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
  @swagger.ApiOkResponse({ type: [Notification] })
  @ApiNestedQuery(NotificationFindManyArgs)
  @GrpcMethod("NotificationService", "notifications")
  async notifications(@common.Req() request: Request): Promise<Notification[]> {
    const args = plainToClass(NotificationFindManyArgs, request.query);
    return this.service.notifications({
      ...args,
      select: {
        createdAt: true,
        id: true,
        message: true,

        request: {
          select: {
            id: true,
          },
        },

        title: true,
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
  @swagger.ApiOkResponse({ type: Notification })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("NotificationService", "notification")
  async notification(
    @common.Param() params: NotificationWhereUniqueInput
  ): Promise<Notification | null> {
    const result = await this.service.notification({
      where: params,
      select: {
        createdAt: true,
        id: true,
        message: true,

        request: {
          select: {
            id: true,
          },
        },

        title: true,
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
  @swagger.ApiOkResponse({ type: Notification })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("NotificationService", "updateNotification")
  async updateNotification(
    @common.Param() params: NotificationWhereUniqueInput,
    @common.Body() data: NotificationUpdateInput
  ): Promise<Notification | null> {
    try {
      return await this.service.updateNotification({
        where: params,
        data: {
          ...data,

          request: data.request
            ? {
                connect: data.request,
              }
            : undefined,

          user: data.user
            ? {
                connect: data.user,
              }
            : undefined,
        },
        select: {
          createdAt: true,
          id: true,
          message: true,

          request: {
            select: {
              id: true,
            },
          },

          title: true,
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
  @swagger.ApiOkResponse({ type: Notification })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("NotificationService", "deleteNotification")
  async deleteNotification(
    @common.Param() params: NotificationWhereUniqueInput
  ): Promise<Notification | null> {
    try {
      return await this.service.deleteNotification({
        where: params,
        select: {
          createdAt: true,
          id: true,
          message: true,

          request: {
            select: {
              id: true,
            },
          },

          title: true,
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
