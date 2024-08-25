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

        createMany: procedure.input($Schema.AllocationInputSchema.createMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).allocation.createMany(input as any))),

        create: procedure.input($Schema.AllocationInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).allocation.create(input as any))),

        deleteMany: procedure.input($Schema.AllocationInputSchema.deleteMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).allocation.deleteMany(input as any))),

        delete: procedure.input($Schema.AllocationInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).allocation.delete(input as any))),

        findFirst: procedure.input($Schema.AllocationInputSchema.findFirst).query(({ ctx, input }) => checkRead(db(ctx).allocation.findFirst(input as any))),

        findMany: procedure.input($Schema.AllocationInputSchema.findMany).query(({ ctx, input }) => checkRead(db(ctx).allocation.findMany(input as any))),

        findUnique: procedure.input($Schema.AllocationInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).allocation.findUnique(input as any))),

        updateMany: procedure.input($Schema.AllocationInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).allocation.updateMany(input as any))),

        update: procedure.input($Schema.AllocationInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).allocation.update(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    createMany: {

        useMutation: <T extends Prisma.AllocationCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.AllocationCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.AllocationCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.AllocationCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.AllocationCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.AllocationCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.AllocationGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.AllocationGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.AllocationCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.AllocationCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.AllocationGetPayload<T>, Context>) => Promise<Prisma.AllocationGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.AllocationDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.AllocationDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.AllocationDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.AllocationDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.AllocationDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.AllocationDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.AllocationGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.AllocationGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.AllocationDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.AllocationDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.AllocationGetPayload<T>, Context>) => Promise<Prisma.AllocationGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.AllocationFindFirstArgs, TData = Prisma.AllocationGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.AllocationFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.AllocationGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.AllocationFindFirstArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.AllocationFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.AllocationGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.AllocationGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.AllocationFindManyArgs, TData = Array<Prisma.AllocationGetPayload<T>>>(
            input: Prisma.SelectSubset<T, Prisma.AllocationFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.AllocationGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.AllocationFindManyArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.AllocationFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.AllocationGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.AllocationGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.AllocationFindUniqueArgs, TData = Prisma.AllocationGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.AllocationFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.AllocationGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.AllocationFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.AllocationFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.AllocationGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.AllocationGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.AllocationUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.AllocationUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.AllocationUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.AllocationUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.AllocationUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.AllocationUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.AllocationGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.AllocationGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.AllocationUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.AllocationUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.AllocationGetPayload<T>, Context>) => Promise<Prisma.AllocationGetPayload<T>>
            };

    };
}
