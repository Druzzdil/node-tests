let express = require('express');
let app = express();

app.get('/', (req, res)=>{
    res.status(200).send({
        error: "ok",
        name: 'dune'
    });
});

app.get('/users', (req, res)=>{
    res.status(200).send({
        age: 30,
        name: 'dune'
    });
});


app.listen(3000);

module.exports.app = app;