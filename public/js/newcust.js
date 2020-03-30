// Requiring necessary npm packages
const fs = require('fs');
const generateHTML = require('../../generateHTML');
const axios = require('axios');
// const pdf = require('html-pdf');
var mykey = apiKey.myKey;

$(document).ready(function(){

//variables from the form, needed for the post route api
let firstNameInput = $('#firstName');
let lastNameInput = $('#lastName');
let phoneInput = $('#phone');
let emailInput = $('email')

let streetInput = $('#street');
let cityInput = $('#city');
let stateInput = $('#state');
let countyInput = $('#county');

let submitInput = $('#subDate');
let noteInput = $('#notes');




let today = new Date().toISOString().substr(0, 10);
document.querySelector("#date").value = today;

document.querySelector("#date").valueAsDate = today;

// AJAX call
var api = function generate() {
    var baseURL = "https://maps.googleapis.com/maps/api/staticmap?" + address + "&zoom=20&size=400x400&maptype=satellite" + mykey;
    axios.get(baseURL)
        .then(function (response) {
            console.log(response);
        }).catch(console.log("Not working"))
};

const databaseData = {
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',

    streetAddress: '',
    city: '',
    state: '',

    submitDate: '',
    notes: '',
    roofGrade: ''
};

const address = databaseData.streetAddress + databaseData.city + databaseData.state

api();

const newFile = databaseData.firstName + databaseData.lastName

function writeToFile(newFile, html) {
    console.log('Making your HTML file ...');
    fs.writeFile(newFile, html, (err) => {
        if (err) {
            return console.log(err);
        }
    });
};

const html = generateHTML.generateHTML(databaseData);
writeToFile(newFile, html);

//event handler on the submit button to post to the db and run the html creator function
    $("#submit").on('Submit', function handleFormSubmit(event) {
        event.preventDefault();
        generate();
    });


//constructs the object to hand to the db
//new Customer variable to pass to the db
let newCust = {
   firstName: firstNameInput.val().trim(),
   lastName: lastNameInput.val().trim(),
   phone: phoneInput.val().trim(),
   email: emailInput.val().trim(),

};
//new address object to pass to the db
let newAddress = {
    street: streetInput.val().trim(),
    city: cityInput.val().trim,
    state: stateInput.val().trim(),
    county: countyInput.val().trim()
};
// new job object to pass to the db
let newJob = {
    submitDate: submitInput.val().trim(),
    jobNotes: jobNotes.val().trim()
};
//varaibles for the api calls to use


});