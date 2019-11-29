const { GraphQLObjectType, GraphQLString, GraphQLInt } = require("graphql");

// typeDefs
const characterType = new GraphQLObjectType({
  name: "Character",
  description: "These are characters that belong to a user",
  fields: {
    id: {
      type: GraphQLInt,
    },
    userId: {
      type: GraphQLInt,
    },
    name: {
      type: GraphQLString,
    },
    description: {
      type: GraphQLString,
    },
  },
});

const userType = new GraphQLObjectType({
  name: "User",
  description: "These are the users",
  fields: {
    id: {
      type: GraphQLInt,
    },
    userName: {
      type: GraphQLString,
    },
  },
});

module.exports = {
  userType,
  characterType,
};
