import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CommonFacilityService } from "./commonFacility.service";
import { CommonFacilityGrpcControllerBase } from "./base/commonFacility.grpc.controller.base";

@swagger.ApiTags("commonFacilities")
@common.Controller("commonFacilities")
export class CommonFacilityGrpcController extends CommonFacilityGrpcControllerBase {
  constructor(protected readonly service: CommonFacilityService) {
    super(service);
  }
}
