var orm = require("../config/orm.js");

var tourInfo = {
    all: function(cb) {
        orm.all("tourInfo", function(res) {
            cb(res);
        });
    },
    create: function(cols, vals, cb) {
        orm.create("tourInfo", cols, vals, function(res) {
            cb(res);
        });
    },
    update: function(objColVals, condition, cb) {
        orm.update("tourInfo", objColVals, condition, function(res) {
            cb(res);
        });
    },
    delete: function(condition, cb) {
        orm.delete("tourInfo", condition, function(res) {
            cb(res);
        });
    }
};

module.exports = tourInfo;