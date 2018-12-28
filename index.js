require('dotenv').config();
const server = require('./api/server.js');

const port = process.env.PORT || 4333;

server.listen(port, () =>
    console.log(`\nServer up on ${port}\n`));