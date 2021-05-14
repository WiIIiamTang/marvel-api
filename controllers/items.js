var mongo = require('../util/mongoc');

exports.getItems = async (req, res) => {
    try {
        var db = mongo.getdb();
        var result = [];
        const categories = db.collection('items');
        const cursor = categories.find({}, {projection: {_id:0}});
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