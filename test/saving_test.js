const assert = require("assert");
const MarioChar = require("../models/mariochar");
// Describe Tests

describe("Saving records", function(){

    // Create Tests

    it("Saves a record to the database", function(done){


        let char = new MarioChar({
            name : 'Mario',
            weight : 70
        })

        char.save().then(function(){
            assert(char.isNew === false)
            done();
        })
    })
})