const { GraphQLSchema } = require("graphql");
const { query } = require("./resolvers/query");

const schema = new GraphQLSchema({
  query,
});

module.exports = schema;
