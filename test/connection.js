const mongoose = require("mongoose");

// Connect to mongoDB

mongoose.connect("mongodb://localhost/testaroo");

mongoose.connection.once('open',function(){

    console.log("Connection has been made.")
    
}).on('error',function(error){

    console.log("Connection Error.", error);
})
