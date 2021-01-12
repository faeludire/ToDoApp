const express = require('express');

// create express app
const app = express();
const PORT = 3000;

app.use(express.static(__dirname + '/static'));

app.listen(PORT, () => console.log(`listening on port ${PORT}!`));
