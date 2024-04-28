import { ClientOptions, Transport } from "@nestjs/microservices";
import { ConfigService } from "@nestjs/config";

const configService: ConfigService = new ConfigService();

export const grpcClientOptions: ClientOptions = {
  transport: Transport.GRPC,
  options: {
    package: [
      "user",
      "condounit",
      "property",
      "parkingspot",
      "locker",
      "company",
      "file",
      "registrationkey",
      "role",
      "companyemployee",
      "usercondo",
      "forum",
      "post",
      "commonfacility",
      "reservation",
      "request",
      "notification",
      "cost",
      "reply"
    ],
    protoPath: [
      "src/user/user.proto",
      "src/condounit/condounit.proto",
      "src/property/property.proto",
      "src/parkingspot/parkingspot.proto",
      "src/locker/locker.proto",
      "src/company/company.proto",
      "src/file/file.proto",
      "src/registrationkey/registrationkey.proto",
      "src/role/role.proto",
      "src/companyemployee/companyemployee.proto",
      "src/usercondo/usercondo.proto",
      "src/forum/forum.proto",
      "src/post/post.proto",
      "src/commonfacility/commonfacility.proto",
      "src/reservation/reservation.proto",
      "src/request/request.proto",
      "src/notification/notification.proto",
      "src/cost/cost.proto",
      "src/reply/reply.proto"
    ],
    url: configService.get<string>("GRPC_CLIENT_URL_PATH"),
  },
};
