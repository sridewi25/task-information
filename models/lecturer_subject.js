'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class lecturer_subject extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      lecturer_subject.belongsTo(models.lecturer);
      lecturer_subject.belongsTo(models.subject);
    }
  }
  lecturer_subject.init({
    lecturerId: DataTypes.INTEGER,
    subjectId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'lecturer_subject',
  });
  return lecturer_subject;
};