const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('./dist/contacts-book'));

app.get('/*', function (_request, response) {
  response.sendFile(path.join(__dirname, '/dist/contacts-book/index.html'));
});

app.listen(process.env.PORT || 8080);
