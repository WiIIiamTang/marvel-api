const MongoClient = require('mongodb').MongoClient;
require('dotenv').config();

var _db;
const uri = process.env.URI;

module.exports = {
    /**
     * Connects to the Mongodb database. initializes the _db to the marvelSim database by default.
     * @param {c} the callback function. Should initialize the express app here 
     */
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

    /**
     * Gets the mongodb database. The client connection function must have run first (
     * which is why it is important to put the api init in the callback)
     * @returns the mongodb database
     */
    getdb : function() {
        return _db;
    }
};