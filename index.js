const express = require('express');
const path = require('path');
const api = express();
const port = process.env.PORT || 3000;
var mongo = require('./util/mongoc');

/////////////////////////////////////////////////////////////////////////

mongo.connector((err, client) => {
    if (err) {
        console.log(err);
    }

    const categoryRoute = require('./routes/categories.js');
    const itemRoute = require('./routes/items.js');
    const doubleRoute = require('./routes/double.js');

    /**
     * Modules that use the db MUST be declared here, otherwise it may be undefined
     */
    api.use(express.json());
    api.use('/api', categoryRoute);
    api.use('/api', itemRoute);
    api.use('/api', doubleRoute);
    api.use('/static', express.static(path.join(__dirname + '/public')));

    api.listen(port, () => {
        // local test
        console.log(`Listening on http://localhost:${port}`);    
    });
});






