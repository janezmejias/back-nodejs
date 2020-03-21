var express = require('express')
const bodyParser = require('body-parser');

var app = express()
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.raw());

require('./item/controller/itemController')(app);

app.listen(9000, () => {  
  console.log('...Server is listen http on http://localhost:9000')
  console.log("...Press CTRL-C to stop\n");
});