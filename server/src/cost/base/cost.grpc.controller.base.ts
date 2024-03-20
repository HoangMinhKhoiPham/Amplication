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
import { CostService } from "../cost.service";
import { Request } from "../../request/base/Request";
import { CostCreateInput } from "./CostCreateInput";
import { CostWhereInput } from "./CostWhereInput";
import { CostWhereUniqueInput } from "./CostWhereUniqueInput";
import { CostFindManyArgs } from "./CostFindManyArgs";
import { CostUpdateInput } from "./CostUpdateInput";
import { Cost } from "./Cost";
import { Post } from "../../post/base/Post";

export class CostGrpcControllerBase {
  constructor(protected readonly service: CostService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Cost })
  @GrpcMethod("CostService", "createCost")
  async createCost(@common.Body() data: CostCreateInput): Promise<Cost> {
    return await this.service.createCost({
      data: {
        ...data,

        company: data.company
          ? {
              connect: data.company,
            }
          : undefined,
      },
      select: {
        amount: true,

        company: {
          select: {
            id: true,
          },
        },

        costName: true,
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Cost] })
  @ApiNestedQuery(CostFindManyArgs)
  @GrpcMethod("CostService", "costs")
  async costs(@common.Req() request: Request): Promise<Cost[]> {
    const args = plainToClass(CostFindManyArgs, request.query);
    return this.service.costs({
      ...args,
      select: {
        amount: true,

        company: {
          select: {
            id: true,
          },
        },

        costName: true,
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Cost })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("CostService", "cost")
  async cost(
    @common.Param() params: CostWhereUniqueInput
  ): Promise<Cost | null> {
    const result = await this.service.cost({
      where: params,
      select: {
        amount: true,

        company: {
          select: {
            id: true,
          },
        },

        costName: true,
        createdAt: true,
        id: true,
        updatedAt: true,
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
  @swagger.ApiOkResponse({ type: Cost })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("CostService", "updateCost")
  async updateCost(
    @common.Param() params: CostWhereUniqueInput,
    @common.Body() data: CostUpdateInput
  ): Promise<Cost | null> {
    try {
      return await this.service.updateCost({
        where: params,
        data: {
          ...data,

          company: data.company
            ? {
                connect: data.company,
              }
            : undefined,
        },
        select: {
          amount: true,

          company: {
            select: {
              id: true,
            },
          },

          costName: true,
          createdAt: true,
          id: true,
          updatedAt: true,
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
  @swagger.ApiOkResponse({ type: Cost })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("CostService", "deleteCost")
  async deleteCost(
    @common.Param() params: CostWhereUniqueInput
  ): Promise<Cost | null> {
    try {
      return await this.service.deleteCost({
        where: params,
        select: {
          amount: true,

          company: {
            select: {
              id: true,
            },
          },

          costName: true,
          createdAt: true,
          id: true,
          updatedAt: true,
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