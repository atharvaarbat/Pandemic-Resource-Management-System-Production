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

        createMany: procedure.input($Schema.HospitalInputSchema.createMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).hospital.createMany(input as any))),

        create: procedure.input($Schema.HospitalInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).hospital.create(input as any))),

        deleteMany: procedure.input($Schema.HospitalInputSchema.deleteMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).hospital.deleteMany(input as any))),

        delete: procedure.input($Schema.HospitalInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).hospital.delete(input as any))),

        findFirst: procedure.input($Schema.HospitalInputSchema.findFirst).query(({ ctx, input }) => checkRead(db(ctx).hospital.findFirst(input as any))),

        findMany: procedure.input($Schema.HospitalInputSchema.findMany).query(({ ctx, input }) => checkRead(db(ctx).hospital.findMany(input as any))),

        findUnique: procedure.input($Schema.HospitalInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).hospital.findUnique(input as any))),

        updateMany: procedure.input($Schema.HospitalInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).hospital.updateMany(input as any))),

        update: procedure.input($Schema.HospitalInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).hospital.update(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    createMany: {

        useMutation: <T extends Prisma.HospitalCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.HospitalCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.HospitalCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.HospitalCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.HospitalCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.HospitalCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.HospitalGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.HospitalGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.HospitalCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.HospitalCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.HospitalGetPayload<T>, Context>) => Promise<Prisma.HospitalGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.HospitalDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.HospitalDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.HospitalDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.HospitalDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.HospitalDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.HospitalDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.HospitalGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.HospitalGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.HospitalDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.HospitalDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.HospitalGetPayload<T>, Context>) => Promise<Prisma.HospitalGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.HospitalFindFirstArgs, TData = Prisma.HospitalGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.HospitalFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.HospitalGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.HospitalFindFirstArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.HospitalFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.HospitalGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.HospitalGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.HospitalFindManyArgs, TData = Array<Prisma.HospitalGetPayload<T>>>(
            input: Prisma.SelectSubset<T, Prisma.HospitalFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.HospitalGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.HospitalFindManyArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.HospitalFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.HospitalGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.HospitalGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.HospitalFindUniqueArgs, TData = Prisma.HospitalGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.HospitalFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.HospitalGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.HospitalFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.HospitalFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.HospitalGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.HospitalGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.HospitalUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.HospitalUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.HospitalUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.HospitalUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.HospitalUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.HospitalUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.HospitalGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.HospitalGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.HospitalUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.HospitalUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.HospitalGetPayload<T>, Context>) => Promise<Prisma.HospitalGetPayload<T>>
            };

    };
}
