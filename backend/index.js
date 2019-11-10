const express = require('express');
const bodyParser = require('body-parser');

const server = express();
const PORT = 5000;

server.use(bodyParser.json());

server.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
