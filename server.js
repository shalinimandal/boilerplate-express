var express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
var app = express()
app.use(cors());
app.use(bodyParser.json());

if (!process.env.DISABLE_XORIGIN) {
  app.use(function(req, res, next) {
    var allowedOrigins = ['https://narrow-plane.gomix.me', 'https://www.freecodecamp.com'];
    var origin = req.headers.origin || '*';
    if(!process.env.XORIG_RESTRICT || allowedOrigins.indexOf(origin) > -1){
         console.log(origin);
         res.setHeader('Access-Control-Allow-Origin', origin);
         res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    }
    next();
  });
} 
app.get('*', (req, res) => {
  console.log("Hello World");
  res.end('Hello World');
  
});

app.listen(3000, ()=> {
  console.log("Hello World");
});
