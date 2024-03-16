import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ParkingSpotService } from "./parkingSpot.service";
import { ParkingSpotGrpcControllerBase } from "./base/parkingSpot.grpc.controller.base";

@swagger.ApiTags("parkingSpots")
@common.Controller("parkingSpots")
export class ParkingSpotGrpcController extends ParkingSpotGrpcControllerBase {
  constructor(protected readonly service: ParkingSpotService) {
    super(service);
  }
}
