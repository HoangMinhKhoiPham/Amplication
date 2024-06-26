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
import { UserService } from "../user.service";
import { Public } from "../../decorators/public.decorator";
import { UserCreateInput } from "./UserCreateInput";
import { UserWhereInput } from "./UserWhereInput";
import { UserWhereUniqueInput } from "./UserWhereUniqueInput";
import { UserFindManyArgs } from "./UserFindManyArgs";
import { UserUpdateInput } from "./UserUpdateInput";
import { User } from "./User";
import { Post } from "../../post/base/Post";
import { Request } from "../../request/base/Request";
import { CompanyEmployeeFindManyArgs } from "../../companyEmployee/base/CompanyEmployeeFindManyArgs";
import { CompanyEmployee } from "../../companyEmployee/base/CompanyEmployee";
import { CompanyEmployeeWhereUniqueInput } from "../../companyEmployee/base/CompanyEmployeeWhereUniqueInput";
import { FileFindManyArgs } from "../../file/base/FileFindManyArgs";
import { File } from "../../file/base/File";
import { FileWhereUniqueInput } from "../../file/base/FileWhereUniqueInput";
import { NotificationFindManyArgs } from "../../notification/base/NotificationFindManyArgs";
import { Notification } from "../../notification/base/Notification";
import { NotificationWhereUniqueInput } from "../../notification/base/NotificationWhereUniqueInput";
import { PostFindManyArgs } from "../../post/base/PostFindManyArgs";
import { PostWhereUniqueInput } from "../../post/base/PostWhereUniqueInput";
import { RequestFindManyArgs } from "../../request/base/RequestFindManyArgs";
import { RequestWhereUniqueInput } from "../../request/base/RequestWhereUniqueInput";
import { ReservationFindManyArgs } from "../../reservation/base/ReservationFindManyArgs";
import { Reservation } from "../../reservation/base/Reservation";
import { ReservationWhereUniqueInput } from "../../reservation/base/ReservationWhereUniqueInput";
import { UserCondoFindManyArgs } from "../../userCondo/base/UserCondoFindManyArgs";
import { UserCondo } from "../../userCondo/base/UserCondo";
import { UserCondoWhereUniqueInput } from "../../userCondo/base/UserCondoWhereUniqueInput";

