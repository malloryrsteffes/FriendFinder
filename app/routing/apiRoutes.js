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

        // This is how we will select which friend in the array will be our best
       var bestFriendIndex = 0;
       // Starting closest difference value to compare to. Needs to start at a high number in case someone is really weird!
       var closestDifference = 1000; 
      

        // Loop through the friends array
        for (i = 0; i < friendArray.length; i++){
            // Set a starting difference of zero for each friend 
            var totalDifference = 0;
            // Loop through the scores from the user
            for (j = 0; j < newFriend.scores.length; j++){
                // use the math.abs function to find the difference between the user scores 
                //and the scores from each friend the friendsArray
                var difference = Math.abs(friendArray[i].scores[j] - newFriend.scores[j]);
                totalDifference += difference;
            }
            // if the friend's distance is closer than our starting difference
            if (totalDifference < closestDifference){
                // set our best friend index to that friend's location in the friendArray. We'll use this in our  res.json later.
                bestFriendIndex = i;
                // set our new closest difference to that friend's difference
                closestDifference = totalDifference;
            }
        }
        // MOST IMPORTANTLY - we send the friend located at our bestFriendIndex in the friend array to the modal
        res.json(friendArray[bestFriendIndex]);
        // Then we push our new friend outo the friend Array.
        friendArray.push(newFriend);
        
    })
}