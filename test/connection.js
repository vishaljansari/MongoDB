const mongoose = require("mongoose");

// ES6 promises

mongoose.Promise = global.Promise;

// Connect to db before tests run
before(function(done){

    // Connect to mongoDB
mongoose.connect("mongodb://localhost/testaroo");
mongoose.connection.once('open',function(){
    console.log("Connection has been made.") 
    done();
}).on('error',function(error){
    console.log("Connection Error.", error);
    })
})


// Drop the characters collection before each test

beforeEach(function(done){

    // Drop the collection

    mongoose.connection.collections.mariochars.drop(function(){

        done();

    })
})


