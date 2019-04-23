const express = require('express');
var session = require('express-session');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
app.use(bodyParser.json());
app.use(session({ secret: 'codingdojorocks' }));
app.use(express.static( __dirname + '/public/dist/public' ));

app.listen(9000, function(){
    console.log('listening at port 9000');
})

require('./server/config/mongoose');
require('./server/config/routes')(app);
