'use strict';
module.exports = (sequelize, DataTypes) => {
  const Dictionary = sequelize.define('Dictionary', {
    word: DataTypes.STRING,
    charLength: DataTypes.INTEGER
  }, {});
  // Dictionary.associate = function(models) {
  //   // associations can be defined here
  // };
  return Dictionary;
};