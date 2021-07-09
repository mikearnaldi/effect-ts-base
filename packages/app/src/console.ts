import * as T from "@effect-ts/core/Effect";
import { tag } from "@effect-ts/core/Has";
import type { _A } from "@effect-ts/core/Utils";

export const makeConsole = T.succeedWith(() => {
  return {
    log: (s: string) =>
      T.succeedWith(() => {
        console.log(s);
      }),
  };
});

export interface Console extends _A<typeof makeConsole> {}
export const Console = tag<Console>();
export const LiveConsole = makeConsole.toLayer(Console);

export const { log } = Console.deriveLifted("log");
