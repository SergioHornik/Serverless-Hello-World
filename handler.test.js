const handler = require("./handler");

test("Say Hello checking if you have a name or not", async () => {
  expect(await handler.hello(input)).toBe("Hello ");
});
