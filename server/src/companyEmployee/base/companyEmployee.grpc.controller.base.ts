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
import { CompanyEmployeeService } from "../companyEmployee.service";
import { Request } from "../../request/base/Request";
import { CompanyEmployeeCreateInput } from "./CompanyEmployeeCreateInput";
import { CompanyEmployeeWhereInput } from "./CompanyEmployeeWhereInput";
import { CompanyEmployeeWhereUniqueInput } from "./CompanyEmployeeWhereUniqueInput";
import { CompanyEmployeeFindManyArgs } from "./CompanyEmployeeFindManyArgs";
import { CompanyEmployeeUpdateInput } from "./CompanyEmployeeUpdateInput";
import { CompanyEmployee } from "./CompanyEmployee";
import { Post } from "../../post/base/Post";

export class CompanyEmployeeGrpcControllerBase {
  constructor(protected readonly service: CompanyEmployeeService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: CompanyEmployee })
  @GrpcMethod("CompanyEmployeeService", "createCompanyEmployee")
  async createCompanyEmployee(
    @common.Body() data: CompanyEmployeeCreateInput
  ): Promise<CompanyEmployee> {
    return await this.service.createCompanyEmployee({
      data: {
        ...data,

        company: data.company
          ? {
              connect: data.company,
            }
          : undefined,

        user: data.user
          ? {
              connect: data.user,
            }
          : undefined,
      },
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
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [CompanyEmployee] })
  @ApiNestedQuery(CompanyEmployeeFindManyArgs)
  @GrpcMethod("CompanyEmployeeService", "companyEmployees")
  async companyEmployees(
    @common.Req() request: Request
  ): Promise<CompanyEmployee[]> {
    const args = plainToClass(CompanyEmployeeFindManyArgs, request.query);
    return this.service.companyEmployees({
      ...args,
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
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: CompanyEmployee })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("CompanyEmployeeService", "companyEmployee")
  async companyEmployee(
    @common.Param() params: CompanyEmployeeWhereUniqueInput
  ): Promise<CompanyEmployee | null> {
    const result = await this.service.companyEmployee({
      where: params,
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
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: CompanyEmployee })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("CompanyEmployeeService", "updateCompanyEmployee")
  async updateCompanyEmployee(
    @common.Param() params: CompanyEmployeeWhereUniqueInput,
    @common.Body() data: CompanyEmployeeUpdateInput
  ): Promise<CompanyEmployee | null> {
    try {
      return await this.service.updateCompanyEmployee({
        where: params,
        data: {
          ...data,

          company: data.company
            ? {
                connect: data.company,
              }
            : undefined,

          user: data.user
            ? {
                connect: data.user,
              }
            : undefined,
        },
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
  @swagger.ApiOkResponse({ type: CompanyEmployee })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("CompanyEmployeeService", "deleteCompanyEmployee")
  async deleteCompanyEmployee(
    @common.Param() params: CompanyEmployeeWhereUniqueInput
  ): Promise<CompanyEmployee | null> {
    try {
      return await this.service.deleteCompanyEmployee({
        where: params,
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
