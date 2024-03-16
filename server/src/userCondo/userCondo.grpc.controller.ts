import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { UserCondoService } from "./userCondo.service";
import { UserCondoGrpcControllerBase } from "./base/userCondo.grpc.controller.base";

@swagger.ApiTags("userCondos")
@common.Controller("userCondos")
export class UserCondoGrpcController extends UserCondoGrpcControllerBase {
  constructor(protected readonly service: UserCondoService) {
    super(service);
  }
}
