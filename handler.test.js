const handler = require("./handler");

test("Should say hello name when passed a name", async () => {
  const input = {
    queryStringParameters: {
      name: "Sergio"
    }
  };

  const response = await handler.hello(input);

  console.log("response.body ====>  ", response.body);

  expect(JSON.parse(response.body).message).toBe("Hello Sergio");
  expect(response.statusCode).toBe(200);
});

test("Should say hello world when not passed a name", async () => {
  const input = {
    queryStringParameters: {}
  };

  const response = await handler.hello(input);

  expect(JSON.parse(response.body).message).toBe("Hello World");
});
