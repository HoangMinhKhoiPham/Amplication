import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { RegistrationKeyService } from "./registrationKey.service";
import { RegistrationKeyGrpcControllerBase } from "./base/registrationKey.grpc.controller.base";

@swagger.ApiTags("registrationKeys")
@common.Controller("registrationKeys")
export class RegistrationKeyGrpcController extends RegistrationKeyGrpcControllerBase {
  constructor(protected readonly service: RegistrationKeyService) {
    super(service);
  }
}
