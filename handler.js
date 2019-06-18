"use strict";

module.exports.hello = async event => {
  console.log("event", event);
  const { name } =
    event && event.queryStringParameters ? event.queryStringParameters : {};
  // console.log("event.QueryStringParameters", event.QueryStringParameters);

  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: name ? "Hello " + name : "Hello World"
      },
      null,
      2
    )
  };
};
