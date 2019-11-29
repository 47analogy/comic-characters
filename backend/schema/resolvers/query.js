const {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLID,
  GraphQLList,
} = require("graphql");
const { resolver } = require("graphql-sequelize");
const { userType, characterType } = require("../types");
const { User, Character } = require("../../db/models");

const query = new GraphQLObjectType({
  name: "RootQuery",
  fields: {
    getAllUsers: {
      type: new GraphQLList(userType),
      resolve: resolver(User),
    },
    getUserById: {
      type: userType,
      args: {
        id: {
          type: new GraphQLNonNull(GraphQLID),
        },
      },
      resolve: resolver(User),
    },
    getAllCharacters: {
      type: new GraphQLList(characterType),
      resolve: resolver(Character),
    },
    getCharactersById: {
      type: characterType,
      args: {
        id: {
          type: new GraphQLNonNull(GraphQLID),
        },
      },
      resolve: resolver(Character),
    },
  },
});

module.exports = query;
