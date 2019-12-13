const express = require('express');

const bodyParser = require('body-parser');

const app = express();

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", 
        "Origin, X-Requested-With, Content-Type, Accept");
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET,PUT,POST,PATCH,DELETE,OPTIONS"
    );
    next();
})

const testRoutes = require('./routes/routes');

app.use(testRoutes);

app.use(bodyParser.urlencoded({extended:false}));

app.listen(3030, () => {
    console.log('Server listening to your routes on port 3030....');
});