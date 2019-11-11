"use strict";
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      userName: DataTypes.STRING,
    },
    {}
  );
  User.associate = function(models) {
    // associations can be defined here
    // CASCADE - delete any associations upon user removal
    User.hasMany(models.Character, { onDelete: "CASCADE" });
  };
  return User;
};
