var express = require('express');

var app = express();

var port = process.env.PORT || 3000;
//Look for a port and if it doesnt exist, give it 3000

//Setting up a handler. Use a / and a callback function
app.get('/', function(request, response){
    response.send('welcome');
});

app.listen(port, function(){
    console.log("Running" + port);
});