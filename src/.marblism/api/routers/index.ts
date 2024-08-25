/* eslint-disable */
import type { unsetMarker, AnyRouter, AnyRootConfig, CreateRouterInner, Procedure, ProcedureBuilder, ProcedureParams, ProcedureRouterRecord, ProcedureType } from "@trpc/server";
import type { PrismaClient } from "@prisma/client";
import createAccountRouter from "./Account.router";
import createUserRouter from "./User.router";
import createSessionRouter from "./Session.router";
import createRoleRouter from "./Role.router";
import createOrganizationRoleRouter from "./OrganizationRole.router";
import createOrganizationRouter from "./Organization.router";
import createHospitalRouter from "./Hospital.router";
import createHospitalResourceRouter from "./HospitalResource.router";
import createResourceRouter from "./Resource.router";
import createAllocationRouter from "./Allocation.router";
import createPandemicCaseRouter from "./PandemicCase.router";
import { ClientType as AccountClientType } from "./Account.router";
import { ClientType as UserClientType } from "./User.router";
import { ClientType as SessionClientType } from "./Session.router";
import { ClientType as RoleClientType } from "./Role.router";
import { ClientType as OrganizationRoleClientType } from "./OrganizationRole.router";
import { ClientType as OrganizationClientType } from "./Organization.router";
import { ClientType as HospitalClientType } from "./Hospital.router";
import { ClientType as HospitalResourceClientType } from "./HospitalResource.router";
import { ClientType as ResourceClientType } from "./Resource.router";
import { ClientType as AllocationClientType } from "./Allocation.router";
import { ClientType as PandemicCaseClientType } from "./PandemicCase.router";

export type BaseConfig = AnyRootConfig;

export type RouterFactory<Config extends BaseConfig> = <
    ProcRouterRecord extends ProcedureRouterRecord
>(
    procedures: ProcRouterRecord
) => CreateRouterInner<Config, ProcRouterRecord>;

export type UnsetMarker = typeof unsetMarker;

export type ProcBuilder<Config extends BaseConfig> = ProcedureBuilder<
    ProcedureParams<Config, any, any, any, UnsetMarker, UnsetMarker, any>
>;

export function db(ctx: any) {
    if (!ctx.prisma) {
        throw new Error('Missing "prisma" field in trpc context');
    }
    return ctx.prisma as PrismaClient;
}

export function createRouter<Config extends BaseConfig>(router: RouterFactory<Config>, procedure: ProcBuilder<Config>) {
    return router({
        account: createAccountRouter(router, procedure),
        user: createUserRouter(router, procedure),
        session: createSessionRouter(router, procedure),
        role: createRoleRouter(router, procedure),
        organizationRole: createOrganizationRoleRouter(router, procedure),
        organization: createOrganizationRouter(router, procedure),
        hospital: createHospitalRouter(router, procedure),
        hospitalResource: createHospitalResourceRouter(router, procedure),
        resource: createResourceRouter(router, procedure),
        allocation: createAllocationRouter(router, procedure),
        pandemicCase: createPandemicCaseRouter(router, procedure),
    }
    );
}

export interface ClientType<AppRouter extends AnyRouter> {
    account: AccountClientType<AppRouter>;
    user: UserClientType<AppRouter>;
    session: SessionClientType<AppRouter>;
    role: RoleClientType<AppRouter>;
    organizationRole: OrganizationRoleClientType<AppRouter>;
    organization: OrganizationClientType<AppRouter>;
    hospital: HospitalClientType<AppRouter>;
    hospitalResource: HospitalResourceClientType<AppRouter>;
    resource: ResourceClientType<AppRouter>;
    allocation: AllocationClientType<AppRouter>;
    pandemicCase: PandemicCaseClientType<AppRouter>;
}
