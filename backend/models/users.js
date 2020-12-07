const Sequelize = require('sequelize');
module.exports = function(sequelize) {
  const User = sequelize.define('User', {
    id: {
      autoIncrement: true,
      type: Sequelize.SMALLINT,
      allowNull: false,
      primaryKey: true
    },
    username: {
      type: Sequelize.STRING(32),
      allowNull: false
    },
    email: {
      type: Sequelize.STRING(255),
      allowNull: false
    },
    password: {
      type: Sequelize.STRING(255),
      allowNull: false
    },
    bio: {
      type: Sequelize.TEXT,
      allowNull: true
    },
  },{});
 
  return User;
};