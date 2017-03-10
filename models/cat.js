// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var cat = {
  all: function(cb) {
    orm.all("cats", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  // Create a new cat within the database
  create: function(cols, vals, cb) {
    orm.create("cats", cols, vals, function(res) {
      cb(res);
    });
  },
  // Update a cat within the database
  update: function(objColVals, condition, cb) {
    orm.update("cats", objColVals, condition, function(res) {
      cb(res);
    });
  },
  // Delete a cat within the database
  delete: function(condition, cb) {
    orm.delete("cats", condition, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (catsController.js).
module.exports = cat;