import type * as T from "@effect-ts/core/Effect";

declare module "@effect-ts/system/Effect/effect" {
  export interface Base<R, E, A> extends Effect<R, E, A> {}

  export interface Effect<R, E, A> {
    /**
     * @rewrite runMain from "@effect-ts/node/Runtime"
     */
    runMain<EX, AX>(this: T.Effect<T.DefaultEnv, EX, AX>): void;
  }
}
