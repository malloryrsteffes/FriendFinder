// We need link our routes to our friends data source
var friendArray = require("../data/friends");

// ROUTING ============================================

module.exports = function(app){

    // GET
    app.get("/api/friends", function(req, res){
        res.json(friendArray);
    })


    // POST
    app.post("/api/friends", function(req, res){
        
        friendArray.push(req.body);
    })
}