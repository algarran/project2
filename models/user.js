// Requiring bcrypt for password hashing. Using the bcryptjs version as the regular bcrypt module sometimes causes errors on Windows machines
var bcrypt = require("bcryptjs");

// Creating our User model
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    // The email cannot be null, and must be a proper email before creation
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    // The password cannot be null
    password: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

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
      allowNull: true,
      unique: true,
      validate: {
          isEmail:true
      }
    }
  });

  var Address = sequelize.define("Address", {
    street: {
      type: DataTypes.STRING,
      allowNull: true
    },
    city: {
      type: DataTypes.STRING,
      allowNull: true
    },
    state: {
      type: DataTypes.STRING,
      allowNull: true
    },
    county: {
      type: DataTypes.STRING,
      allowNull: true
    }
  });

  var Job = sequelize.define("Job", {
    submitDate: {
      type: DataTypes.STRING,
      allowNull: true
    },
    serviceDate: {
      type: DataTypes.STRING,
      allowNull: true
    },
    roofGrade: {
      type: DataTypes.STRING,
      allowNull: true
    },
    jobNotes: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  });

  //sync models to the DB
  // Job.sync({ force: false });
  // Address.sync({ force: false });
  // Client.sync({ force: false });

  // Creating a custom method for our User model. This will check if an unhashed password entered by the user can be compared to the hashed password stored in our database
  User.prototype.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
  };
  // Hooks are automatic methods that run during various phases of the User Model lifecycle
  // In this case, before a User is created, we will automatically hash their password
  User.addHook("beforeCreate", function(user) {
    user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
  });
  return User, Client, Address, Job
};

// //export the modules for use
// module.exports = Address;
// module.exports = Job;
// module.exports = Clients;
