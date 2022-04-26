'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class lecturer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      lecturer.belongsToMany(models.subject,{through: models.lecturer_subject});
    }
  }
  lecturer.init({
    name: DataTypes.STRING,
    type_subject: DataTypes.STRING,
    nip: DataTypes.STRING,
    code_lecturer: DataTypes.STRING,
    task: DataTypes.STRING,
    description: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'lecturer',
  });
  return lecturer;
};