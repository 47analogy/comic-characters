const { GraphQLObjectType, GraphQLList } = require("graphql");
const { resolver } = require("graphql-sequelize");
const { userType } = require("../types");
const { User } = require("../../db/models");

exports.query = new GraphQLObjectType({
  name: "RootQuery",
  fields: {
    users: {
      type: new GraphQLList(userType),
      resolve: resolver(User),
    },
  },
});
