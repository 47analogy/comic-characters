const { buildSchema } = require("graphql");

const schema = buildSchema(`
type Query {
   test: String
}

type Mutation {
  placeholder: String
}
`);

module.exports = schema;
