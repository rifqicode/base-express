var mongoose = require('mongoose');
var example = require('./example.schema');

example.statics = {
    create : function(data, cb) {
        var example = new this(data);
        example.save(cb);
    },

    get: function(query, cb) {
        this.find(query, cb);
    },

    getByName: function(query, cb) {
        this.find(query, cb);
    },

    update: function(query, updateData, cb) {
        this.findOneAndUpdate(query, {$set: updateData},{new: true}, cb);
    },

    delete: function(query, cb) {
        this.findOneAndDelete(query,cb);
    }
}

var example = mongoose.model('Example', example);
module.exports = example;
