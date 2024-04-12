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
  RegistrationKey as PrismaRegistrationKey,
  CondoUnit as PrismaCondoUnit,
} from "@prisma/client";

export class RegistrationKeyServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.RegistrationKeyCountArgs, "select">
  ): Promise<number> {
    return this.prisma.registrationKey.count(args);
  }

  async registrationKeys<T extends Prisma.RegistrationKeyFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.RegistrationKeyFindManyArgs>
  ): Promise<PrismaRegistrationKey[]> {
    return this.prisma.registrationKey.findMany<Prisma.RegistrationKeyFindManyArgs>(
      args
    );
  }
  async registrationKey<T extends Prisma.RegistrationKeyFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.RegistrationKeyFindUniqueArgs>
  ): Promise<PrismaRegistrationKey | null> {
    return this.prisma.registrationKey.findUnique(args);
  }
  async createRegistrationKey<T extends Prisma.RegistrationKeyCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.RegistrationKeyCreateArgs>
  ): Promise<PrismaRegistrationKey> {
    return this.prisma.registrationKey.create<T>(args);
  }
  async updateRegistrationKey<T extends Prisma.RegistrationKeyUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.RegistrationKeyUpdateArgs>
  ): Promise<PrismaRegistrationKey> {
    return this.prisma.registrationKey.update<T>(args);
  }
  async deleteRegistrationKey<T extends Prisma.RegistrationKeyDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.RegistrationKeyDeleteArgs>
  ): Promise<PrismaRegistrationKey> {
    return this.prisma.registrationKey.delete(args);
  }

  async getCondoUnit(parentId: number): Promise<PrismaCondoUnit | null> {
    return this.prisma.registrationKey
      .findUnique({
        where: { id: parentId },
      })
      .condoUnit();
  }
}
