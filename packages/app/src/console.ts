import * as T from "@effect-ts/core/Effect";
import { tag } from "@effect-ts/core/Has";
import type { _A } from "@effect-ts/core/Utils";

export const makeLiveConsole = T.succeedWith(() => ({
  log: (s: string) =>
    T.succeedWith(() => {
      console.log(s);
    }),
}));

export interface Console extends _A<typeof makeLiveConsole> {}
export const Console = tag<Console>();
export const LiveConsole = makeLiveConsole.toLayer(Console);

export const { log } = Console.deriveLifted("log");
