/* eslint-disable */
import { type RouterFactory, type ProcBuilder, type BaseConfig, db } from ".";
import * as _Schema from '@zenstackhq/runtime/zod/input';
const $Schema: typeof _Schema = (_Schema as any).default ?? _Schema;
import { checkRead, checkMutate } from '../helper';
import type { Prisma } from '@prisma/client';
import type { UseTRPCMutationOptions, UseTRPCMutationResult, UseTRPCQueryOptions, UseTRPCQueryResult, UseTRPCInfiniteQueryOptions, UseTRPCInfiniteQueryResult } from '@trpc/react-query/shared';
import type { TRPCClientErrorLike } from '@trpc/client';
import type { AnyRouter } from '@trpc/server';

export default function createRouter<Config extends BaseConfig>(router: RouterFactory<Config>, procedure: ProcBuilder<Config>) {
    return router({

        createMany: procedure.input($Schema.HospitalResourceInputSchema.createMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).hospitalResource.createMany(input as any))),

        create: procedure.input($Schema.HospitalResourceInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).hospitalResource.create(input as any))),

        deleteMany: procedure.input($Schema.HospitalResourceInputSchema.deleteMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).hospitalResource.deleteMany(input as any))),

        delete: procedure.input($Schema.HospitalResourceInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).hospitalResource.delete(input as any))),

        findFirst: procedure.input($Schema.HospitalResourceInputSchema.findFirst).query(({ ctx, input }) => checkRead(db(ctx).hospitalResource.findFirst(input as any))),

        findMany: procedure.input($Schema.HospitalResourceInputSchema.findMany).query(({ ctx, input }) => checkRead(db(ctx).hospitalResource.findMany(input as any))),

        findUnique: procedure.input($Schema.HospitalResourceInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).hospitalResource.findUnique(input as any))),

        updateMany: procedure.input($Schema.HospitalResourceInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).hospitalResource.updateMany(input as any))),

        update: procedure.input($Schema.HospitalResourceInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).hospitalResource.update(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    createMany: {

        useMutation: <T extends Prisma.HospitalResourceCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.HospitalResourceCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.HospitalResourceCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.HospitalResourceCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.HospitalResourceCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.HospitalResourceCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.HospitalResourceGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.HospitalResourceGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.HospitalResourceCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.HospitalResourceCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.HospitalResourceGetPayload<T>, Context>) => Promise<Prisma.HospitalResourceGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.HospitalResourceDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.HospitalResourceDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.HospitalResourceDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.HospitalResourceDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.HospitalResourceDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.HospitalResourceDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.HospitalResourceGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.HospitalResourceGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.HospitalResourceDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.HospitalResourceDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.HospitalResourceGetPayload<T>, Context>) => Promise<Prisma.HospitalResourceGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.HospitalResourceFindFirstArgs, TData = Prisma.HospitalResourceGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.HospitalResourceFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.HospitalResourceGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.HospitalResourceFindFirstArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.HospitalResourceFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.HospitalResourceGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.HospitalResourceGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.HospitalResourceFindManyArgs, TData = Array<Prisma.HospitalResourceGetPayload<T>>>(
            input: Prisma.SelectSubset<T, Prisma.HospitalResourceFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.HospitalResourceGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.HospitalResourceFindManyArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.HospitalResourceFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.HospitalResourceGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.HospitalResourceGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.HospitalResourceFindUniqueArgs, TData = Prisma.HospitalResourceGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.HospitalResourceFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.HospitalResourceGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.HospitalResourceFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.HospitalResourceFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.HospitalResourceGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.HospitalResourceGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.HospitalResourceUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.HospitalResourceUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.HospitalResourceUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.HospitalResourceUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.HospitalResourceUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.HospitalResourceUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.HospitalResourceGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.HospitalResourceGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.HospitalResourceUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.HospitalResourceUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.HospitalResourceGetPayload<T>, Context>) => Promise<Prisma.HospitalResourceGetPayload<T>>
            };

    };
}
