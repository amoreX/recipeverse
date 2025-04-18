
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Ingredient
 * 
 */
export type Ingredient = $Result.DefaultSelection<Prisma.$IngredientPayload>
/**
 * Model Instruction
 * 
 */
export type Instruction = $Result.DefaultSelection<Prisma.$InstructionPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Recipe
 * 
 */
export type Recipe = $Result.DefaultSelection<Prisma.$RecipePayload>
/**
 * Model Favourite
 * 
 */
export type Favourite = $Result.DefaultSelection<Prisma.$FavouritePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P]): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number }): $Utils.JsPromise<R>

  /**
   * Executes a raw MongoDB command and returns the result of it.
   * @example
   * ```
   * const user = await prisma.$runCommandRaw({
   *   aggregate: 'User',
   *   pipeline: [{ $match: { name: 'Bob' } }, { $project: { email: true, _id: false } }],
   *   explain: false,
   * })
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $runCommandRaw(command: Prisma.InputJsonObject): Prisma.PrismaPromise<Prisma.JsonObject>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.recipe`: Exposes CRUD operations for the **Recipe** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Recipes
    * const recipes = await prisma.recipe.findMany()
    * ```
    */
  get recipe(): Prisma.RecipeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.favourite`: Exposes CRUD operations for the **Favourite** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Favourites
    * const favourites = await prisma.favourite.findMany()
    * ```
    */
  get favourite(): Prisma.FavouriteDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Recipe: 'Recipe',
    Favourite: 'Favourite'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "recipe" | "favourite"
      txIsolationLevel: never
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.UserFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.UserAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Recipe: {
        payload: Prisma.$RecipePayload<ExtArgs>
        fields: Prisma.RecipeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RecipeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RecipeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipePayload>
          }
          findFirst: {
            args: Prisma.RecipeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RecipeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipePayload>
          }
          findMany: {
            args: Prisma.RecipeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipePayload>[]
          }
          create: {
            args: Prisma.RecipeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipePayload>
          }
          createMany: {
            args: Prisma.RecipeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.RecipeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipePayload>
          }
          update: {
            args: Prisma.RecipeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipePayload>
          }
          deleteMany: {
            args: Prisma.RecipeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RecipeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RecipeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipePayload>
          }
          aggregate: {
            args: Prisma.RecipeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRecipe>
          }
          groupBy: {
            args: Prisma.RecipeGroupByArgs<ExtArgs>
            result: $Utils.Optional<RecipeGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.RecipeFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.RecipeAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.RecipeCountArgs<ExtArgs>
            result: $Utils.Optional<RecipeCountAggregateOutputType> | number
          }
        }
      }
      Favourite: {
        payload: Prisma.$FavouritePayload<ExtArgs>
        fields: Prisma.FavouriteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FavouriteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavouritePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FavouriteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavouritePayload>
          }
          findFirst: {
            args: Prisma.FavouriteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavouritePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FavouriteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavouritePayload>
          }
          findMany: {
            args: Prisma.FavouriteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavouritePayload>[]
          }
          create: {
            args: Prisma.FavouriteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavouritePayload>
          }
          createMany: {
            args: Prisma.FavouriteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.FavouriteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavouritePayload>
          }
          update: {
            args: Prisma.FavouriteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavouritePayload>
          }
          deleteMany: {
            args: Prisma.FavouriteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FavouriteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.FavouriteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavouritePayload>
          }
          aggregate: {
            args: Prisma.FavouriteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFavourite>
          }
          groupBy: {
            args: Prisma.FavouriteGroupByArgs<ExtArgs>
            result: $Utils.Optional<FavouriteGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.FavouriteFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.FavouriteAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.FavouriteCountArgs<ExtArgs>
            result: $Utils.Optional<FavouriteCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $runCommandRaw: {
          args: Prisma.InputJsonObject,
          result: Prisma.JsonObject
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    recipe?: RecipeOmit
    favourite?: FavouriteOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    Recipe: number
    Favourite: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Recipe?: boolean | UserCountOutputTypeCountRecipeArgs
    Favourite?: boolean | UserCountOutputTypeCountFavouriteArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRecipeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RecipeWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFavouriteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FavouriteWhereInput
  }


  /**
   * Count Type RecipeCountOutputType
   */

  export type RecipeCountOutputType = {
    Favourite: number
  }

  export type RecipeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Favourite?: boolean | RecipeCountOutputTypeCountFavouriteArgs
  }

  // Custom InputTypes
  /**
   * RecipeCountOutputType without action
   */
  export type RecipeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeCountOutputType
     */
    select?: RecipeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RecipeCountOutputType without action
   */
  export type RecipeCountOutputTypeCountFavouriteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FavouriteWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Ingredient
   */





  export type IngredientSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    description?: boolean
    quantity?: boolean
    unit?: boolean
    order_index?: boolean
  }, ExtArgs["result"]["ingredient"]>



  export type IngredientSelectScalar = {
    description?: boolean
    quantity?: boolean
    unit?: boolean
    order_index?: boolean
  }

  export type IngredientOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"description" | "quantity" | "unit" | "order_index", ExtArgs["result"]["ingredient"]>

  export type $IngredientPayload = {
    name: "Ingredient"
    objects: {}
    scalars: {
      description: string
      quantity: number | null
      unit: string | null
      order_index: number
    }
    composites: {}
  }

  type IngredientGetPayload<S extends boolean | null | undefined | IngredientDefaultArgs> = $Result.GetResult<Prisma.$IngredientPayload, S>





  /**
   * Fields of the Ingredient model
   */
  interface IngredientFieldRefs {
    readonly description: FieldRef<"Ingredient", 'String'>
    readonly quantity: FieldRef<"Ingredient", 'Float'>
    readonly unit: FieldRef<"Ingredient", 'String'>
    readonly order_index: FieldRef<"Ingredient", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Ingredient without action
   */
  export type IngredientDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredient
     */
    select?: IngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingredient
     */
    omit?: IngredientOmit<ExtArgs> | null
  }


  /**
   * Model Instruction
   */





  export type InstructionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    step_number?: boolean
    description?: boolean
  }, ExtArgs["result"]["instruction"]>



  export type InstructionSelectScalar = {
    step_number?: boolean
    description?: boolean
  }

  export type InstructionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"step_number" | "description", ExtArgs["result"]["instruction"]>

  export type $InstructionPayload = {
    name: "Instruction"
    objects: {}
    scalars: {
      step_number: number
      description: string
    }
    composites: {}
  }

  type InstructionGetPayload<S extends boolean | null | undefined | InstructionDefaultArgs> = $Result.GetResult<Prisma.$InstructionPayload, S>





  /**
   * Fields of the Instruction model
   */
  interface InstructionFieldRefs {
    readonly step_number: FieldRef<"Instruction", 'Int'>
    readonly description: FieldRef<"Instruction", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Instruction without action
   */
  export type InstructionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instruction
     */
    select?: InstructionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Instruction
     */
    omit?: InstructionOmit<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    avatar_url: string | null
    bio: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    avatar_url: string | null
    bio: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    avatar_url: number
    bio: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    avatar_url?: true
    bio?: true
    created_at?: true
    updated_at?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    avatar_url?: true
    bio?: true
    created_at?: true
    updated_at?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    avatar_url?: true
    bio?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    password: string
    avatar_url: string | null
    bio: string | null
    created_at: Date
    updated_at: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    avatar_url?: boolean
    bio?: boolean
    created_at?: boolean
    updated_at?: boolean
    Recipe?: boolean | User$RecipeArgs<ExtArgs>
    Favourite?: boolean | User$FavouriteArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    avatar_url?: boolean
    bio?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "avatar_url" | "bio" | "created_at" | "updated_at", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Recipe?: boolean | User$RecipeArgs<ExtArgs>
    Favourite?: boolean | User$FavouriteArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      Recipe: Prisma.$RecipePayload<ExtArgs>[]
      Favourite: Prisma.$FavouritePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      password: string
      avatar_url: string | null
      bio: string | null
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * @param {UserFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const user = await prisma.user.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: UserFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a User.
     * @param {UserAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const user = await prisma.user.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: UserAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Recipe<T extends User$RecipeArgs<ExtArgs> = {}>(args?: Subset<T, User$RecipeArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Favourite<T extends User$FavouriteArgs<ExtArgs> = {}>(args?: Subset<T, User$FavouriteArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FavouritePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly avatar_url: FieldRef<"User", 'String'>
    readonly bio: FieldRef<"User", 'String'>
    readonly created_at: FieldRef<"User", 'DateTime'>
    readonly updated_at: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User findRaw
   */
  export type UserFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * User aggregateRaw
   */
  export type UserAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * User.Recipe
   */
  export type User$RecipeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe
     */
    select?: RecipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recipe
     */
    omit?: RecipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeInclude<ExtArgs> | null
    where?: RecipeWhereInput
    orderBy?: RecipeOrderByWithRelationInput | RecipeOrderByWithRelationInput[]
    cursor?: RecipeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RecipeScalarFieldEnum | RecipeScalarFieldEnum[]
  }

  /**
   * User.Favourite
   */
  export type User$FavouriteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favourite
     */
    select?: FavouriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favourite
     */
    omit?: FavouriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavouriteInclude<ExtArgs> | null
    where?: FavouriteWhereInput
    orderBy?: FavouriteOrderByWithRelationInput | FavouriteOrderByWithRelationInput[]
    cursor?: FavouriteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FavouriteScalarFieldEnum | FavouriteScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Recipe
   */

  export type AggregateRecipe = {
    _count: RecipeCountAggregateOutputType | null
    _avg: RecipeAvgAggregateOutputType | null
    _sum: RecipeSumAggregateOutputType | null
    _min: RecipeMinAggregateOutputType | null
    _max: RecipeMaxAggregateOutputType | null
  }

  export type RecipeAvgAggregateOutputType = {
    cook_time: number | null
    prep_time: number | null
    servings: number | null
  }

  export type RecipeSumAggregateOutputType = {
    cook_time: number | null
    prep_time: number | null
    servings: number | null
  }

  export type RecipeMinAggregateOutputType = {
    id: string | null
    user_id: string | null
    title: string | null
    slug: string | null
    description: string | null
    image_url: string | null
    cook_time: number | null
    prep_time: number | null
    servings: number | null
    difficulty: string | null
    cuisine: string | null
    is_published: boolean | null
    created_at: Date | null
    updated_at: Date | null
    published_at: Date | null
  }

  export type RecipeMaxAggregateOutputType = {
    id: string | null
    user_id: string | null
    title: string | null
    slug: string | null
    description: string | null
    image_url: string | null
    cook_time: number | null
    prep_time: number | null
    servings: number | null
    difficulty: string | null
    cuisine: string | null
    is_published: boolean | null
    created_at: Date | null
    updated_at: Date | null
    published_at: Date | null
  }

  export type RecipeCountAggregateOutputType = {
    id: number
    user_id: number
    title: number
    slug: number
    description: number
    image_url: number
    cook_time: number
    prep_time: number
    servings: number
    difficulty: number
    cuisine: number
    is_published: number
    created_at: number
    updated_at: number
    published_at: number
    tags: number
    _all: number
  }


  export type RecipeAvgAggregateInputType = {
    cook_time?: true
    prep_time?: true
    servings?: true
  }

  export type RecipeSumAggregateInputType = {
    cook_time?: true
    prep_time?: true
    servings?: true
  }

  export type RecipeMinAggregateInputType = {
    id?: true
    user_id?: true
    title?: true
    slug?: true
    description?: true
    image_url?: true
    cook_time?: true
    prep_time?: true
    servings?: true
    difficulty?: true
    cuisine?: true
    is_published?: true
    created_at?: true
    updated_at?: true
    published_at?: true
  }

  export type RecipeMaxAggregateInputType = {
    id?: true
    user_id?: true
    title?: true
    slug?: true
    description?: true
    image_url?: true
    cook_time?: true
    prep_time?: true
    servings?: true
    difficulty?: true
    cuisine?: true
    is_published?: true
    created_at?: true
    updated_at?: true
    published_at?: true
  }

  export type RecipeCountAggregateInputType = {
    id?: true
    user_id?: true
    title?: true
    slug?: true
    description?: true
    image_url?: true
    cook_time?: true
    prep_time?: true
    servings?: true
    difficulty?: true
    cuisine?: true
    is_published?: true
    created_at?: true
    updated_at?: true
    published_at?: true
    tags?: true
    _all?: true
  }

  export type RecipeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Recipe to aggregate.
     */
    where?: RecipeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Recipes to fetch.
     */
    orderBy?: RecipeOrderByWithRelationInput | RecipeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RecipeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Recipes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Recipes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Recipes
    **/
    _count?: true | RecipeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RecipeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RecipeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RecipeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RecipeMaxAggregateInputType
  }

  export type GetRecipeAggregateType<T extends RecipeAggregateArgs> = {
        [P in keyof T & keyof AggregateRecipe]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRecipe[P]>
      : GetScalarType<T[P], AggregateRecipe[P]>
  }




  export type RecipeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RecipeWhereInput
    orderBy?: RecipeOrderByWithAggregationInput | RecipeOrderByWithAggregationInput[]
    by: RecipeScalarFieldEnum[] | RecipeScalarFieldEnum
    having?: RecipeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RecipeCountAggregateInputType | true
    _avg?: RecipeAvgAggregateInputType
    _sum?: RecipeSumAggregateInputType
    _min?: RecipeMinAggregateInputType
    _max?: RecipeMaxAggregateInputType
  }

  export type RecipeGroupByOutputType = {
    id: string
    user_id: string
    title: string
    slug: string
    description: string
    image_url: string | null
    cook_time: number
    prep_time: number
    servings: number
    difficulty: string
    cuisine: string | null
    is_published: boolean
    created_at: Date
    updated_at: Date
    published_at: Date | null
    tags: string[]
    _count: RecipeCountAggregateOutputType | null
    _avg: RecipeAvgAggregateOutputType | null
    _sum: RecipeSumAggregateOutputType | null
    _min: RecipeMinAggregateOutputType | null
    _max: RecipeMaxAggregateOutputType | null
  }

  type GetRecipeGroupByPayload<T extends RecipeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RecipeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RecipeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RecipeGroupByOutputType[P]>
            : GetScalarType<T[P], RecipeGroupByOutputType[P]>
        }
      >
    >


  export type RecipeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    title?: boolean
    slug?: boolean
    description?: boolean
    image_url?: boolean
    cook_time?: boolean
    prep_time?: boolean
    servings?: boolean
    difficulty?: boolean
    cuisine?: boolean
    is_published?: boolean
    created_at?: boolean
    updated_at?: boolean
    published_at?: boolean
    ingredients?: boolean | IngredientDefaultArgs<ExtArgs>
    instructions?: boolean | InstructionDefaultArgs<ExtArgs>
    tags?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    Favourite?: boolean | Recipe$FavouriteArgs<ExtArgs>
    _count?: boolean | RecipeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["recipe"]>



  export type RecipeSelectScalar = {
    id?: boolean
    user_id?: boolean
    title?: boolean
    slug?: boolean
    description?: boolean
    image_url?: boolean
    cook_time?: boolean
    prep_time?: boolean
    servings?: boolean
    difficulty?: boolean
    cuisine?: boolean
    is_published?: boolean
    created_at?: boolean
    updated_at?: boolean
    published_at?: boolean
    tags?: boolean
  }

  export type RecipeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "title" | "slug" | "description" | "image_url" | "cook_time" | "prep_time" | "servings" | "difficulty" | "cuisine" | "is_published" | "created_at" | "updated_at" | "published_at" | "ingredients" | "instructions" | "tags", ExtArgs["result"]["recipe"]>
  export type RecipeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    Favourite?: boolean | Recipe$FavouriteArgs<ExtArgs>
    _count?: boolean | RecipeCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $RecipePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Recipe"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      Favourite: Prisma.$FavouritePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      user_id: string
      title: string
      slug: string
      description: string
      image_url: string | null
      cook_time: number
      prep_time: number
      servings: number
      difficulty: string
      cuisine: string | null
      is_published: boolean
      created_at: Date
      updated_at: Date
      published_at: Date | null
      tags: string[]
    }, ExtArgs["result"]["recipe"]>
    composites: {
      ingredients: Prisma.$IngredientPayload[]
      instructions: Prisma.$InstructionPayload[]
    }
  }

  type RecipeGetPayload<S extends boolean | null | undefined | RecipeDefaultArgs> = $Result.GetResult<Prisma.$RecipePayload, S>

  type RecipeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RecipeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RecipeCountAggregateInputType | true
    }

  export interface RecipeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Recipe'], meta: { name: 'Recipe' } }
    /**
     * Find zero or one Recipe that matches the filter.
     * @param {RecipeFindUniqueArgs} args - Arguments to find a Recipe
     * @example
     * // Get one Recipe
     * const recipe = await prisma.recipe.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RecipeFindUniqueArgs>(args: SelectSubset<T, RecipeFindUniqueArgs<ExtArgs>>): Prisma__RecipeClient<$Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Recipe that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RecipeFindUniqueOrThrowArgs} args - Arguments to find a Recipe
     * @example
     * // Get one Recipe
     * const recipe = await prisma.recipe.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RecipeFindUniqueOrThrowArgs>(args: SelectSubset<T, RecipeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RecipeClient<$Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Recipe that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeFindFirstArgs} args - Arguments to find a Recipe
     * @example
     * // Get one Recipe
     * const recipe = await prisma.recipe.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RecipeFindFirstArgs>(args?: SelectSubset<T, RecipeFindFirstArgs<ExtArgs>>): Prisma__RecipeClient<$Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Recipe that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeFindFirstOrThrowArgs} args - Arguments to find a Recipe
     * @example
     * // Get one Recipe
     * const recipe = await prisma.recipe.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RecipeFindFirstOrThrowArgs>(args?: SelectSubset<T, RecipeFindFirstOrThrowArgs<ExtArgs>>): Prisma__RecipeClient<$Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Recipes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Recipes
     * const recipes = await prisma.recipe.findMany()
     * 
     * // Get first 10 Recipes
     * const recipes = await prisma.recipe.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const recipeWithIdOnly = await prisma.recipe.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RecipeFindManyArgs>(args?: SelectSubset<T, RecipeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Recipe.
     * @param {RecipeCreateArgs} args - Arguments to create a Recipe.
     * @example
     * // Create one Recipe
     * const Recipe = await prisma.recipe.create({
     *   data: {
     *     // ... data to create a Recipe
     *   }
     * })
     * 
     */
    create<T extends RecipeCreateArgs>(args: SelectSubset<T, RecipeCreateArgs<ExtArgs>>): Prisma__RecipeClient<$Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Recipes.
     * @param {RecipeCreateManyArgs} args - Arguments to create many Recipes.
     * @example
     * // Create many Recipes
     * const recipe = await prisma.recipe.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RecipeCreateManyArgs>(args?: SelectSubset<T, RecipeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Recipe.
     * @param {RecipeDeleteArgs} args - Arguments to delete one Recipe.
     * @example
     * // Delete one Recipe
     * const Recipe = await prisma.recipe.delete({
     *   where: {
     *     // ... filter to delete one Recipe
     *   }
     * })
     * 
     */
    delete<T extends RecipeDeleteArgs>(args: SelectSubset<T, RecipeDeleteArgs<ExtArgs>>): Prisma__RecipeClient<$Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Recipe.
     * @param {RecipeUpdateArgs} args - Arguments to update one Recipe.
     * @example
     * // Update one Recipe
     * const recipe = await prisma.recipe.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RecipeUpdateArgs>(args: SelectSubset<T, RecipeUpdateArgs<ExtArgs>>): Prisma__RecipeClient<$Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Recipes.
     * @param {RecipeDeleteManyArgs} args - Arguments to filter Recipes to delete.
     * @example
     * // Delete a few Recipes
     * const { count } = await prisma.recipe.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RecipeDeleteManyArgs>(args?: SelectSubset<T, RecipeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Recipes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Recipes
     * const recipe = await prisma.recipe.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RecipeUpdateManyArgs>(args: SelectSubset<T, RecipeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Recipe.
     * @param {RecipeUpsertArgs} args - Arguments to update or create a Recipe.
     * @example
     * // Update or create a Recipe
     * const recipe = await prisma.recipe.upsert({
     *   create: {
     *     // ... data to create a Recipe
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Recipe we want to update
     *   }
     * })
     */
    upsert<T extends RecipeUpsertArgs>(args: SelectSubset<T, RecipeUpsertArgs<ExtArgs>>): Prisma__RecipeClient<$Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Recipes that matches the filter.
     * @param {RecipeFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const recipe = await prisma.recipe.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: RecipeFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Recipe.
     * @param {RecipeAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const recipe = await prisma.recipe.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: RecipeAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Recipes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeCountArgs} args - Arguments to filter Recipes to count.
     * @example
     * // Count the number of Recipes
     * const count = await prisma.recipe.count({
     *   where: {
     *     // ... the filter for the Recipes we want to count
     *   }
     * })
    **/
    count<T extends RecipeCountArgs>(
      args?: Subset<T, RecipeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RecipeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Recipe.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RecipeAggregateArgs>(args: Subset<T, RecipeAggregateArgs>): Prisma.PrismaPromise<GetRecipeAggregateType<T>>

    /**
     * Group by Recipe.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RecipeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RecipeGroupByArgs['orderBy'] }
        : { orderBy?: RecipeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RecipeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRecipeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Recipe model
   */
  readonly fields: RecipeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Recipe.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RecipeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Favourite<T extends Recipe$FavouriteArgs<ExtArgs> = {}>(args?: Subset<T, Recipe$FavouriteArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FavouritePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Recipe model
   */
  interface RecipeFieldRefs {
    readonly id: FieldRef<"Recipe", 'String'>
    readonly user_id: FieldRef<"Recipe", 'String'>
    readonly title: FieldRef<"Recipe", 'String'>
    readonly slug: FieldRef<"Recipe", 'String'>
    readonly description: FieldRef<"Recipe", 'String'>
    readonly image_url: FieldRef<"Recipe", 'String'>
    readonly cook_time: FieldRef<"Recipe", 'Int'>
    readonly prep_time: FieldRef<"Recipe", 'Int'>
    readonly servings: FieldRef<"Recipe", 'Int'>
    readonly difficulty: FieldRef<"Recipe", 'String'>
    readonly cuisine: FieldRef<"Recipe", 'String'>
    readonly is_published: FieldRef<"Recipe", 'Boolean'>
    readonly created_at: FieldRef<"Recipe", 'DateTime'>
    readonly updated_at: FieldRef<"Recipe", 'DateTime'>
    readonly published_at: FieldRef<"Recipe", 'DateTime'>
    readonly tags: FieldRef<"Recipe", 'String[]'>
  }
    

  // Custom InputTypes
  /**
   * Recipe findUnique
   */
  export type RecipeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe
     */
    select?: RecipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recipe
     */
    omit?: RecipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeInclude<ExtArgs> | null
    /**
     * Filter, which Recipe to fetch.
     */
    where: RecipeWhereUniqueInput
  }

  /**
   * Recipe findUniqueOrThrow
   */
  export type RecipeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe
     */
    select?: RecipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recipe
     */
    omit?: RecipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeInclude<ExtArgs> | null
    /**
     * Filter, which Recipe to fetch.
     */
    where: RecipeWhereUniqueInput
  }

  /**
   * Recipe findFirst
   */
  export type RecipeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe
     */
    select?: RecipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recipe
     */
    omit?: RecipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeInclude<ExtArgs> | null
    /**
     * Filter, which Recipe to fetch.
     */
    where?: RecipeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Recipes to fetch.
     */
    orderBy?: RecipeOrderByWithRelationInput | RecipeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Recipes.
     */
    cursor?: RecipeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Recipes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Recipes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Recipes.
     */
    distinct?: RecipeScalarFieldEnum | RecipeScalarFieldEnum[]
  }

  /**
   * Recipe findFirstOrThrow
   */
  export type RecipeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe
     */
    select?: RecipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recipe
     */
    omit?: RecipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeInclude<ExtArgs> | null
    /**
     * Filter, which Recipe to fetch.
     */
    where?: RecipeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Recipes to fetch.
     */
    orderBy?: RecipeOrderByWithRelationInput | RecipeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Recipes.
     */
    cursor?: RecipeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Recipes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Recipes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Recipes.
     */
    distinct?: RecipeScalarFieldEnum | RecipeScalarFieldEnum[]
  }

  /**
   * Recipe findMany
   */
  export type RecipeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe
     */
    select?: RecipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recipe
     */
    omit?: RecipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeInclude<ExtArgs> | null
    /**
     * Filter, which Recipes to fetch.
     */
    where?: RecipeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Recipes to fetch.
     */
    orderBy?: RecipeOrderByWithRelationInput | RecipeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Recipes.
     */
    cursor?: RecipeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Recipes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Recipes.
     */
    skip?: number
    distinct?: RecipeScalarFieldEnum | RecipeScalarFieldEnum[]
  }

  /**
   * Recipe create
   */
  export type RecipeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe
     */
    select?: RecipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recipe
     */
    omit?: RecipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeInclude<ExtArgs> | null
    /**
     * The data needed to create a Recipe.
     */
    data: XOR<RecipeCreateInput, RecipeUncheckedCreateInput>
  }

  /**
   * Recipe createMany
   */
  export type RecipeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Recipes.
     */
    data: RecipeCreateManyInput | RecipeCreateManyInput[]
  }

  /**
   * Recipe update
   */
  export type RecipeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe
     */
    select?: RecipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recipe
     */
    omit?: RecipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeInclude<ExtArgs> | null
    /**
     * The data needed to update a Recipe.
     */
    data: XOR<RecipeUpdateInput, RecipeUncheckedUpdateInput>
    /**
     * Choose, which Recipe to update.
     */
    where: RecipeWhereUniqueInput
  }

  /**
   * Recipe updateMany
   */
  export type RecipeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Recipes.
     */
    data: XOR<RecipeUpdateManyMutationInput, RecipeUncheckedUpdateManyInput>
    /**
     * Filter which Recipes to update
     */
    where?: RecipeWhereInput
    /**
     * Limit how many Recipes to update.
     */
    limit?: number
  }

  /**
   * Recipe upsert
   */
  export type RecipeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe
     */
    select?: RecipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recipe
     */
    omit?: RecipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeInclude<ExtArgs> | null
    /**
     * The filter to search for the Recipe to update in case it exists.
     */
    where: RecipeWhereUniqueInput
    /**
     * In case the Recipe found by the `where` argument doesn't exist, create a new Recipe with this data.
     */
    create: XOR<RecipeCreateInput, RecipeUncheckedCreateInput>
    /**
     * In case the Recipe was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RecipeUpdateInput, RecipeUncheckedUpdateInput>
  }

  /**
   * Recipe delete
   */
  export type RecipeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe
     */
    select?: RecipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recipe
     */
    omit?: RecipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeInclude<ExtArgs> | null
    /**
     * Filter which Recipe to delete.
     */
    where: RecipeWhereUniqueInput
  }

  /**
   * Recipe deleteMany
   */
  export type RecipeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Recipes to delete
     */
    where?: RecipeWhereInput
    /**
     * Limit how many Recipes to delete.
     */
    limit?: number
  }

  /**
   * Recipe findRaw
   */
  export type RecipeFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Recipe aggregateRaw
   */
  export type RecipeAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Recipe.Favourite
   */
  export type Recipe$FavouriteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favourite
     */
    select?: FavouriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favourite
     */
    omit?: FavouriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavouriteInclude<ExtArgs> | null
    where?: FavouriteWhereInput
    orderBy?: FavouriteOrderByWithRelationInput | FavouriteOrderByWithRelationInput[]
    cursor?: FavouriteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FavouriteScalarFieldEnum | FavouriteScalarFieldEnum[]
  }

  /**
   * Recipe without action
   */
  export type RecipeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe
     */
    select?: RecipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recipe
     */
    omit?: RecipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeInclude<ExtArgs> | null
  }


  /**
   * Model Favourite
   */

  export type AggregateFavourite = {
    _count: FavouriteCountAggregateOutputType | null
    _min: FavouriteMinAggregateOutputType | null
    _max: FavouriteMaxAggregateOutputType | null
  }

  export type FavouriteMinAggregateOutputType = {
    id: string | null
    user_id: string | null
    recipe_id: string | null
    created_at: Date | null
  }

  export type FavouriteMaxAggregateOutputType = {
    id: string | null
    user_id: string | null
    recipe_id: string | null
    created_at: Date | null
  }

  export type FavouriteCountAggregateOutputType = {
    id: number
    user_id: number
    recipe_id: number
    created_at: number
    _all: number
  }


  export type FavouriteMinAggregateInputType = {
    id?: true
    user_id?: true
    recipe_id?: true
    created_at?: true
  }

  export type FavouriteMaxAggregateInputType = {
    id?: true
    user_id?: true
    recipe_id?: true
    created_at?: true
  }

  export type FavouriteCountAggregateInputType = {
    id?: true
    user_id?: true
    recipe_id?: true
    created_at?: true
    _all?: true
  }

  export type FavouriteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Favourite to aggregate.
     */
    where?: FavouriteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Favourites to fetch.
     */
    orderBy?: FavouriteOrderByWithRelationInput | FavouriteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FavouriteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Favourites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Favourites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Favourites
    **/
    _count?: true | FavouriteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FavouriteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FavouriteMaxAggregateInputType
  }

  export type GetFavouriteAggregateType<T extends FavouriteAggregateArgs> = {
        [P in keyof T & keyof AggregateFavourite]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFavourite[P]>
      : GetScalarType<T[P], AggregateFavourite[P]>
  }




  export type FavouriteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FavouriteWhereInput
    orderBy?: FavouriteOrderByWithAggregationInput | FavouriteOrderByWithAggregationInput[]
    by: FavouriteScalarFieldEnum[] | FavouriteScalarFieldEnum
    having?: FavouriteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FavouriteCountAggregateInputType | true
    _min?: FavouriteMinAggregateInputType
    _max?: FavouriteMaxAggregateInputType
  }

  export type FavouriteGroupByOutputType = {
    id: string
    user_id: string
    recipe_id: string
    created_at: Date
    _count: FavouriteCountAggregateOutputType | null
    _min: FavouriteMinAggregateOutputType | null
    _max: FavouriteMaxAggregateOutputType | null
  }

  type GetFavouriteGroupByPayload<T extends FavouriteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FavouriteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FavouriteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FavouriteGroupByOutputType[P]>
            : GetScalarType<T[P], FavouriteGroupByOutputType[P]>
        }
      >
    >


  export type FavouriteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    recipe_id?: boolean
    created_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    recipe?: boolean | RecipeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["favourite"]>



  export type FavouriteSelectScalar = {
    id?: boolean
    user_id?: boolean
    recipe_id?: boolean
    created_at?: boolean
  }

  export type FavouriteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "recipe_id" | "created_at", ExtArgs["result"]["favourite"]>
  export type FavouriteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    recipe?: boolean | RecipeDefaultArgs<ExtArgs>
  }

  export type $FavouritePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Favourite"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      recipe: Prisma.$RecipePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      user_id: string
      recipe_id: string
      created_at: Date
    }, ExtArgs["result"]["favourite"]>
    composites: {}
  }

  type FavouriteGetPayload<S extends boolean | null | undefined | FavouriteDefaultArgs> = $Result.GetResult<Prisma.$FavouritePayload, S>

  type FavouriteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FavouriteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FavouriteCountAggregateInputType | true
    }

  export interface FavouriteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Favourite'], meta: { name: 'Favourite' } }
    /**
     * Find zero or one Favourite that matches the filter.
     * @param {FavouriteFindUniqueArgs} args - Arguments to find a Favourite
     * @example
     * // Get one Favourite
     * const favourite = await prisma.favourite.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FavouriteFindUniqueArgs>(args: SelectSubset<T, FavouriteFindUniqueArgs<ExtArgs>>): Prisma__FavouriteClient<$Result.GetResult<Prisma.$FavouritePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Favourite that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FavouriteFindUniqueOrThrowArgs} args - Arguments to find a Favourite
     * @example
     * // Get one Favourite
     * const favourite = await prisma.favourite.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FavouriteFindUniqueOrThrowArgs>(args: SelectSubset<T, FavouriteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FavouriteClient<$Result.GetResult<Prisma.$FavouritePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Favourite that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavouriteFindFirstArgs} args - Arguments to find a Favourite
     * @example
     * // Get one Favourite
     * const favourite = await prisma.favourite.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FavouriteFindFirstArgs>(args?: SelectSubset<T, FavouriteFindFirstArgs<ExtArgs>>): Prisma__FavouriteClient<$Result.GetResult<Prisma.$FavouritePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Favourite that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavouriteFindFirstOrThrowArgs} args - Arguments to find a Favourite
     * @example
     * // Get one Favourite
     * const favourite = await prisma.favourite.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FavouriteFindFirstOrThrowArgs>(args?: SelectSubset<T, FavouriteFindFirstOrThrowArgs<ExtArgs>>): Prisma__FavouriteClient<$Result.GetResult<Prisma.$FavouritePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Favourites that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavouriteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Favourites
     * const favourites = await prisma.favourite.findMany()
     * 
     * // Get first 10 Favourites
     * const favourites = await prisma.favourite.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const favouriteWithIdOnly = await prisma.favourite.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FavouriteFindManyArgs>(args?: SelectSubset<T, FavouriteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FavouritePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Favourite.
     * @param {FavouriteCreateArgs} args - Arguments to create a Favourite.
     * @example
     * // Create one Favourite
     * const Favourite = await prisma.favourite.create({
     *   data: {
     *     // ... data to create a Favourite
     *   }
     * })
     * 
     */
    create<T extends FavouriteCreateArgs>(args: SelectSubset<T, FavouriteCreateArgs<ExtArgs>>): Prisma__FavouriteClient<$Result.GetResult<Prisma.$FavouritePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Favourites.
     * @param {FavouriteCreateManyArgs} args - Arguments to create many Favourites.
     * @example
     * // Create many Favourites
     * const favourite = await prisma.favourite.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FavouriteCreateManyArgs>(args?: SelectSubset<T, FavouriteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Favourite.
     * @param {FavouriteDeleteArgs} args - Arguments to delete one Favourite.
     * @example
     * // Delete one Favourite
     * const Favourite = await prisma.favourite.delete({
     *   where: {
     *     // ... filter to delete one Favourite
     *   }
     * })
     * 
     */
    delete<T extends FavouriteDeleteArgs>(args: SelectSubset<T, FavouriteDeleteArgs<ExtArgs>>): Prisma__FavouriteClient<$Result.GetResult<Prisma.$FavouritePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Favourite.
     * @param {FavouriteUpdateArgs} args - Arguments to update one Favourite.
     * @example
     * // Update one Favourite
     * const favourite = await prisma.favourite.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FavouriteUpdateArgs>(args: SelectSubset<T, FavouriteUpdateArgs<ExtArgs>>): Prisma__FavouriteClient<$Result.GetResult<Prisma.$FavouritePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Favourites.
     * @param {FavouriteDeleteManyArgs} args - Arguments to filter Favourites to delete.
     * @example
     * // Delete a few Favourites
     * const { count } = await prisma.favourite.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FavouriteDeleteManyArgs>(args?: SelectSubset<T, FavouriteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Favourites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavouriteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Favourites
     * const favourite = await prisma.favourite.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FavouriteUpdateManyArgs>(args: SelectSubset<T, FavouriteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Favourite.
     * @param {FavouriteUpsertArgs} args - Arguments to update or create a Favourite.
     * @example
     * // Update or create a Favourite
     * const favourite = await prisma.favourite.upsert({
     *   create: {
     *     // ... data to create a Favourite
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Favourite we want to update
     *   }
     * })
     */
    upsert<T extends FavouriteUpsertArgs>(args: SelectSubset<T, FavouriteUpsertArgs<ExtArgs>>): Prisma__FavouriteClient<$Result.GetResult<Prisma.$FavouritePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Favourites that matches the filter.
     * @param {FavouriteFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const favourite = await prisma.favourite.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: FavouriteFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Favourite.
     * @param {FavouriteAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const favourite = await prisma.favourite.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: FavouriteAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Favourites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavouriteCountArgs} args - Arguments to filter Favourites to count.
     * @example
     * // Count the number of Favourites
     * const count = await prisma.favourite.count({
     *   where: {
     *     // ... the filter for the Favourites we want to count
     *   }
     * })
    **/
    count<T extends FavouriteCountArgs>(
      args?: Subset<T, FavouriteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FavouriteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Favourite.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavouriteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FavouriteAggregateArgs>(args: Subset<T, FavouriteAggregateArgs>): Prisma.PrismaPromise<GetFavouriteAggregateType<T>>

    /**
     * Group by Favourite.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavouriteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FavouriteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FavouriteGroupByArgs['orderBy'] }
        : { orderBy?: FavouriteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FavouriteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFavouriteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Favourite model
   */
  readonly fields: FavouriteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Favourite.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FavouriteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    recipe<T extends RecipeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RecipeDefaultArgs<ExtArgs>>): Prisma__RecipeClient<$Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Favourite model
   */
  interface FavouriteFieldRefs {
    readonly id: FieldRef<"Favourite", 'String'>
    readonly user_id: FieldRef<"Favourite", 'String'>
    readonly recipe_id: FieldRef<"Favourite", 'String'>
    readonly created_at: FieldRef<"Favourite", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Favourite findUnique
   */
  export type FavouriteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favourite
     */
    select?: FavouriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favourite
     */
    omit?: FavouriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavouriteInclude<ExtArgs> | null
    /**
     * Filter, which Favourite to fetch.
     */
    where: FavouriteWhereUniqueInput
  }

  /**
   * Favourite findUniqueOrThrow
   */
  export type FavouriteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favourite
     */
    select?: FavouriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favourite
     */
    omit?: FavouriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavouriteInclude<ExtArgs> | null
    /**
     * Filter, which Favourite to fetch.
     */
    where: FavouriteWhereUniqueInput
  }

  /**
   * Favourite findFirst
   */
  export type FavouriteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favourite
     */
    select?: FavouriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favourite
     */
    omit?: FavouriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavouriteInclude<ExtArgs> | null
    /**
     * Filter, which Favourite to fetch.
     */
    where?: FavouriteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Favourites to fetch.
     */
    orderBy?: FavouriteOrderByWithRelationInput | FavouriteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Favourites.
     */
    cursor?: FavouriteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Favourites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Favourites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Favourites.
     */
    distinct?: FavouriteScalarFieldEnum | FavouriteScalarFieldEnum[]
  }

  /**
   * Favourite findFirstOrThrow
   */
  export type FavouriteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favourite
     */
    select?: FavouriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favourite
     */
    omit?: FavouriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavouriteInclude<ExtArgs> | null
    /**
     * Filter, which Favourite to fetch.
     */
    where?: FavouriteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Favourites to fetch.
     */
    orderBy?: FavouriteOrderByWithRelationInput | FavouriteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Favourites.
     */
    cursor?: FavouriteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Favourites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Favourites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Favourites.
     */
    distinct?: FavouriteScalarFieldEnum | FavouriteScalarFieldEnum[]
  }

  /**
   * Favourite findMany
   */
  export type FavouriteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favourite
     */
    select?: FavouriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favourite
     */
    omit?: FavouriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavouriteInclude<ExtArgs> | null
    /**
     * Filter, which Favourites to fetch.
     */
    where?: FavouriteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Favourites to fetch.
     */
    orderBy?: FavouriteOrderByWithRelationInput | FavouriteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Favourites.
     */
    cursor?: FavouriteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Favourites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Favourites.
     */
    skip?: number
    distinct?: FavouriteScalarFieldEnum | FavouriteScalarFieldEnum[]
  }

  /**
   * Favourite create
   */
  export type FavouriteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favourite
     */
    select?: FavouriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favourite
     */
    omit?: FavouriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavouriteInclude<ExtArgs> | null
    /**
     * The data needed to create a Favourite.
     */
    data: XOR<FavouriteCreateInput, FavouriteUncheckedCreateInput>
  }

  /**
   * Favourite createMany
   */
  export type FavouriteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Favourites.
     */
    data: FavouriteCreateManyInput | FavouriteCreateManyInput[]
  }

  /**
   * Favourite update
   */
  export type FavouriteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favourite
     */
    select?: FavouriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favourite
     */
    omit?: FavouriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavouriteInclude<ExtArgs> | null
    /**
     * The data needed to update a Favourite.
     */
    data: XOR<FavouriteUpdateInput, FavouriteUncheckedUpdateInput>
    /**
     * Choose, which Favourite to update.
     */
    where: FavouriteWhereUniqueInput
  }

  /**
   * Favourite updateMany
   */
  export type FavouriteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Favourites.
     */
    data: XOR<FavouriteUpdateManyMutationInput, FavouriteUncheckedUpdateManyInput>
    /**
     * Filter which Favourites to update
     */
    where?: FavouriteWhereInput
    /**
     * Limit how many Favourites to update.
     */
    limit?: number
  }

  /**
   * Favourite upsert
   */
  export type FavouriteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favourite
     */
    select?: FavouriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favourite
     */
    omit?: FavouriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavouriteInclude<ExtArgs> | null
    /**
     * The filter to search for the Favourite to update in case it exists.
     */
    where: FavouriteWhereUniqueInput
    /**
     * In case the Favourite found by the `where` argument doesn't exist, create a new Favourite with this data.
     */
    create: XOR<FavouriteCreateInput, FavouriteUncheckedCreateInput>
    /**
     * In case the Favourite was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FavouriteUpdateInput, FavouriteUncheckedUpdateInput>
  }

  /**
   * Favourite delete
   */
  export type FavouriteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favourite
     */
    select?: FavouriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favourite
     */
    omit?: FavouriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavouriteInclude<ExtArgs> | null
    /**
     * Filter which Favourite to delete.
     */
    where: FavouriteWhereUniqueInput
  }

  /**
   * Favourite deleteMany
   */
  export type FavouriteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Favourites to delete
     */
    where?: FavouriteWhereInput
    /**
     * Limit how many Favourites to delete.
     */
    limit?: number
  }

  /**
   * Favourite findRaw
   */
  export type FavouriteFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Favourite aggregateRaw
   */
  export type FavouriteAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Favourite without action
   */
  export type FavouriteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favourite
     */
    select?: FavouriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favourite
     */
    omit?: FavouriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavouriteInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    avatar_url: 'avatar_url',
    bio: 'bio',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const RecipeScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    title: 'title',
    slug: 'slug',
    description: 'description',
    image_url: 'image_url',
    cook_time: 'cook_time',
    prep_time: 'prep_time',
    servings: 'servings',
    difficulty: 'difficulty',
    cuisine: 'cuisine',
    is_published: 'is_published',
    created_at: 'created_at',
    updated_at: 'updated_at',
    published_at: 'published_at',
    tags: 'tags'
  };

  export type RecipeScalarFieldEnum = (typeof RecipeScalarFieldEnum)[keyof typeof RecipeScalarFieldEnum]


  export const FavouriteScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    recipe_id: 'recipe_id',
    created_at: 'created_at'
  };

  export type FavouriteScalarFieldEnum = (typeof FavouriteScalarFieldEnum)[keyof typeof FavouriteScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    avatar_url?: StringNullableFilter<"User"> | string | null
    bio?: StringNullableFilter<"User"> | string | null
    created_at?: DateTimeFilter<"User"> | Date | string
    updated_at?: DateTimeFilter<"User"> | Date | string
    Recipe?: RecipeListRelationFilter
    Favourite?: FavouriteListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    avatar_url?: SortOrder
    bio?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    Recipe?: RecipeOrderByRelationAggregateInput
    Favourite?: FavouriteOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    avatar_url?: StringNullableFilter<"User"> | string | null
    bio?: StringNullableFilter<"User"> | string | null
    created_at?: DateTimeFilter<"User"> | Date | string
    updated_at?: DateTimeFilter<"User"> | Date | string
    Recipe?: RecipeListRelationFilter
    Favourite?: FavouriteListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    avatar_url?: SortOrder
    bio?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    avatar_url?: StringNullableWithAggregatesFilter<"User"> | string | null
    bio?: StringNullableWithAggregatesFilter<"User"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type RecipeWhereInput = {
    AND?: RecipeWhereInput | RecipeWhereInput[]
    OR?: RecipeWhereInput[]
    NOT?: RecipeWhereInput | RecipeWhereInput[]
    id?: StringFilter<"Recipe"> | string
    user_id?: StringFilter<"Recipe"> | string
    title?: StringFilter<"Recipe"> | string
    slug?: StringFilter<"Recipe"> | string
    description?: StringFilter<"Recipe"> | string
    image_url?: StringNullableFilter<"Recipe"> | string | null
    cook_time?: IntFilter<"Recipe"> | number
    prep_time?: IntFilter<"Recipe"> | number
    servings?: IntFilter<"Recipe"> | number
    difficulty?: StringFilter<"Recipe"> | string
    cuisine?: StringNullableFilter<"Recipe"> | string | null
    is_published?: BoolFilter<"Recipe"> | boolean
    created_at?: DateTimeFilter<"Recipe"> | Date | string
    updated_at?: DateTimeFilter<"Recipe"> | Date | string
    published_at?: DateTimeNullableFilter<"Recipe"> | Date | string | null
    ingredients?: IngredientCompositeListFilter | IngredientObjectEqualityInput[]
    instructions?: InstructionCompositeListFilter | InstructionObjectEqualityInput[]
    tags?: StringNullableListFilter<"Recipe">
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    Favourite?: FavouriteListRelationFilter
  }

  export type RecipeOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    image_url?: SortOrder
    cook_time?: SortOrder
    prep_time?: SortOrder
    servings?: SortOrder
    difficulty?: SortOrder
    cuisine?: SortOrder
    is_published?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    published_at?: SortOrder
    ingredients?: IngredientOrderByCompositeAggregateInput
    instructions?: InstructionOrderByCompositeAggregateInput
    tags?: SortOrder
    user?: UserOrderByWithRelationInput
    Favourite?: FavouriteOrderByRelationAggregateInput
  }

  export type RecipeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    AND?: RecipeWhereInput | RecipeWhereInput[]
    OR?: RecipeWhereInput[]
    NOT?: RecipeWhereInput | RecipeWhereInput[]
    user_id?: StringFilter<"Recipe"> | string
    title?: StringFilter<"Recipe"> | string
    description?: StringFilter<"Recipe"> | string
    image_url?: StringNullableFilter<"Recipe"> | string | null
    cook_time?: IntFilter<"Recipe"> | number
    prep_time?: IntFilter<"Recipe"> | number
    servings?: IntFilter<"Recipe"> | number
    difficulty?: StringFilter<"Recipe"> | string
    cuisine?: StringNullableFilter<"Recipe"> | string | null
    is_published?: BoolFilter<"Recipe"> | boolean
    created_at?: DateTimeFilter<"Recipe"> | Date | string
    updated_at?: DateTimeFilter<"Recipe"> | Date | string
    published_at?: DateTimeNullableFilter<"Recipe"> | Date | string | null
    ingredients?: IngredientCompositeListFilter | IngredientObjectEqualityInput[]
    instructions?: InstructionCompositeListFilter | InstructionObjectEqualityInput[]
    tags?: StringNullableListFilter<"Recipe">
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    Favourite?: FavouriteListRelationFilter
  }, "id" | "slug">

  export type RecipeOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    image_url?: SortOrder
    cook_time?: SortOrder
    prep_time?: SortOrder
    servings?: SortOrder
    difficulty?: SortOrder
    cuisine?: SortOrder
    is_published?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    published_at?: SortOrder
    tags?: SortOrder
    _count?: RecipeCountOrderByAggregateInput
    _avg?: RecipeAvgOrderByAggregateInput
    _max?: RecipeMaxOrderByAggregateInput
    _min?: RecipeMinOrderByAggregateInput
    _sum?: RecipeSumOrderByAggregateInput
  }

  export type RecipeScalarWhereWithAggregatesInput = {
    AND?: RecipeScalarWhereWithAggregatesInput | RecipeScalarWhereWithAggregatesInput[]
    OR?: RecipeScalarWhereWithAggregatesInput[]
    NOT?: RecipeScalarWhereWithAggregatesInput | RecipeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Recipe"> | string
    user_id?: StringWithAggregatesFilter<"Recipe"> | string
    title?: StringWithAggregatesFilter<"Recipe"> | string
    slug?: StringWithAggregatesFilter<"Recipe"> | string
    description?: StringWithAggregatesFilter<"Recipe"> | string
    image_url?: StringNullableWithAggregatesFilter<"Recipe"> | string | null
    cook_time?: IntWithAggregatesFilter<"Recipe"> | number
    prep_time?: IntWithAggregatesFilter<"Recipe"> | number
    servings?: IntWithAggregatesFilter<"Recipe"> | number
    difficulty?: StringWithAggregatesFilter<"Recipe"> | string
    cuisine?: StringNullableWithAggregatesFilter<"Recipe"> | string | null
    is_published?: BoolWithAggregatesFilter<"Recipe"> | boolean
    created_at?: DateTimeWithAggregatesFilter<"Recipe"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Recipe"> | Date | string
    published_at?: DateTimeNullableWithAggregatesFilter<"Recipe"> | Date | string | null
    tags?: StringNullableListFilter<"Recipe">
  }

  export type FavouriteWhereInput = {
    AND?: FavouriteWhereInput | FavouriteWhereInput[]
    OR?: FavouriteWhereInput[]
    NOT?: FavouriteWhereInput | FavouriteWhereInput[]
    id?: StringFilter<"Favourite"> | string
    user_id?: StringFilter<"Favourite"> | string
    recipe_id?: StringFilter<"Favourite"> | string
    created_at?: DateTimeFilter<"Favourite"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    recipe?: XOR<RecipeScalarRelationFilter, RecipeWhereInput>
  }

  export type FavouriteOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    recipe_id?: SortOrder
    created_at?: SortOrder
    user?: UserOrderByWithRelationInput
    recipe?: RecipeOrderByWithRelationInput
  }

  export type FavouriteWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    user_id_recipe_id?: FavouriteUser_idRecipe_idCompoundUniqueInput
    AND?: FavouriteWhereInput | FavouriteWhereInput[]
    OR?: FavouriteWhereInput[]
    NOT?: FavouriteWhereInput | FavouriteWhereInput[]
    user_id?: StringFilter<"Favourite"> | string
    recipe_id?: StringFilter<"Favourite"> | string
    created_at?: DateTimeFilter<"Favourite"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    recipe?: XOR<RecipeScalarRelationFilter, RecipeWhereInput>
  }, "id" | "user_id_recipe_id">

  export type FavouriteOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    recipe_id?: SortOrder
    created_at?: SortOrder
    _count?: FavouriteCountOrderByAggregateInput
    _max?: FavouriteMaxOrderByAggregateInput
    _min?: FavouriteMinOrderByAggregateInput
  }

  export type FavouriteScalarWhereWithAggregatesInput = {
    AND?: FavouriteScalarWhereWithAggregatesInput | FavouriteScalarWhereWithAggregatesInput[]
    OR?: FavouriteScalarWhereWithAggregatesInput[]
    NOT?: FavouriteScalarWhereWithAggregatesInput | FavouriteScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Favourite"> | string
    user_id?: StringWithAggregatesFilter<"Favourite"> | string
    recipe_id?: StringWithAggregatesFilter<"Favourite"> | string
    created_at?: DateTimeWithAggregatesFilter<"Favourite"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    password: string
    avatar_url?: string | null
    bio?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    Recipe?: RecipeCreateNestedManyWithoutUserInput
    Favourite?: FavouriteCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    password: string
    avatar_url?: string | null
    bio?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    Recipe?: RecipeUncheckedCreateNestedManyWithoutUserInput
    Favourite?: FavouriteUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Recipe?: RecipeUpdateManyWithoutUserNestedInput
    Favourite?: FavouriteUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Recipe?: RecipeUncheckedUpdateManyWithoutUserNestedInput
    Favourite?: FavouriteUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    password: string
    avatar_url?: string | null
    bio?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecipeCreateInput = {
    id?: string
    title: string
    slug: string
    description: string
    image_url?: string | null
    cook_time: number
    prep_time: number
    servings: number
    difficulty: string
    cuisine?: string | null
    is_published?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    published_at?: Date | string | null
    ingredients?: XOR<IngredientListCreateEnvelopeInput, IngredientCreateInput> | IngredientCreateInput[]
    instructions?: XOR<InstructionListCreateEnvelopeInput, InstructionCreateInput> | InstructionCreateInput[]
    tags?: RecipeCreatetagsInput | string[]
    user: UserCreateNestedOneWithoutRecipeInput
    Favourite?: FavouriteCreateNestedManyWithoutRecipeInput
  }

  export type RecipeUncheckedCreateInput = {
    id?: string
    user_id: string
    title: string
    slug: string
    description: string
    image_url?: string | null
    cook_time: number
    prep_time: number
    servings: number
    difficulty: string
    cuisine?: string | null
    is_published?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    published_at?: Date | string | null
    ingredients?: XOR<IngredientListCreateEnvelopeInput, IngredientCreateInput> | IngredientCreateInput[]
    instructions?: XOR<InstructionListCreateEnvelopeInput, InstructionCreateInput> | InstructionCreateInput[]
    tags?: RecipeCreatetagsInput | string[]
    Favourite?: FavouriteUncheckedCreateNestedManyWithoutRecipeInput
  }

  export type RecipeUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    cook_time?: IntFieldUpdateOperationsInput | number
    prep_time?: IntFieldUpdateOperationsInput | number
    servings?: IntFieldUpdateOperationsInput | number
    difficulty?: StringFieldUpdateOperationsInput | string
    cuisine?: NullableStringFieldUpdateOperationsInput | string | null
    is_published?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    published_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ingredients?: XOR<IngredientListUpdateEnvelopeInput, IngredientCreateInput> | IngredientCreateInput[]
    instructions?: XOR<InstructionListUpdateEnvelopeInput, InstructionCreateInput> | InstructionCreateInput[]
    tags?: RecipeUpdatetagsInput | string[]
    user?: UserUpdateOneRequiredWithoutRecipeNestedInput
    Favourite?: FavouriteUpdateManyWithoutRecipeNestedInput
  }

  export type RecipeUncheckedUpdateInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    cook_time?: IntFieldUpdateOperationsInput | number
    prep_time?: IntFieldUpdateOperationsInput | number
    servings?: IntFieldUpdateOperationsInput | number
    difficulty?: StringFieldUpdateOperationsInput | string
    cuisine?: NullableStringFieldUpdateOperationsInput | string | null
    is_published?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    published_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ingredients?: XOR<IngredientListUpdateEnvelopeInput, IngredientCreateInput> | IngredientCreateInput[]
    instructions?: XOR<InstructionListUpdateEnvelopeInput, InstructionCreateInput> | InstructionCreateInput[]
    tags?: RecipeUpdatetagsInput | string[]
    Favourite?: FavouriteUncheckedUpdateManyWithoutRecipeNestedInput
  }

  export type RecipeCreateManyInput = {
    id?: string
    user_id: string
    title: string
    slug: string
    description: string
    image_url?: string | null
    cook_time: number
    prep_time: number
    servings: number
    difficulty: string
    cuisine?: string | null
    is_published?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    published_at?: Date | string | null
    ingredients?: XOR<IngredientListCreateEnvelopeInput, IngredientCreateInput> | IngredientCreateInput[]
    instructions?: XOR<InstructionListCreateEnvelopeInput, InstructionCreateInput> | InstructionCreateInput[]
    tags?: RecipeCreatetagsInput | string[]
  }

  export type RecipeUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    cook_time?: IntFieldUpdateOperationsInput | number
    prep_time?: IntFieldUpdateOperationsInput | number
    servings?: IntFieldUpdateOperationsInput | number
    difficulty?: StringFieldUpdateOperationsInput | string
    cuisine?: NullableStringFieldUpdateOperationsInput | string | null
    is_published?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    published_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ingredients?: XOR<IngredientListUpdateEnvelopeInput, IngredientCreateInput> | IngredientCreateInput[]
    instructions?: XOR<InstructionListUpdateEnvelopeInput, InstructionCreateInput> | InstructionCreateInput[]
    tags?: RecipeUpdatetagsInput | string[]
  }

  export type RecipeUncheckedUpdateManyInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    cook_time?: IntFieldUpdateOperationsInput | number
    prep_time?: IntFieldUpdateOperationsInput | number
    servings?: IntFieldUpdateOperationsInput | number
    difficulty?: StringFieldUpdateOperationsInput | string
    cuisine?: NullableStringFieldUpdateOperationsInput | string | null
    is_published?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    published_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ingredients?: XOR<IngredientListUpdateEnvelopeInput, IngredientCreateInput> | IngredientCreateInput[]
    instructions?: XOR<InstructionListUpdateEnvelopeInput, InstructionCreateInput> | InstructionCreateInput[]
    tags?: RecipeUpdatetagsInput | string[]
  }

  export type FavouriteCreateInput = {
    id?: string
    created_at?: Date | string
    user: UserCreateNestedOneWithoutFavouriteInput
    recipe: RecipeCreateNestedOneWithoutFavouriteInput
  }

  export type FavouriteUncheckedCreateInput = {
    id?: string
    user_id: string
    recipe_id: string
    created_at?: Date | string
  }

  export type FavouriteUpdateInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutFavouriteNestedInput
    recipe?: RecipeUpdateOneRequiredWithoutFavouriteNestedInput
  }

  export type FavouriteUncheckedUpdateInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    recipe_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FavouriteCreateManyInput = {
    id?: string
    user_id: string
    recipe_id: string
    created_at?: Date | string
  }

  export type FavouriteUpdateManyMutationInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FavouriteUncheckedUpdateManyInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    recipe_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
    isSet?: boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type RecipeListRelationFilter = {
    every?: RecipeWhereInput
    some?: RecipeWhereInput
    none?: RecipeWhereInput
  }

  export type FavouriteListRelationFilter = {
    every?: FavouriteWhereInput
    some?: FavouriteWhereInput
    none?: FavouriteWhereInput
  }

  export type RecipeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FavouriteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    avatar_url?: SortOrder
    bio?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    avatar_url?: SortOrder
    bio?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    avatar_url?: SortOrder
    bio?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
    isSet?: boolean
  }

  export type IngredientCompositeListFilter = {
    equals?: IngredientObjectEqualityInput[]
    every?: IngredientWhereInput
    some?: IngredientWhereInput
    none?: IngredientWhereInput
    isEmpty?: boolean
    isSet?: boolean
  }

  export type IngredientObjectEqualityInput = {
    description: string
    quantity?: number | null
    unit?: string | null
    order_index: number
  }

  export type InstructionCompositeListFilter = {
    equals?: InstructionObjectEqualityInput[]
    every?: InstructionWhereInput
    some?: InstructionWhereInput
    none?: InstructionWhereInput
    isEmpty?: boolean
    isSet?: boolean
  }

  export type InstructionObjectEqualityInput = {
    step_number: number
    description: string
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type IngredientOrderByCompositeAggregateInput = {
    _count?: SortOrder
  }

  export type InstructionOrderByCompositeAggregateInput = {
    _count?: SortOrder
  }

  export type RecipeCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    image_url?: SortOrder
    cook_time?: SortOrder
    prep_time?: SortOrder
    servings?: SortOrder
    difficulty?: SortOrder
    cuisine?: SortOrder
    is_published?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    published_at?: SortOrder
    tags?: SortOrder
  }

  export type RecipeAvgOrderByAggregateInput = {
    cook_time?: SortOrder
    prep_time?: SortOrder
    servings?: SortOrder
  }

  export type RecipeMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    image_url?: SortOrder
    cook_time?: SortOrder
    prep_time?: SortOrder
    servings?: SortOrder
    difficulty?: SortOrder
    cuisine?: SortOrder
    is_published?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    published_at?: SortOrder
  }

  export type RecipeMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    image_url?: SortOrder
    cook_time?: SortOrder
    prep_time?: SortOrder
    servings?: SortOrder
    difficulty?: SortOrder
    cuisine?: SortOrder
    is_published?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    published_at?: SortOrder
  }

  export type RecipeSumOrderByAggregateInput = {
    cook_time?: SortOrder
    prep_time?: SortOrder
    servings?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type RecipeScalarRelationFilter = {
    is?: RecipeWhereInput
    isNot?: RecipeWhereInput
  }

  export type FavouriteUser_idRecipe_idCompoundUniqueInput = {
    user_id: string
    recipe_id: string
  }

  export type FavouriteCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    recipe_id?: SortOrder
    created_at?: SortOrder
  }

  export type FavouriteMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    recipe_id?: SortOrder
    created_at?: SortOrder
  }

  export type FavouriteMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    recipe_id?: SortOrder
    created_at?: SortOrder
  }

  export type RecipeCreateNestedManyWithoutUserInput = {
    create?: XOR<RecipeCreateWithoutUserInput, RecipeUncheckedCreateWithoutUserInput> | RecipeCreateWithoutUserInput[] | RecipeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RecipeCreateOrConnectWithoutUserInput | RecipeCreateOrConnectWithoutUserInput[]
    createMany?: RecipeCreateManyUserInputEnvelope
    connect?: RecipeWhereUniqueInput | RecipeWhereUniqueInput[]
  }

  export type FavouriteCreateNestedManyWithoutUserInput = {
    create?: XOR<FavouriteCreateWithoutUserInput, FavouriteUncheckedCreateWithoutUserInput> | FavouriteCreateWithoutUserInput[] | FavouriteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FavouriteCreateOrConnectWithoutUserInput | FavouriteCreateOrConnectWithoutUserInput[]
    createMany?: FavouriteCreateManyUserInputEnvelope
    connect?: FavouriteWhereUniqueInput | FavouriteWhereUniqueInput[]
  }

  export type RecipeUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<RecipeCreateWithoutUserInput, RecipeUncheckedCreateWithoutUserInput> | RecipeCreateWithoutUserInput[] | RecipeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RecipeCreateOrConnectWithoutUserInput | RecipeCreateOrConnectWithoutUserInput[]
    createMany?: RecipeCreateManyUserInputEnvelope
    connect?: RecipeWhereUniqueInput | RecipeWhereUniqueInput[]
  }

  export type FavouriteUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<FavouriteCreateWithoutUserInput, FavouriteUncheckedCreateWithoutUserInput> | FavouriteCreateWithoutUserInput[] | FavouriteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FavouriteCreateOrConnectWithoutUserInput | FavouriteCreateOrConnectWithoutUserInput[]
    createMany?: FavouriteCreateManyUserInputEnvelope
    connect?: FavouriteWhereUniqueInput | FavouriteWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
    unset?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type RecipeUpdateManyWithoutUserNestedInput = {
    create?: XOR<RecipeCreateWithoutUserInput, RecipeUncheckedCreateWithoutUserInput> | RecipeCreateWithoutUserInput[] | RecipeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RecipeCreateOrConnectWithoutUserInput | RecipeCreateOrConnectWithoutUserInput[]
    upsert?: RecipeUpsertWithWhereUniqueWithoutUserInput | RecipeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RecipeCreateManyUserInputEnvelope
    set?: RecipeWhereUniqueInput | RecipeWhereUniqueInput[]
    disconnect?: RecipeWhereUniqueInput | RecipeWhereUniqueInput[]
    delete?: RecipeWhereUniqueInput | RecipeWhereUniqueInput[]
    connect?: RecipeWhereUniqueInput | RecipeWhereUniqueInput[]
    update?: RecipeUpdateWithWhereUniqueWithoutUserInput | RecipeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RecipeUpdateManyWithWhereWithoutUserInput | RecipeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RecipeScalarWhereInput | RecipeScalarWhereInput[]
  }

  export type FavouriteUpdateManyWithoutUserNestedInput = {
    create?: XOR<FavouriteCreateWithoutUserInput, FavouriteUncheckedCreateWithoutUserInput> | FavouriteCreateWithoutUserInput[] | FavouriteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FavouriteCreateOrConnectWithoutUserInput | FavouriteCreateOrConnectWithoutUserInput[]
    upsert?: FavouriteUpsertWithWhereUniqueWithoutUserInput | FavouriteUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FavouriteCreateManyUserInputEnvelope
    set?: FavouriteWhereUniqueInput | FavouriteWhereUniqueInput[]
    disconnect?: FavouriteWhereUniqueInput | FavouriteWhereUniqueInput[]
    delete?: FavouriteWhereUniqueInput | FavouriteWhereUniqueInput[]
    connect?: FavouriteWhereUniqueInput | FavouriteWhereUniqueInput[]
    update?: FavouriteUpdateWithWhereUniqueWithoutUserInput | FavouriteUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FavouriteUpdateManyWithWhereWithoutUserInput | FavouriteUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FavouriteScalarWhereInput | FavouriteScalarWhereInput[]
  }

  export type RecipeUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<RecipeCreateWithoutUserInput, RecipeUncheckedCreateWithoutUserInput> | RecipeCreateWithoutUserInput[] | RecipeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RecipeCreateOrConnectWithoutUserInput | RecipeCreateOrConnectWithoutUserInput[]
    upsert?: RecipeUpsertWithWhereUniqueWithoutUserInput | RecipeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RecipeCreateManyUserInputEnvelope
    set?: RecipeWhereUniqueInput | RecipeWhereUniqueInput[]
    disconnect?: RecipeWhereUniqueInput | RecipeWhereUniqueInput[]
    delete?: RecipeWhereUniqueInput | RecipeWhereUniqueInput[]
    connect?: RecipeWhereUniqueInput | RecipeWhereUniqueInput[]
    update?: RecipeUpdateWithWhereUniqueWithoutUserInput | RecipeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RecipeUpdateManyWithWhereWithoutUserInput | RecipeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RecipeScalarWhereInput | RecipeScalarWhereInput[]
  }

  export type FavouriteUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<FavouriteCreateWithoutUserInput, FavouriteUncheckedCreateWithoutUserInput> | FavouriteCreateWithoutUserInput[] | FavouriteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FavouriteCreateOrConnectWithoutUserInput | FavouriteCreateOrConnectWithoutUserInput[]
    upsert?: FavouriteUpsertWithWhereUniqueWithoutUserInput | FavouriteUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FavouriteCreateManyUserInputEnvelope
    set?: FavouriteWhereUniqueInput | FavouriteWhereUniqueInput[]
    disconnect?: FavouriteWhereUniqueInput | FavouriteWhereUniqueInput[]
    delete?: FavouriteWhereUniqueInput | FavouriteWhereUniqueInput[]
    connect?: FavouriteWhereUniqueInput | FavouriteWhereUniqueInput[]
    update?: FavouriteUpdateWithWhereUniqueWithoutUserInput | FavouriteUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FavouriteUpdateManyWithWhereWithoutUserInput | FavouriteUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FavouriteScalarWhereInput | FavouriteScalarWhereInput[]
  }

  export type IngredientListCreateEnvelopeInput = {
    set?: IngredientCreateInput | IngredientCreateInput[]
  }

  export type IngredientCreateInput = {
    description: string
    quantity?: number | null
    unit?: string | null
    order_index: number
  }

  export type InstructionListCreateEnvelopeInput = {
    set?: InstructionCreateInput | InstructionCreateInput[]
  }

  export type InstructionCreateInput = {
    step_number: number
    description: string
  }

  export type RecipeCreatetagsInput = {
    set: string[]
  }

  export type UserCreateNestedOneWithoutRecipeInput = {
    create?: XOR<UserCreateWithoutRecipeInput, UserUncheckedCreateWithoutRecipeInput>
    connectOrCreate?: UserCreateOrConnectWithoutRecipeInput
    connect?: UserWhereUniqueInput
  }

  export type FavouriteCreateNestedManyWithoutRecipeInput = {
    create?: XOR<FavouriteCreateWithoutRecipeInput, FavouriteUncheckedCreateWithoutRecipeInput> | FavouriteCreateWithoutRecipeInput[] | FavouriteUncheckedCreateWithoutRecipeInput[]
    connectOrCreate?: FavouriteCreateOrConnectWithoutRecipeInput | FavouriteCreateOrConnectWithoutRecipeInput[]
    createMany?: FavouriteCreateManyRecipeInputEnvelope
    connect?: FavouriteWhereUniqueInput | FavouriteWhereUniqueInput[]
  }

  export type FavouriteUncheckedCreateNestedManyWithoutRecipeInput = {
    create?: XOR<FavouriteCreateWithoutRecipeInput, FavouriteUncheckedCreateWithoutRecipeInput> | FavouriteCreateWithoutRecipeInput[] | FavouriteUncheckedCreateWithoutRecipeInput[]
    connectOrCreate?: FavouriteCreateOrConnectWithoutRecipeInput | FavouriteCreateOrConnectWithoutRecipeInput[]
    createMany?: FavouriteCreateManyRecipeInputEnvelope
    connect?: FavouriteWhereUniqueInput | FavouriteWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
    unset?: boolean
  }

  export type IngredientListUpdateEnvelopeInput = {
    set?: IngredientCreateInput | IngredientCreateInput[]
    push?: IngredientCreateInput | IngredientCreateInput[]
    updateMany?: IngredientUpdateManyInput
    deleteMany?: IngredientDeleteManyInput
  }

  export type InstructionListUpdateEnvelopeInput = {
    set?: InstructionCreateInput | InstructionCreateInput[]
    push?: InstructionCreateInput | InstructionCreateInput[]
    updateMany?: InstructionUpdateManyInput
    deleteMany?: InstructionDeleteManyInput
  }

  export type RecipeUpdatetagsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type UserUpdateOneRequiredWithoutRecipeNestedInput = {
    create?: XOR<UserCreateWithoutRecipeInput, UserUncheckedCreateWithoutRecipeInput>
    connectOrCreate?: UserCreateOrConnectWithoutRecipeInput
    upsert?: UserUpsertWithoutRecipeInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRecipeInput, UserUpdateWithoutRecipeInput>, UserUncheckedUpdateWithoutRecipeInput>
  }

  export type FavouriteUpdateManyWithoutRecipeNestedInput = {
    create?: XOR<FavouriteCreateWithoutRecipeInput, FavouriteUncheckedCreateWithoutRecipeInput> | FavouriteCreateWithoutRecipeInput[] | FavouriteUncheckedCreateWithoutRecipeInput[]
    connectOrCreate?: FavouriteCreateOrConnectWithoutRecipeInput | FavouriteCreateOrConnectWithoutRecipeInput[]
    upsert?: FavouriteUpsertWithWhereUniqueWithoutRecipeInput | FavouriteUpsertWithWhereUniqueWithoutRecipeInput[]
    createMany?: FavouriteCreateManyRecipeInputEnvelope
    set?: FavouriteWhereUniqueInput | FavouriteWhereUniqueInput[]
    disconnect?: FavouriteWhereUniqueInput | FavouriteWhereUniqueInput[]
    delete?: FavouriteWhereUniqueInput | FavouriteWhereUniqueInput[]
    connect?: FavouriteWhereUniqueInput | FavouriteWhereUniqueInput[]
    update?: FavouriteUpdateWithWhereUniqueWithoutRecipeInput | FavouriteUpdateWithWhereUniqueWithoutRecipeInput[]
    updateMany?: FavouriteUpdateManyWithWhereWithoutRecipeInput | FavouriteUpdateManyWithWhereWithoutRecipeInput[]
    deleteMany?: FavouriteScalarWhereInput | FavouriteScalarWhereInput[]
  }

  export type FavouriteUncheckedUpdateManyWithoutRecipeNestedInput = {
    create?: XOR<FavouriteCreateWithoutRecipeInput, FavouriteUncheckedCreateWithoutRecipeInput> | FavouriteCreateWithoutRecipeInput[] | FavouriteUncheckedCreateWithoutRecipeInput[]
    connectOrCreate?: FavouriteCreateOrConnectWithoutRecipeInput | FavouriteCreateOrConnectWithoutRecipeInput[]
    upsert?: FavouriteUpsertWithWhereUniqueWithoutRecipeInput | FavouriteUpsertWithWhereUniqueWithoutRecipeInput[]
    createMany?: FavouriteCreateManyRecipeInputEnvelope
    set?: FavouriteWhereUniqueInput | FavouriteWhereUniqueInput[]
    disconnect?: FavouriteWhereUniqueInput | FavouriteWhereUniqueInput[]
    delete?: FavouriteWhereUniqueInput | FavouriteWhereUniqueInput[]
    connect?: FavouriteWhereUniqueInput | FavouriteWhereUniqueInput[]
    update?: FavouriteUpdateWithWhereUniqueWithoutRecipeInput | FavouriteUpdateWithWhereUniqueWithoutRecipeInput[]
    updateMany?: FavouriteUpdateManyWithWhereWithoutRecipeInput | FavouriteUpdateManyWithWhereWithoutRecipeInput[]
    deleteMany?: FavouriteScalarWhereInput | FavouriteScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutFavouriteInput = {
    create?: XOR<UserCreateWithoutFavouriteInput, UserUncheckedCreateWithoutFavouriteInput>
    connectOrCreate?: UserCreateOrConnectWithoutFavouriteInput
    connect?: UserWhereUniqueInput
  }

  export type RecipeCreateNestedOneWithoutFavouriteInput = {
    create?: XOR<RecipeCreateWithoutFavouriteInput, RecipeUncheckedCreateWithoutFavouriteInput>
    connectOrCreate?: RecipeCreateOrConnectWithoutFavouriteInput
    connect?: RecipeWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutFavouriteNestedInput = {
    create?: XOR<UserCreateWithoutFavouriteInput, UserUncheckedCreateWithoutFavouriteInput>
    connectOrCreate?: UserCreateOrConnectWithoutFavouriteInput
    upsert?: UserUpsertWithoutFavouriteInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutFavouriteInput, UserUpdateWithoutFavouriteInput>, UserUncheckedUpdateWithoutFavouriteInput>
  }

  export type RecipeUpdateOneRequiredWithoutFavouriteNestedInput = {
    create?: XOR<RecipeCreateWithoutFavouriteInput, RecipeUncheckedCreateWithoutFavouriteInput>
    connectOrCreate?: RecipeCreateOrConnectWithoutFavouriteInput
    upsert?: RecipeUpsertWithoutFavouriteInput
    connect?: RecipeWhereUniqueInput
    update?: XOR<XOR<RecipeUpdateToOneWithWhereWithoutFavouriteInput, RecipeUpdateWithoutFavouriteInput>, RecipeUncheckedUpdateWithoutFavouriteInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
    isSet?: boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
    isSet?: boolean
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
    isSet?: boolean
  }

  export type IngredientWhereInput = {
    AND?: IngredientWhereInput | IngredientWhereInput[]
    OR?: IngredientWhereInput[]
    NOT?: IngredientWhereInput | IngredientWhereInput[]
    description?: StringFilter<"Ingredient"> | string
    quantity?: FloatNullableFilter<"Ingredient"> | number | null
    unit?: StringNullableFilter<"Ingredient"> | string | null
    order_index?: IntFilter<"Ingredient"> | number
  }

  export type InstructionWhereInput = {
    AND?: InstructionWhereInput | InstructionWhereInput[]
    OR?: InstructionWhereInput[]
    NOT?: InstructionWhereInput | InstructionWhereInput[]
    step_number?: IntFilter<"Instruction"> | number
    description?: StringFilter<"Instruction"> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type RecipeCreateWithoutUserInput = {
    id?: string
    title: string
    slug: string
    description: string
    image_url?: string | null
    cook_time: number
    prep_time: number
    servings: number
    difficulty: string
    cuisine?: string | null
    is_published?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    published_at?: Date | string | null
    ingredients?: XOR<IngredientListCreateEnvelopeInput, IngredientCreateInput> | IngredientCreateInput[]
    instructions?: XOR<InstructionListCreateEnvelopeInput, InstructionCreateInput> | InstructionCreateInput[]
    tags?: RecipeCreatetagsInput | string[]
    Favourite?: FavouriteCreateNestedManyWithoutRecipeInput
  }

  export type RecipeUncheckedCreateWithoutUserInput = {
    id?: string
    title: string
    slug: string
    description: string
    image_url?: string | null
    cook_time: number
    prep_time: number
    servings: number
    difficulty: string
    cuisine?: string | null
    is_published?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    published_at?: Date | string | null
    ingredients?: XOR<IngredientListCreateEnvelopeInput, IngredientCreateInput> | IngredientCreateInput[]
    instructions?: XOR<InstructionListCreateEnvelopeInput, InstructionCreateInput> | InstructionCreateInput[]
    tags?: RecipeCreatetagsInput | string[]
    Favourite?: FavouriteUncheckedCreateNestedManyWithoutRecipeInput
  }

  export type RecipeCreateOrConnectWithoutUserInput = {
    where: RecipeWhereUniqueInput
    create: XOR<RecipeCreateWithoutUserInput, RecipeUncheckedCreateWithoutUserInput>
  }

  export type RecipeCreateManyUserInputEnvelope = {
    data: RecipeCreateManyUserInput | RecipeCreateManyUserInput[]
  }

  export type FavouriteCreateWithoutUserInput = {
    id?: string
    created_at?: Date | string
    recipe: RecipeCreateNestedOneWithoutFavouriteInput
  }

  export type FavouriteUncheckedCreateWithoutUserInput = {
    id?: string
    recipe_id: string
    created_at?: Date | string
  }

  export type FavouriteCreateOrConnectWithoutUserInput = {
    where: FavouriteWhereUniqueInput
    create: XOR<FavouriteCreateWithoutUserInput, FavouriteUncheckedCreateWithoutUserInput>
  }

  export type FavouriteCreateManyUserInputEnvelope = {
    data: FavouriteCreateManyUserInput | FavouriteCreateManyUserInput[]
  }

  export type RecipeUpsertWithWhereUniqueWithoutUserInput = {
    where: RecipeWhereUniqueInput
    update: XOR<RecipeUpdateWithoutUserInput, RecipeUncheckedUpdateWithoutUserInput>
    create: XOR<RecipeCreateWithoutUserInput, RecipeUncheckedCreateWithoutUserInput>
  }

  export type RecipeUpdateWithWhereUniqueWithoutUserInput = {
    where: RecipeWhereUniqueInput
    data: XOR<RecipeUpdateWithoutUserInput, RecipeUncheckedUpdateWithoutUserInput>
  }

  export type RecipeUpdateManyWithWhereWithoutUserInput = {
    where: RecipeScalarWhereInput
    data: XOR<RecipeUpdateManyMutationInput, RecipeUncheckedUpdateManyWithoutUserInput>
  }

  export type RecipeScalarWhereInput = {
    AND?: RecipeScalarWhereInput | RecipeScalarWhereInput[]
    OR?: RecipeScalarWhereInput[]
    NOT?: RecipeScalarWhereInput | RecipeScalarWhereInput[]
    id?: StringFilter<"Recipe"> | string
    user_id?: StringFilter<"Recipe"> | string
    title?: StringFilter<"Recipe"> | string
    slug?: StringFilter<"Recipe"> | string
    description?: StringFilter<"Recipe"> | string
    image_url?: StringNullableFilter<"Recipe"> | string | null
    cook_time?: IntFilter<"Recipe"> | number
    prep_time?: IntFilter<"Recipe"> | number
    servings?: IntFilter<"Recipe"> | number
    difficulty?: StringFilter<"Recipe"> | string
    cuisine?: StringNullableFilter<"Recipe"> | string | null
    is_published?: BoolFilter<"Recipe"> | boolean
    created_at?: DateTimeFilter<"Recipe"> | Date | string
    updated_at?: DateTimeFilter<"Recipe"> | Date | string
    published_at?: DateTimeNullableFilter<"Recipe"> | Date | string | null
    tags?: StringNullableListFilter<"Recipe">
  }

  export type FavouriteUpsertWithWhereUniqueWithoutUserInput = {
    where: FavouriteWhereUniqueInput
    update: XOR<FavouriteUpdateWithoutUserInput, FavouriteUncheckedUpdateWithoutUserInput>
    create: XOR<FavouriteCreateWithoutUserInput, FavouriteUncheckedCreateWithoutUserInput>
  }

  export type FavouriteUpdateWithWhereUniqueWithoutUserInput = {
    where: FavouriteWhereUniqueInput
    data: XOR<FavouriteUpdateWithoutUserInput, FavouriteUncheckedUpdateWithoutUserInput>
  }

  export type FavouriteUpdateManyWithWhereWithoutUserInput = {
    where: FavouriteScalarWhereInput
    data: XOR<FavouriteUpdateManyMutationInput, FavouriteUncheckedUpdateManyWithoutUserInput>
  }

  export type FavouriteScalarWhereInput = {
    AND?: FavouriteScalarWhereInput | FavouriteScalarWhereInput[]
    OR?: FavouriteScalarWhereInput[]
    NOT?: FavouriteScalarWhereInput | FavouriteScalarWhereInput[]
    id?: StringFilter<"Favourite"> | string
    user_id?: StringFilter<"Favourite"> | string
    recipe_id?: StringFilter<"Favourite"> | string
    created_at?: DateTimeFilter<"Favourite"> | Date | string
  }

  export type UserCreateWithoutRecipeInput = {
    id?: string
    email: string
    password: string
    avatar_url?: string | null
    bio?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    Favourite?: FavouriteCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutRecipeInput = {
    id?: string
    email: string
    password: string
    avatar_url?: string | null
    bio?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    Favourite?: FavouriteUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutRecipeInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRecipeInput, UserUncheckedCreateWithoutRecipeInput>
  }

  export type FavouriteCreateWithoutRecipeInput = {
    id?: string
    created_at?: Date | string
    user: UserCreateNestedOneWithoutFavouriteInput
  }

  export type FavouriteUncheckedCreateWithoutRecipeInput = {
    id?: string
    user_id: string
    created_at?: Date | string
  }

  export type FavouriteCreateOrConnectWithoutRecipeInput = {
    where: FavouriteWhereUniqueInput
    create: XOR<FavouriteCreateWithoutRecipeInput, FavouriteUncheckedCreateWithoutRecipeInput>
  }

  export type FavouriteCreateManyRecipeInputEnvelope = {
    data: FavouriteCreateManyRecipeInput | FavouriteCreateManyRecipeInput[]
  }

  export type IngredientUpdateManyInput = {
    where: IngredientWhereInput
    data: IngredientUpdateInput
  }

  export type IngredientDeleteManyInput = {
    where: IngredientWhereInput
  }

  export type InstructionUpdateManyInput = {
    where: InstructionWhereInput
    data: InstructionUpdateInput
  }

  export type InstructionDeleteManyInput = {
    where: InstructionWhereInput
  }

  export type UserUpsertWithoutRecipeInput = {
    update: XOR<UserUpdateWithoutRecipeInput, UserUncheckedUpdateWithoutRecipeInput>
    create: XOR<UserCreateWithoutRecipeInput, UserUncheckedCreateWithoutRecipeInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRecipeInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRecipeInput, UserUncheckedUpdateWithoutRecipeInput>
  }

  export type UserUpdateWithoutRecipeInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Favourite?: FavouriteUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutRecipeInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Favourite?: FavouriteUncheckedUpdateManyWithoutUserNestedInput
  }

  export type FavouriteUpsertWithWhereUniqueWithoutRecipeInput = {
    where: FavouriteWhereUniqueInput
    update: XOR<FavouriteUpdateWithoutRecipeInput, FavouriteUncheckedUpdateWithoutRecipeInput>
    create: XOR<FavouriteCreateWithoutRecipeInput, FavouriteUncheckedCreateWithoutRecipeInput>
  }

  export type FavouriteUpdateWithWhereUniqueWithoutRecipeInput = {
    where: FavouriteWhereUniqueInput
    data: XOR<FavouriteUpdateWithoutRecipeInput, FavouriteUncheckedUpdateWithoutRecipeInput>
  }

  export type FavouriteUpdateManyWithWhereWithoutRecipeInput = {
    where: FavouriteScalarWhereInput
    data: XOR<FavouriteUpdateManyMutationInput, FavouriteUncheckedUpdateManyWithoutRecipeInput>
  }

  export type UserCreateWithoutFavouriteInput = {
    id?: string
    email: string
    password: string
    avatar_url?: string | null
    bio?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    Recipe?: RecipeCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutFavouriteInput = {
    id?: string
    email: string
    password: string
    avatar_url?: string | null
    bio?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    Recipe?: RecipeUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutFavouriteInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFavouriteInput, UserUncheckedCreateWithoutFavouriteInput>
  }

  export type RecipeCreateWithoutFavouriteInput = {
    id?: string
    title: string
    slug: string
    description: string
    image_url?: string | null
    cook_time: number
    prep_time: number
    servings: number
    difficulty: string
    cuisine?: string | null
    is_published?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    published_at?: Date | string | null
    ingredients?: XOR<IngredientListCreateEnvelopeInput, IngredientCreateInput> | IngredientCreateInput[]
    instructions?: XOR<InstructionListCreateEnvelopeInput, InstructionCreateInput> | InstructionCreateInput[]
    tags?: RecipeCreatetagsInput | string[]
    user: UserCreateNestedOneWithoutRecipeInput
  }

  export type RecipeUncheckedCreateWithoutFavouriteInput = {
    id?: string
    user_id: string
    title: string
    slug: string
    description: string
    image_url?: string | null
    cook_time: number
    prep_time: number
    servings: number
    difficulty: string
    cuisine?: string | null
    is_published?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    published_at?: Date | string | null
    ingredients?: XOR<IngredientListCreateEnvelopeInput, IngredientCreateInput> | IngredientCreateInput[]
    instructions?: XOR<InstructionListCreateEnvelopeInput, InstructionCreateInput> | InstructionCreateInput[]
    tags?: RecipeCreatetagsInput | string[]
  }

  export type RecipeCreateOrConnectWithoutFavouriteInput = {
    where: RecipeWhereUniqueInput
    create: XOR<RecipeCreateWithoutFavouriteInput, RecipeUncheckedCreateWithoutFavouriteInput>
  }

  export type UserUpsertWithoutFavouriteInput = {
    update: XOR<UserUpdateWithoutFavouriteInput, UserUncheckedUpdateWithoutFavouriteInput>
    create: XOR<UserCreateWithoutFavouriteInput, UserUncheckedCreateWithoutFavouriteInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutFavouriteInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutFavouriteInput, UserUncheckedUpdateWithoutFavouriteInput>
  }

  export type UserUpdateWithoutFavouriteInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Recipe?: RecipeUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutFavouriteInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Recipe?: RecipeUncheckedUpdateManyWithoutUserNestedInput
  }

  export type RecipeUpsertWithoutFavouriteInput = {
    update: XOR<RecipeUpdateWithoutFavouriteInput, RecipeUncheckedUpdateWithoutFavouriteInput>
    create: XOR<RecipeCreateWithoutFavouriteInput, RecipeUncheckedCreateWithoutFavouriteInput>
    where?: RecipeWhereInput
  }

  export type RecipeUpdateToOneWithWhereWithoutFavouriteInput = {
    where?: RecipeWhereInput
    data: XOR<RecipeUpdateWithoutFavouriteInput, RecipeUncheckedUpdateWithoutFavouriteInput>
  }

  export type RecipeUpdateWithoutFavouriteInput = {
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    cook_time?: IntFieldUpdateOperationsInput | number
    prep_time?: IntFieldUpdateOperationsInput | number
    servings?: IntFieldUpdateOperationsInput | number
    difficulty?: StringFieldUpdateOperationsInput | string
    cuisine?: NullableStringFieldUpdateOperationsInput | string | null
    is_published?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    published_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ingredients?: XOR<IngredientListUpdateEnvelopeInput, IngredientCreateInput> | IngredientCreateInput[]
    instructions?: XOR<InstructionListUpdateEnvelopeInput, InstructionCreateInput> | InstructionCreateInput[]
    tags?: RecipeUpdatetagsInput | string[]
    user?: UserUpdateOneRequiredWithoutRecipeNestedInput
  }

  export type RecipeUncheckedUpdateWithoutFavouriteInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    cook_time?: IntFieldUpdateOperationsInput | number
    prep_time?: IntFieldUpdateOperationsInput | number
    servings?: IntFieldUpdateOperationsInput | number
    difficulty?: StringFieldUpdateOperationsInput | string
    cuisine?: NullableStringFieldUpdateOperationsInput | string | null
    is_published?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    published_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ingredients?: XOR<IngredientListUpdateEnvelopeInput, IngredientCreateInput> | IngredientCreateInput[]
    instructions?: XOR<InstructionListUpdateEnvelopeInput, InstructionCreateInput> | InstructionCreateInput[]
    tags?: RecipeUpdatetagsInput | string[]
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
    isSet?: boolean
  }

  export type RecipeCreateManyUserInput = {
    id?: string
    title: string
    slug: string
    description: string
    image_url?: string | null
    cook_time: number
    prep_time: number
    servings: number
    difficulty: string
    cuisine?: string | null
    is_published?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    published_at?: Date | string | null
    ingredients?: XOR<IngredientListCreateEnvelopeInput, IngredientCreateInput> | IngredientCreateInput[]
    instructions?: XOR<InstructionListCreateEnvelopeInput, InstructionCreateInput> | InstructionCreateInput[]
    tags?: RecipeCreatetagsInput | string[]
  }

  export type FavouriteCreateManyUserInput = {
    id?: string
    recipe_id: string
    created_at?: Date | string
  }

  export type RecipeUpdateWithoutUserInput = {
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    cook_time?: IntFieldUpdateOperationsInput | number
    prep_time?: IntFieldUpdateOperationsInput | number
    servings?: IntFieldUpdateOperationsInput | number
    difficulty?: StringFieldUpdateOperationsInput | string
    cuisine?: NullableStringFieldUpdateOperationsInput | string | null
    is_published?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    published_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ingredients?: XOR<IngredientListUpdateEnvelopeInput, IngredientCreateInput> | IngredientCreateInput[]
    instructions?: XOR<InstructionListUpdateEnvelopeInput, InstructionCreateInput> | InstructionCreateInput[]
    tags?: RecipeUpdatetagsInput | string[]
    Favourite?: FavouriteUpdateManyWithoutRecipeNestedInput
  }

  export type RecipeUncheckedUpdateWithoutUserInput = {
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    cook_time?: IntFieldUpdateOperationsInput | number
    prep_time?: IntFieldUpdateOperationsInput | number
    servings?: IntFieldUpdateOperationsInput | number
    difficulty?: StringFieldUpdateOperationsInput | string
    cuisine?: NullableStringFieldUpdateOperationsInput | string | null
    is_published?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    published_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ingredients?: XOR<IngredientListUpdateEnvelopeInput, IngredientCreateInput> | IngredientCreateInput[]
    instructions?: XOR<InstructionListUpdateEnvelopeInput, InstructionCreateInput> | InstructionCreateInput[]
    tags?: RecipeUpdatetagsInput | string[]
    Favourite?: FavouriteUncheckedUpdateManyWithoutRecipeNestedInput
  }

  export type RecipeUncheckedUpdateManyWithoutUserInput = {
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    cook_time?: IntFieldUpdateOperationsInput | number
    prep_time?: IntFieldUpdateOperationsInput | number
    servings?: IntFieldUpdateOperationsInput | number
    difficulty?: StringFieldUpdateOperationsInput | string
    cuisine?: NullableStringFieldUpdateOperationsInput | string | null
    is_published?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    published_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ingredients?: XOR<IngredientListUpdateEnvelopeInput, IngredientCreateInput> | IngredientCreateInput[]
    instructions?: XOR<InstructionListUpdateEnvelopeInput, InstructionCreateInput> | InstructionCreateInput[]
    tags?: RecipeUpdatetagsInput | string[]
  }

  export type FavouriteUpdateWithoutUserInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    recipe?: RecipeUpdateOneRequiredWithoutFavouriteNestedInput
  }

  export type FavouriteUncheckedUpdateWithoutUserInput = {
    recipe_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FavouriteUncheckedUpdateManyWithoutUserInput = {
    recipe_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FavouriteCreateManyRecipeInput = {
    id?: string
    user_id: string
    created_at?: Date | string
  }

  export type IngredientUpdateInput = {
    description?: StringFieldUpdateOperationsInput | string
    quantity?: NullableFloatFieldUpdateOperationsInput | number | null
    unit?: NullableStringFieldUpdateOperationsInput | string | null
    order_index?: IntFieldUpdateOperationsInput | number
  }

  export type InstructionUpdateInput = {
    step_number?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
  }

  export type FavouriteUpdateWithoutRecipeInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutFavouriteNestedInput
  }

  export type FavouriteUncheckedUpdateWithoutRecipeInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FavouriteUncheckedUpdateManyWithoutRecipeInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
    isSet?: boolean
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
    unset?: boolean
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}