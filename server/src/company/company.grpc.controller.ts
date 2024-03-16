import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CompanyService } from "./company.service";
import { CompanyGrpcControllerBase } from "./base/company.grpc.controller.base";

@swagger.ApiTags("companies")
@common.Controller("companies")
export class CompanyGrpcController extends CompanyGrpcControllerBase {
  constructor(protected readonly service: CompanyService) {
    super(service);
  }
}
