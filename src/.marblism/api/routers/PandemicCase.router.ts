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

        createMany: procedure.input($Schema.PandemicCaseInputSchema.createMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).pandemicCase.createMany(input as any))),

        create: procedure.input($Schema.PandemicCaseInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).pandemicCase.create(input as any))),

        deleteMany: procedure.input($Schema.PandemicCaseInputSchema.deleteMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).pandemicCase.deleteMany(input as any))),

        delete: procedure.input($Schema.PandemicCaseInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).pandemicCase.delete(input as any))),

        findFirst: procedure.input($Schema.PandemicCaseInputSchema.findFirst).query(({ ctx, input }) => checkRead(db(ctx).pandemicCase.findFirst(input as any))),

        findMany: procedure.input($Schema.PandemicCaseInputSchema.findMany).query(({ ctx, input }) => checkRead(db(ctx).pandemicCase.findMany(input as any))),

        findUnique: procedure.input($Schema.PandemicCaseInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).pandemicCase.findUnique(input as any))),

        updateMany: procedure.input($Schema.PandemicCaseInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).pandemicCase.updateMany(input as any))),

        update: procedure.input($Schema.PandemicCaseInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).pandemicCase.update(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    createMany: {

        useMutation: <T extends Prisma.PandemicCaseCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.PandemicCaseCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.PandemicCaseCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.PandemicCaseCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.PandemicCaseCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.PandemicCaseCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.PandemicCaseGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.PandemicCaseGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.PandemicCaseCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.PandemicCaseCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.PandemicCaseGetPayload<T>, Context>) => Promise<Prisma.PandemicCaseGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.PandemicCaseDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.PandemicCaseDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.PandemicCaseDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.PandemicCaseDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.PandemicCaseDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.PandemicCaseDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.PandemicCaseGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.PandemicCaseGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.PandemicCaseDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.PandemicCaseDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.PandemicCaseGetPayload<T>, Context>) => Promise<Prisma.PandemicCaseGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.PandemicCaseFindFirstArgs, TData = Prisma.PandemicCaseGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.PandemicCaseFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.PandemicCaseGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.PandemicCaseFindFirstArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.PandemicCaseFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.PandemicCaseGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.PandemicCaseGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.PandemicCaseFindManyArgs, TData = Array<Prisma.PandemicCaseGetPayload<T>>>(
            input: Prisma.SelectSubset<T, Prisma.PandemicCaseFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.PandemicCaseGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.PandemicCaseFindManyArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.PandemicCaseFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.PandemicCaseGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.PandemicCaseGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.PandemicCaseFindUniqueArgs, TData = Prisma.PandemicCaseGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.PandemicCaseFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.PandemicCaseGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.PandemicCaseFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.PandemicCaseFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.PandemicCaseGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.PandemicCaseGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.PandemicCaseUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.PandemicCaseUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.PandemicCaseUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.PandemicCaseUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.PandemicCaseUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.PandemicCaseUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.PandemicCaseGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.PandemicCaseGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.PandemicCaseUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.PandemicCaseUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.PandemicCaseGetPayload<T>, Context>) => Promise<Prisma.PandemicCaseGetPayload<T>>
            };

    };
}
