"use strict";
module.exports = (sequelize, DataTypes) => {
  const Character = sequelize.define(
    "Character",
    {
      name: DataTypes.STRING,
      description: DataTypes.STRING,
    },
    {}
  );
  Character.associate = function(models) {
    // associations can be defined here
    // PUNT: decide if more than 1 user can have same character
    Character.belongsTo(models.User);
  };
  return Character;
};
