// DEPENDENCIES =====================================================
// We need the path package to get the correct filepath for our html page

var path = require("path");


// ROUTING =====================================================
module.exports = function(app){
    // These are our HTML get requests

    //Home
    app.get("/", function(req, res){
        res.sendFile(path.join(__dirname, "../public/home.html"));
    })

    //The survey
    app.get("/survey", function(req, res){
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    })


};