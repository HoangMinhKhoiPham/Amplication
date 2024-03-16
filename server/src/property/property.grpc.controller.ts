import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PropertyService } from "./property.service";
import { PropertyGrpcControllerBase } from "./base/property.grpc.controller.base";

@swagger.ApiTags("properties")
@common.Controller("properties")
export class PropertyGrpcController extends PropertyGrpcControllerBase {
  constructor(protected readonly service: PropertyService) {
    super(service);
  }
}
