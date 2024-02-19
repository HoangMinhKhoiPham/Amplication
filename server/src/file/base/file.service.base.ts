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
  File, // @ts-ignore
  Customer,
} from "@prisma/client";

export class FileServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.FileCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.FileCountArgs>
  ): Promise<number> {
    return this.prisma.file.count(args);
  }

  async files<T extends Prisma.FileFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.FileFindManyArgs>
  ): Promise<File[]> {
    return this.prisma.file.findMany(args);
  }
  async file<T extends Prisma.FileFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.FileFindUniqueArgs>
  ): Promise<File | null> {
    return this.prisma.file.findUnique(args);
  }
  async createFile<T extends Prisma.FileCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.FileCreateArgs>
  ): Promise<File> {
    return this.prisma.file.create<T>(args);
  }
  async updateFile<T extends Prisma.FileUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.FileUpdateArgs>
  ): Promise<File> {
    return this.prisma.file.update<T>(args);
  }
  async deleteFile<T extends Prisma.FileDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.FileDeleteArgs>
  ): Promise<File> {
    return this.prisma.file.delete(args);
  }

  async getUserId(parentId: string): Promise<Customer | null> {
    return this.prisma.file
      .findUnique({
        where: { id: parentId },
      })
      .userId();
  }
}
