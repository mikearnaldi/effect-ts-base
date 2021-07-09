import type * as T from "@effect-ts/core/Effect";
import {} from "@effect-ts/fluent";

declare module "@effect-ts/system/Effect/effect" {
  export interface Base<R, E, A> extends Effect<R, E, A> {}

  export interface Effect<R, E, A> {
    /**
     * @rewrite runMain from "@effect-ts/node/Runtime"
     */
    runMain<EX, AX>(this: T.Effect<T.DefaultEnv, EX, AX>): void;
  }
}

declare global {
  namespace jest {
    interface Matchers<R, T> {
      equals(b: unknown): void;
    }
  }
}
