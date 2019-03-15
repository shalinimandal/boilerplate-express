var express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
var app = express()
app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.end('Hello World!')
})

app.listen(3000, ()=> {
  console.log("Hello World");
});