export class UserGrpcControllerBase {
  constructor(protected readonly service: UserService) {}
  @Public()
  @common.Post()
  @swagger.ApiCreatedResponse({ type: User })
  @GrpcMethod("UserService", "createUser")
  async createUser(@common.Body() data: UserCreateInput): Promise<User> {
    return await this.service.createUser({
      data: data,
      select: {
        createdAt: true,
        email: true,
        firstName: true,
        id: true,
        lastName: true,
        phoneNumber: true,
        roles: true,
        updatedAt: true,
        username: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [User] })
  @ApiNestedQuery(UserFindManyArgs)
  @GrpcMethod("UserService", "users")
  async users(@common.Req() request: Request): Promise<User[]> {
    const args = plainToClass(UserFindManyArgs, request.query);
    return this.service.users({
      ...args,
      select: {
        createdAt: true,
        email: true,
        firstName: true,
        id: true,
        lastName: true,
        phoneNumber: true,
        roles: true,
        updatedAt: true,
        username: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: User })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("UserService", "user")
  async user(
    @common.Param() params: UserWhereUniqueInput
  ): Promise<User | null> {
    const result = await this.service.user({
      where: params,
      select: {
        createdAt: true,
        email: true,
        firstName: true,
        id: true,
        lastName: true,
        phoneNumber: true,
        roles: true,
        updatedAt: true,
        username: true,
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
  @swagger.ApiOkResponse({ type: User })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("UserService", "updateUser")
  async updateUser(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() data: UserUpdateInput
  ): Promise<User | null> {
    try {
      return await this.service.updateUser({
        where: params,
        data: data,
        select: {
          createdAt: true,
          email: true,
          firstName: true,
          id: true,
          lastName: true,
          phoneNumber: true,
          roles: true,
          updatedAt: true,
          username: true,
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
  @swagger.ApiOkResponse({ type: User })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("UserService", "deleteUser")
  async deleteUser(
    @common.Param() params: UserWhereUniqueInput
  ): Promise<User | null> {
    try {
      return await this.service.deleteUser({
        where: params,
        select: {
          createdAt: true,
          email: true,
          firstName: true,
          id: true,
          lastName: true,
          phoneNumber: true,
          roles: true,
          updatedAt: true,
          username: true,
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

  @common.Get("/:id/companyEmployees")
  @ApiNestedQuery(CompanyEmployeeFindManyArgs)
  @GrpcMethod("UserService", "findManyCompanyEmployees")
  async findManyCompanyEmployees(
    @common.Req() request: Request,
    @common.Param() params: UserWhereUniqueInput
  ): Promise<CompanyEmployee[]> {
    const query = plainToClass(CompanyEmployeeFindManyArgs, request.query);
    const results = await this.service.findCompanyEmployees(params.id, {
      ...query,
      select: {
        company: {
          select: {
            id: true,
          },
        },

        id: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/companyEmployees")
  @GrpcMethod("UserService", "connectCompanyEmployees")
  async connectCompanyEmployees(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: CompanyEmployeeWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      companyEmployees: {
        connect: body,
      },
    };
    await this.service.updateUser({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/companyEmployees")
  @GrpcMethod("UserService", "updateCompanyEmployees")
  async updateCompanyEmployees(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: CompanyEmployeeWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      companyEmployees: {
        set: body,
      },
    };
    await this.service.updateUser({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/companyEmployees")
  @GrpcMethod("UserService", "disconnectCompanyEmployees")
  async disconnectCompanyEmployees(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: CompanyEmployeeWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      companyEmployees: {
        disconnect: body,
      },
    };
    await this.service.updateUser({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Get("/:id/files")
  @ApiNestedQuery(FileFindManyArgs)
  @GrpcMethod("UserService", "findManyFiles")
  async findManyFiles(
    @common.Req() request: Request,
    @common.Param() params: UserWhereUniqueInput
  ): Promise<File[]> {
    const query = plainToClass(FileFindManyArgs, request.query);
    const results = await this.service.findFiles(params.id, {
      ...query,
      select: {
        bucket: true,

        company: {
          select: {
            id: true,
          },
        },

        condoUnit: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        id: true,
        name: true,

        property: {
          select: {
            id: true,
          },
        },

        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/files")
  @GrpcMethod("UserService", "connectFiles")
  async connectFiles(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: FileWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      files: {
        connect: body,
      },
    };
    await this.service.updateUser({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/files")
  @GrpcMethod("UserService", "updateFiles")
  async updateFiles(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: FileWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      files: {
        set: body,
      },
    };
    await this.service.updateUser({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/files")
  @GrpcMethod("UserService", "disconnectFiles")
  async disconnectFiles(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: FileWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      files: {
        disconnect: body,
      },
    };
    await this.service.updateUser({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Get("/:id/notifications")
  @ApiNestedQuery(NotificationFindManyArgs)
  @GrpcMethod("UserService", "findManyNotifications")
  async findManyNotifications(
    @common.Req() request: Request,
    @common.Param() params: UserWhereUniqueInput
  ): Promise<Notification[]> {
    const query = plainToClass(NotificationFindManyArgs, request.query);
    const results = await this.service.findNotifications(params.id, {
      ...query,
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
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/notifications")
  @GrpcMethod("UserService", "connectNotifications")
  async connectNotifications(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: NotificationWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      notifications: {
        connect: body,
      },
    };
    await this.service.updateUser({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/notifications")
  @GrpcMethod("UserService", "updateNotifications")
  async updateNotifications(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: NotificationWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      notifications: {
        set: body,
      },
    };
    await this.service.updateUser({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/notifications")
  @GrpcMethod("UserService", "disconnectNotifications")
  async disconnectNotifications(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: NotificationWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      notifications: {
        disconnect: body,
      },
    };
    await this.service.updateUser({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Get("/:id/posts")
  @ApiNestedQuery(PostFindManyArgs)
  @GrpcMethod("UserService", "findManyPosts")
  async findManyPosts(
    @common.Req() request: Request,
    @common.Param() params: UserWhereUniqueInput
  ): Promise<Post[]> {
    const query = plainToClass(PostFindManyArgs, request.query);
    const results = await this.service.findPosts(params.id, {
      ...query,
      select: {
        content: true,
        createdAt: true,

        forum: {
          select: {
            id: true,
          },
        },

        id: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/posts")
  @GrpcMethod("UserService", "connectPosts")
  async connectPosts(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: PostWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      posts: {
        connect: body,
      },
    };
    await this.service.updateUser({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/posts")
  @GrpcMethod("UserService", "updatePosts")
  async updatePosts(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: PostWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      posts: {
        set: body,
      },
    };
    await this.service.updateUser({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/posts")
  @GrpcMethod("UserService", "disconnectPosts")
  async disconnectPosts(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: PostWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      posts: {
        disconnect: body,
      },
    };
    await this.service.updateUser({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Get("/:id/requests")
  @ApiNestedQuery(RequestFindManyArgs)
  @GrpcMethod("UserService", "findManyRequests")
  async findManyRequests(
    @common.Req() request: Request,
    @common.Param() params: UserWhereUniqueInput
  ): Promise<Request[]> {
    const query = plainToClass(RequestFindManyArgs, request.query);
    const results = await this.service.findRequests(params.id, {
      ...query,
      select: {
        company: {
          select: {
            id: true,
          },
        },

        condoUnit: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        elevator: true,

        employee: {
          select: {
            id: true,
          },
        },

        id: true,
        key: true,

        property: {
          select: {
            id: true,
          },
        },

        question: true,
        reportMessage: true,
        requestType: true,
        response: true,
        status: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/requests")
  @GrpcMethod("UserService", "connectRequests")
  async connectRequests(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: RequestWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      requests: {
        connect: body,
      },
    };
    await this.service.updateUser({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/requests")
  @GrpcMethod("UserService", "updateRequests")
  async updateRequests(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: RequestWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      requests: {
        set: body,
      },
    };
    await this.service.updateUser({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/requests")
  @GrpcMethod("UserService", "disconnectRequests")
  async disconnectRequests(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: RequestWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      requests: {
        disconnect: body,
      },
    };
    await this.service.updateUser({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Get("/:id/reservations")
  @ApiNestedQuery(ReservationFindManyArgs)
  @GrpcMethod("UserService", "findManyReservations")
  async findManyReservations(
    @common.Req() request: Request,
    @common.Param() params: UserWhereUniqueInput
  ): Promise<Reservation[]> {
    const query = plainToClass(ReservationFindManyArgs, request.query);
    const results = await this.service.findReservations(params.id, {
      ...query,
      select: {
        availablity: true,

        commonFacility: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        id: true,
        notes: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/reservations")
  @GrpcMethod("UserService", "connectReservations")
  async connectReservations(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: ReservationWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      reservations: {
        connect: body,
      },
    };
    await this.service.updateUser({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/reservations")
  @GrpcMethod("UserService", "updateReservations")
  async updateReservations(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: ReservationWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      reservations: {
        set: body,
      },
    };
    await this.service.updateUser({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/reservations")
  @GrpcMethod("UserService", "disconnectReservations")
  async disconnectReservations(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: ReservationWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      reservations: {
        disconnect: body,
      },
    };
    await this.service.updateUser({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Get("/:id/userCondos")
  @ApiNestedQuery(UserCondoFindManyArgs)
  @GrpcMethod("UserService", "findManyUserCondos")
  async findManyUserCondos(
    @common.Req() request: Request,
    @common.Param() params: UserWhereUniqueInput
  ): Promise<UserCondo[]> {
    const query = plainToClass(UserCondoFindManyArgs, request.query);
    const results = await this.service.findUserCondos(params.id, {
      ...query,
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
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/userCondos")
  @GrpcMethod("UserService", "connectUserCondos")
  async connectUserCondos(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: UserCondoWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      userCondos: {
        connect: body,
      },
    };
    await this.service.updateUser({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/userCondos")
  @GrpcMethod("UserService", "updateUserCondos")
  async updateUserCondos(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: UserCondoWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      userCondos: {
        set: body,
      },
    };
    await this.service.updateUser({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/userCondos")
  @GrpcMethod("UserService", "disconnectUserCondos")
  async disconnectUserCondos(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: UserCondoWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      userCondos: {
        disconnect: body,
      },
    };
    await this.service.updateUser({
      where: params,
      data,
      select: { id: true },
    });
  }
}
