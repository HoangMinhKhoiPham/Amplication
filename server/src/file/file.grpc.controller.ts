import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { FileService } from "./file.service";
import { FileGrpcControllerBase } from "./base/file.grpc.controller.base";

@swagger.ApiTags("files")
@common.Controller("files")
export class FileGrpcController extends FileGrpcControllerBase {
  constructor(protected readonly service: FileService) {
    super(service);
  }
}
