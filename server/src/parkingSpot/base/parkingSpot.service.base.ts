/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  ParkingSpot as PrismaParkingSpot,
  CondoUnit as PrismaCondoUnit,
  Property as PrismaProperty,
} from "@prisma/client";

export class ParkingSpotServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.ParkingSpotCountArgs, "select">
  ): Promise<number> {
    return this.prisma.parkingSpot.count(args);
  }

  async parkingSpots<T extends Prisma.ParkingSpotFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.ParkingSpotFindManyArgs>
  ): Promise<PrismaParkingSpot[]> {
    return this.prisma.parkingSpot.findMany<Prisma.ParkingSpotFindManyArgs>(
      args
    );
  }
  async parkingSpot<T extends Prisma.ParkingSpotFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.ParkingSpotFindUniqueArgs>
  ): Promise<PrismaParkingSpot | null> {
    return this.prisma.parkingSpot.findUnique(args);
  }
  async createParkingSpot<T extends Prisma.ParkingSpotCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ParkingSpotCreateArgs>
  ): Promise<PrismaParkingSpot> {
    return this.prisma.parkingSpot.create<T>(args);
  }
  async updateParkingSpot<T extends Prisma.ParkingSpotUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ParkingSpotUpdateArgs>
  ): Promise<PrismaParkingSpot> {
    return this.prisma.parkingSpot.update<T>(args);
  }
  async deleteParkingSpot<T extends Prisma.ParkingSpotDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.ParkingSpotDeleteArgs>
  ): Promise<PrismaParkingSpot> {
    return this.prisma.parkingSpot.delete(args);
  }

  async getCondoUnit(parentId: number): Promise<PrismaCondoUnit | null> {
    return this.prisma.parkingSpot
      .findUnique({
        where: { id: parentId },
      })
      .condoUnit();
  }

  async getProperty(parentId: number): Promise<PrismaProperty | null> {
    return this.prisma.parkingSpot
      .findUnique({
        where: { id: parentId },
      })
      .property();
  }
}
