const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLNonNull,
} = require("graphql");

// typeDefs
exports.userType = new GraphQLObjectType({
  name: "User",
  description: "These are the users",
  fields: {
    id: {
      type: new GraphQLNonNull(GraphQLInt),
    },
    userName: {
      type: new GraphQLNonNull(GraphQLString),
    },
  },
});
