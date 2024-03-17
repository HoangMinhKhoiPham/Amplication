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
import { ParkingSpotService } from "../parkingSpot.service";
import { Request } from "../../request/base/Request";
import { ParkingSpotCreateInput } from "./ParkingSpotCreateInput";
import { ParkingSpotWhereInput } from "./ParkingSpotWhereInput";
import { ParkingSpotWhereUniqueInput } from "./ParkingSpotWhereUniqueInput";
import { ParkingSpotFindManyArgs } from "./ParkingSpotFindManyArgs";
import { ParkingSpotUpdateInput } from "./ParkingSpotUpdateInput";
import { ParkingSpot } from "./ParkingSpot";
import { Post } from "../../post/base/Post";

export class ParkingSpotGrpcControllerBase {
  constructor(protected readonly service: ParkingSpotService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: ParkingSpot })
  @GrpcMethod("ParkingSpotService", "createParkingSpot")
  async createParkingSpot(
    @common.Body() data: ParkingSpotCreateInput
  ): Promise<ParkingSpot> {
    return await this.service.createParkingSpot({
      data: {
        ...data,

        condoUnit: data.condoUnit
          ? {
              connect: data.condoUnit,
            }
          : undefined,

        property: data.property
          ? {
              connect: data.property,
            }
          : undefined,
      },
      select: {
        condoUnit: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        id: true,

        property: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [ParkingSpot] })
  @ApiNestedQuery(ParkingSpotFindManyArgs)
  @GrpcMethod("ParkingSpotService", "parkingSpots")
  async parkingSpots(@common.Req() request: Request): Promise<ParkingSpot[]> {
    const args = plainToClass(ParkingSpotFindManyArgs, request.query);
    return this.service.parkingSpots({
      ...args,
      select: {
        condoUnit: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        id: true,

        property: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: ParkingSpot })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("ParkingSpotService", "parkingSpot")
  async parkingSpot(
    @common.Param() params: ParkingSpotWhereUniqueInput
  ): Promise<ParkingSpot | null> {
    const result = await this.service.parkingSpot({
      where: params,
      select: {
        condoUnit: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        id: true,

        property: {
          select: {
            id: true,
          },
        },

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
  @swagger.ApiOkResponse({ type: ParkingSpot })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("ParkingSpotService", "updateParkingSpot")
  async updateParkingSpot(
    @common.Param() params: ParkingSpotWhereUniqueInput,
    @common.Body() data: ParkingSpotUpdateInput
  ): Promise<ParkingSpot | null> {
    try {
      return await this.service.updateParkingSpot({
        where: params,
        data: {
          ...data,

          condoUnit: data.condoUnit
            ? {
                connect: data.condoUnit,
              }
            : undefined,

          property: data.property
            ? {
                connect: data.property,
              }
            : undefined,
        },
        select: {
          condoUnit: {
            select: {
              id: true,
            },
          },

          createdAt: true,
          id: true,

          property: {
            select: {
              id: true,
            },
          },

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
  @swagger.ApiOkResponse({ type: ParkingSpot })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("ParkingSpotService", "deleteParkingSpot")
  async deleteParkingSpot(
    @common.Param() params: ParkingSpotWhereUniqueInput
  ): Promise<ParkingSpot | null> {
    try {
      return await this.service.deleteParkingSpot({
        where: params,
        select: {
          condoUnit: {
            select: {
              id: true,
            },
          },

          createdAt: true,
          id: true,

          property: {
            select: {
              id: true,
            },
          },

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