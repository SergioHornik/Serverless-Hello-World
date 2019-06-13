var { create, jsonMiddleware } = require("slspress");
var handler = create();

handler
  .on("handle")
  .middleware(jsonMiddleware)
  .get("/Hello World", (req, res) => {
    return res.ok("hello-world");
  });
module.exports = hanlder.export();
