const MongoClient = require('mongodb').MongoClient;
require('dotenv').config();

var _db;
const uri = process.env.URI;

module.exports = {
    connector : function(c) {
        MongoClient.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }, (err, client) => {
            if (err) {
                console.log('Failed to connect');
            }
            _db = client.db('marvelSim');
            
            return c(err);
        });
    },

    getdb : function() {
        return _db;
    }
};