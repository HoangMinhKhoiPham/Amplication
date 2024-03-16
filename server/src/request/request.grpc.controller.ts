import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { RequestService } from "./request.service";
import { RequestGrpcControllerBase } from "./base/request.grpc.controller.base";

@swagger.ApiTags("requests")
@common.Controller("requests")
export class RequestGrpcController extends RequestGrpcControllerBase {
  constructor(protected readonly service: RequestService) {
    super(service);
  }
}
