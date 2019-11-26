const express = require("express");
const expressGraphQL = require("express-graphql");
const schema = require("./schema/schema");

const server = express();
const PORT = 4000;

server.use(
  "/graphql",
  expressGraphQL({
    schema,
    graphiql: true,
  })
);

server.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
