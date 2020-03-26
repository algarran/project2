// Requiring necessary npm packages
var express = require("express");
var session = require("express-session");
const fs = require('fs');
const generateHTML = require('./generateHTML');
const axios = require('axios');
const pdf = require('html-pdf');

// Requiring passport as we've configured it
var passport = require("./config/passport");

// Setting up port and requiring models for syncing
var PORT = process.env.PORT || 8080;
var db = require("./models");

// Creating express app and configuring middleware needed for authentication
var app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
// We need to use sessions to keep track of our user's login status
app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

// Requiring our routes
require("./routes/html-routes.js")(app);
require("./routes/api-routes.js")(app);

// Syncing our database and logging a message to the user upon success
db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT);
  });
});


<<<<<<< HEAD
    var aerial = response;
    $
  });

  api();
};

"https://maps.googleapis.com/maps/api/staticmap?center=40.714728,-73.998672&zoom=12&size=400x400&maptype=satellite&key=AIzaSyDLw4vXEUzhRZG-sitgk-E3Q5e2nbpOThE"

const databaseData = {
  firstName: '',
  lastName: '',
  phoneNumber: '',
  email: '',

  streetAddress: '',
  city: '',
  state: '',
  county: '',

  submitDate: '',
  notes: '',
  roofGrade: ''
};


// .then((team) => {
//   let HTML = generateMemberHTML(team.members);
//   HTML = generateHTML.generateHTML(HTML);
//   fs.writeFile('./output/team.html', HTML, (err) => {
//       if (err) {
//           return console.log(err);
//       }
//       console.log('Success! File written to team.html in the output folder');
//   });
// });

function writeToFile(newFile, html) {
  console.log('Making your PDF file ...');
  fs.writeFile(newFile, html, (err) => {
      if (err) {
          return console.log(err);
      }
  });
  const options = {
      format: 'A3',
      orientation: 'landscape',
  };
  pdf.create(html, options).toFile(`./${databaseData.firstName+lastName}.pdf`, (err) => {
      console.log('File Created!');
      if (err) {return console.log(err);
      };
  });
};

// writeToFile(newFile, html);
=======
>>>>>>> c7e05132ac6c2c2f088fa6ec55bc36f664e24715
