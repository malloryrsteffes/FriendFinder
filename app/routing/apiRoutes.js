// We need link our routes to our friends data source
var friendData = require("../data/friends");

// ROUTING ============================================


module.exports = function(app){

    // GET
    app.get("/api/friends", function(res, req){
        res.json(friendData);
    })


    // POST
    app.post("/api/friends", function(res,req){
        friendData.push(req.body);
    })
}