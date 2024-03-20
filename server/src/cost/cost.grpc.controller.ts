import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CostService } from "./cost.service";
import { CostGrpcControllerBase } from "./base/cost.grpc.controller.base";

@swagger.ApiTags("costs")
@common.Controller("costs")
export class CostGrpcController extends CostGrpcControllerBase {
  constructor(protected readonly service: CostService) {
    super(service);
  }
}
