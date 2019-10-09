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

        // grab our newFriend data
        var newFriend = req.body;
        // turning the string of scores into numbers
        for(var i = 0; i < newFriend.scores.length; i++) {
            newFriend.scores[i] = parseInt(newFriend.scores[i]);
          }

        console.log(newFriend.scores);

        // We need to find a way to find the absolute value between two numbers. 
        // Sample code pulled from Mozilla:
        // function difference(a, b) {
        //     return Math.abs(a - b);
        //   }

        // Loop through the friends array
        for (i = 0; i < friendArray.length; i++){
            // Set a starting difference of zero
            var difference = 0;
            // Loop through the scores from the user
            for (j = 0; j < newFriend.scores.length; j++){
                // use the math.abs function to find the difference between the user scores 
                //and the scores from each friend the friendsArray
                difference += Math.abs(friendArray[i].scores[j] - newFriend.scores[j]);

            }
            // IT WORKS KINDA
            console.log(friendArray[i].name + ' difference = ' + difference);

        }
        friendArray.push(newFriend);
    })
}