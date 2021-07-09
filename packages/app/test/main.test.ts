import * as T from "@effect-ts/core/Effect";
import { Console } from "app/console";
import { program } from "app/main";

it("logs", async () => {
  const f = jest.fn();

  await program
    .inject(Console.of({ log: (s) => T.succeedWith(() => f(s)) }).toLayer())
    .runPromise();

  expect(f).toHaveBeenCalledWith("Hello World");
  expect(1).equals(1);
});
