/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('list', {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    content: {
      type: DataTypes.CHAR(255),
      allowNull: false,
      defaultValue: ''
    },
    status: {
      type: DataTypes.INTEGER(1),
      allowNull: false
    }
  }, {
    tableName: 'list'
  });
};
