'use strict';
module.exports = (sequelize, DataTypes) => {
  const Words02 = sequelize.define('Words02', {
    vocabulary: DataTypes.STRING,
    wordLen: DataTypes.INTEGER
  },{
    timestamps: false
  });
  // Dictionary.associate = function(models) {
  //   // associations can be defined here
  // };
  return Words02;
}
