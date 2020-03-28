// Creating our User model
module.exports = function(sequelize, DataTypes) {

  var Client = sequelize.define("Client", {
    firstName: {
      type: DataTypes.STRING,
      allowNull: true
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: true
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: true
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
          isEmail:true
      }
    }
  });



  return Client
};
