var orm = require('../config/orm.js');

var customer = {
    all: function(cb){
        orm.all('customers', function(res) {
            cb(res);
        });
    },
};

//export the db function for the controller
module.exports = customer;
