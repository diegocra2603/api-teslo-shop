import { ExecutionContext, InternalServerErrorException, createParamDecorator } from "@nestjs/common";

export const RawHeaders = createParamDecorator(
    (data, context: ExecutionContext) => {

        const req = context.switchToHttp().getRequest();

        const rawHeaders = req.rawHeaders;

        if(!rawHeaders)
            throw new InternalServerErrorException('User not found (request)');

        return rawHeaders;

    }
)