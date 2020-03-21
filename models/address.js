module.exports = function(sequelize, DataTypes) {
  var Address = sequelize.define("Address", {
    street: {
      type: DataTypes.STRING,
      allowNull: false
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false
    },
    state: {
      type: DataTypes.STRING,
      allowNull: false
    },
    county: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
};
