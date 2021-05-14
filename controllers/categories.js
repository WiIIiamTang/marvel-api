var mongo = require('../util/mongoc');

exports.getCategories = async (req, res) => {
    try {
        var result = [];
        var db = mongo.getdb();
        const categories = db.collection('categories');
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