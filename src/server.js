const port = parseInt(process.env.PORT, 10) || 3000;

const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const chainRoute = require('./routes/chain');
const seedRoute = require('./routes/seed');

const app = express();
app.use(morgan('tiny'));
app.use(cors());

app.use('/api/chain', chainRoute);
app.use('/api/seed', seedRoute);

app.listen(port);
