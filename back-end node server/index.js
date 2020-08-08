const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const record_route = require('./routes/record_route');
const url = 'mongodb://localhost/UsersDB';

const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use('/record', record_route);

app.get('/', async (req, res) => {
    res.send('To get user details send request to /record')
});

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
const con = mongoose.connection;

con.on('open', () => console.log('connected...'));

app.listen(8080, () => console.log('On 8080'));