import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { LockerService } from "./locker.service";
import { LockerGrpcControllerBase } from "./base/locker.grpc.controller.base";

@swagger.ApiTags("lockers")
@common.Controller("lockers")
export class LockerGrpcController extends LockerGrpcControllerBase {
  constructor(protected readonly service: LockerService) {
    super(service);
  }
}
