import * as T from "@effect-ts/core/Effect";

T.succeedWith(() => {
  console.log("Hello World");
}).runMain();
