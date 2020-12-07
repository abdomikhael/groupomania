const Sequelize = require('sequelize');
module.exports = function(sequelize) {
  const Post= sequelize.define('Post', {
    id: {
      autoIncrement: true,
      type: Sequelize.SMALLINT,
      allowNull: false,
      primaryKey: true,
   
    },
    fk_user: {
      type: Sequelize.SMALLINT,
      allowNull: false,
      references: {
        model: 'users',
        key: 'id'
      }
    },
   
    title: {
      type: Sequelize.STRING(255),
      allowNull: false
    },
    content: {
      type: Sequelize.TEXT,
      allowNull: false
    },
    }, {});
  return Post;
};