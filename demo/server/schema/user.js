/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('user', {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    user_name: {
      type: DataTypes.CHAR(50),
      allowNull: false,
      defaultValue: ''
    },
    password: {
      type: DataTypes.CHAR(128),
      allowNull: false,
      defaultValue: ''
    }
  }, {
    tableName: 'user'
  });
};
