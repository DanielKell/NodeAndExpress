var express = require('express');

var app = express();

var port = process.env.PORT || 3000;
//Look for a port and if it doesnt exist, give it 3000

//Creating a router
let bookRouter = express.Router();

bookRouter.route('/Books')
    .get(function(request, response) {
        var responseJson = {hello: "this is my api"};

        response.json(responseJson);
    });

app.use('/api', bookRouter); //Load all of the API routes 

//Setting up a handler. Use a / and a callback function
app.get('/', function(request, response){
    response.send('welcome');
});

app.listen(port, function(){
    console.log("Running" + port);
});