// Creating our User model
module.exports = function(sequelize, DataTypes) {

  var Job = sequelize.define("Job", {
    submitDate: {
      type: DataTypes.STRING,
      allowNull: false
    },
    serviceDate: {
      type: DataTypes.STRING,
      allowNull: false
    },
    roofGrade: {
      type: DataTypes.STRING,
      allowNull: false
    },
    jobNotes: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  });

 
  return Job
};
