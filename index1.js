﻿const express = require('express');
const port = 8002;
const app = express();
app.get('/', (request, response) => response.send('hello from skillsoft'));
app.listen(port, function () {
    console.log("Listening " + port);
});