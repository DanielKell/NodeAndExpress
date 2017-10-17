//JSON object that lays out what the file should look like

var mongoose = require('mongoose'),

    bookModel = mongoose.Schema({
    //Schema is a mongoose thing.

//Here we define the structure of the book
    title: {
        type: String
    },
    author: {type: String},
    genre: {type: String},
    read: {type: Boolean, default:false}
});

module.exports=mongoose.model('Book', bookModel);
//This tells Mongoose we have a new model/schema called Book