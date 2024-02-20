import { Module } from "@nestjs/common";
import { CacheModule } from "@nestjs/cache-manager";
import { redisStore } from "cache-manager-ioredis-yet";
import { UserModule } from "./user/user.module";
import { CustomerModule } from "./customer/customer.module";
import { CondoUnitModule } from "./condoUnit/condoUnit.module";
import { PropertyModule } from "./property/property.module";
import { ParkingSpotModule } from "./parkingSpot/parkingSpot.module";
import { LockerModule } from "./locker/locker.module";
import { CompanyModule } from "./company/company.module";
import { FileModule } from "./file/file.module";
import { TestModule } from "./test/test.module";
import { RegistrationKeyModule } from "./registrationKey/registrationKey.module";
import { HealthModule } from "./health/health.module";
import { PrismaModule } from "./prisma/prisma.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { ConfigModule } from "@nestjs/config";

import { ACLModule } from "./auth/acl.module";
import { AuthModule } from "./auth/auth.module";

@Module({
  controllers: [],
  imports: [
    ACLModule,
    AuthModule,
    UserModule,
    CustomerModule,
    CondoUnitModule,
    PropertyModule,
    ParkingSpotModule,
    LockerModule,
    CompanyModule,
    FileModule,
    TestModule,
    RegistrationKeyModule,
    HealthModule,
    PrismaModule,
    SecretsManagerModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
    CacheModule.registerAsync({
      isGlobal: true,
      imports: [ConfigModule],

      useFactory: async (configService: ConfigService) => {
        const host = configService.get("REDIS_HOST");
        const port = configService.get("REDIS_PORT");
        const username = configService.get("REDIS_USERNAME");
        const password = configService.get("REDIS_PASSWORD");
        const ttl = configService.get("REDIS_TTL", 5000);

        return {
          store: await redisStore({
            host: host,
            port: port,
            username: username,
            password: password,
            ttl: ttl,
          }),
        };
      },

      inject: [ConfigService],
    }),
  ],
  providers: [],
})
export class AppModule {}
