import { UseGuards, applyDecorators } from "@nestjs/common";
import { ValidRoles } from "src/auth/interfaces";
import { RoleProtected } from "..";
import { AuthGuard } from "@nestjs/passport";
import { UserRoleGuard } from "src/auth/guards/user-role/user-role.guard";

export function Auth(...roles: ValidRoles[]){
    return applyDecorators(
      RoleProtected( ...roles ),
      UseGuards(AuthGuard(), UserRoleGuard),

    )
}