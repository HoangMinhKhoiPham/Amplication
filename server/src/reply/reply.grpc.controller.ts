import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ReplyService } from "./reply.service";
import { ReplyGrpcControllerBase } from "./base/reply.grpc.controller.base";

@swagger.ApiTags("replies")
@common.Controller("replies")
export class ReplyGrpcController extends ReplyGrpcControllerBase {
  constructor(protected readonly service: ReplyService) {
    super(service);
  }
}
