import client from '../index.js';

export const getCategories = async (req, res) => {
    try {
        var result = [];
        const db = client.db('marvelSim');
        const categories = db.collection('categories');
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