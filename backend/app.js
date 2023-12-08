var express = require('express');

var app = express();

var cors = require('cors');
app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.get('/test', (req, res) => {
    console.log(req);
    res.json({ user: 'Siddhant', body: 'this is body 2' });
});

app.listen(5000, () => {
    console.log('Example app listening on port 5000!');
});
