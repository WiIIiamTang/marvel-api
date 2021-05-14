import client from '../index.js';

export const getItems = async (req, res) => {
    try {
        var result = [];
        const db = client.db('marvelSim');
        const categories = db.collection('items');
        const cursor = categories.find({}, {});
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

export const getItem = async (req, res) => {
    const { id } = req.params;
    try {
        var result = [];
        const db = client.db('marvelSim');
        const categories = db.collection('items');
        const cursor = categories.find({
            item_id : parseInt(id)
        }, {
            projection: 0
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