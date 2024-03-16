import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CondoUnitService } from "./condoUnit.service";
import { CondoUnitGrpcControllerBase } from "./base/condoUnit.grpc.controller.base";

@swagger.ApiTags("condoUnits")
@common.Controller("condoUnits")
export class CondoUnitGrpcController extends CondoUnitGrpcControllerBase {
  constructor(protected readonly service: CondoUnitService) {
    super(service);
  }
}
