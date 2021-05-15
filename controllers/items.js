const { parse } = require('dotenv');
var mongo = require('../util/mongoc');

const get = (queryOptions={}) => {
    return async (req, res) => {
        try {
            var db = mongo.getdb();
            var result = [];
            const categories = db.collection('items');
            const cursor = categories.find(queryOptions, {projection: {_id:0}});
            if ((await cursor.count())!=0) {
                await cursor.forEach(element => {
                    result.push(element);
                });
            }
            res.send(result);
        } catch (e) {
            console.log(e);
        }
    }
}

exports.getItems = get;

exports.getItem = async (req, res) => {
    const { id } = req.params;
    try {
        var result = [];
        var db = mongo.getdb();
        const categories = db.collection('items');
        const cursor = categories.find({
            item_id : parseInt(id)
        }, {
            projection: {_id:0}
        });
        if ((await cursor.count())!=0) {
            await cursor.forEach(element => {
                result.push(element);
            });
        }
        res.send(result);
    } catch (e) {
        console.log(e);
    }
}

exports.getItemCat = async (req, res) => {
    const { cat } = req.params;
    try {
        var result = [];
        var db = mongo.getdb();
        const categories = db.collection('items');
        const cursor = categories.find({
            Category : cat
        }, {
            projection: {_id:0}
        });
        if ((await cursor.count())!=0) {
            await cursor.forEach(element => {
                result.push(element);
            });
        }
        res.send(result);
    } catch (e) {
        console.log(e);
    }
}

exports.getItemRateRange = async (req, res) => {
    const { min, max } = req.params;
    try {
        var result = [];
        var db = mongo.getdb();
        const categories = db.collection('items');
        const cursor = categories.find({
            Rate: { $gte: parseFloat(min), $lte: parseFloat(max)}
        }, {
            projection: {_id:0}
        });
        if ((await cursor.count())!=0) {
            await cursor.forEach(element => {
                result.push(element);
            });
        }
        res.send(result);
    } catch (e) {
        console.log(e);
    }
}

