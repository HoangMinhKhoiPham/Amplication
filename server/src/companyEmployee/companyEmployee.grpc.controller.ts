import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CompanyEmployeeService } from "./companyEmployee.service";
import { CompanyEmployeeGrpcControllerBase } from "./base/companyEmployee.grpc.controller.base";

@swagger.ApiTags("companyEmployees")
@common.Controller("companyEmployees")
export class CompanyEmployeeGrpcController extends CompanyEmployeeGrpcControllerBase {
  constructor(protected readonly service: CompanyEmployeeService) {
    super(service);
  }
}
