const express = require('express');
const path = require('path');
const fs = require('fs');
const marked = require('marked');
const api = express();
const port = process.env.PORT || 3000;
var mongo = require('./util/mongoc');

/////////////////////////////////////////////////////////////////////////

mongo.connector((err, client) => {
    if (err) {
        console.log(err);
    }

    /**
     * Modules that use the db MUST be declared here, otherwise it may be undefined
     */
    const categoryRoute = require('./routes/categories.js');
    const itemRoute = require('./routes/items.js');
    const doubleRoute = require('./routes/double.js');

    
    api.use(express.json());
    api.use('/api', categoryRoute);
    api.use('/api', itemRoute);
    api.use('/api', doubleRoute);
    api.use('/static', express.static(path.join(__dirname + '/public')));
    api.use('/', (req, res) => {
        res.sendFile('/static/index.html');
        //var file = fs.readFileSync(path.join(__dirname, '/README-site.md'), 'utf8');
        //res.send(marked(file.toString()));
    });

    api.listen(port, () => {
        // local test
        console.log(`Listening on http://localhost:${port}`);    
    });
});






