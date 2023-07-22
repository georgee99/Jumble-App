const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const { jumble } = require('./main.js');

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.writeHead(200, {'content-type': 'text/html; charset=utf-8'});
  res.end(" 🚀 ");
});


app.post('/api/jumble/:n', (req, res) => {
  const { n } = req.params;
  const { word } = req.body;

  const jumbledMessage = jumble(word, parseInt(n));

  res.json({ jumbledMessage });
});

// Start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});
