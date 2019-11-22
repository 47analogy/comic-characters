const express = require("express");
const expressGraphQL = require("express-graphql");
const schema = require("./schema");
const { Query } = require("./resolvers/Query");
const { Mutation } = require("./resolvers/Mutation");

const server = express();
const PORT = 4000;

const resolvers = {
  Query,
  Mutation,
};

server.use(
  "/graphql",
  expressGraphQL({
    schema,
    rootValue: resolvers.Query,
    graphiql: true,
  })
);

server.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
