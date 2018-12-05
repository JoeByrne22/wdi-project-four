const express = require('express');
const app = express();
const { dbURI, port } = require('./config/environment');
const mongoose = require('mongoose');
const router = require('./config/router');

mongoose.connect(dbURI);

const bodyParser = require('body-parser');
const morgan = require('morgan');

app.use(bodyParser.json());
app.use(morgan('dev'));

app.use('/api', router);

app.use(express.static(`${__dirname}/public`));

app.get('/*', (req, res) => res.sendFile(`${__dirname}/public/index.html`));

app.listen(port, () => console.log(`Express is listening on port ${port}`));

module.exports = app;
