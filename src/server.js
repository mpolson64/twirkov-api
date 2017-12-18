const port = process.env.PORT || 3000;

const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const app = express();
app.use(morgan('tiny'));
app.use(cors());

var server = app.listen(port, () => {
    console.log('twirkov-api listening on port ' + port);
});
