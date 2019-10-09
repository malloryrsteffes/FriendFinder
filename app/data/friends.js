// We start with an empty array of friends
var friendArray = [
    {
        "name": "Mal S",
        "photo": "google.com",
        "scores": [
        1,
        5,
        5,
        1,
        3,
        5,
        4,
        5,
        5,
        5
        ]
        },
    {
        "name": "Bob Ross",
        "photo": "bobross.com",
        "scores": [
        3,
        4,
        2,
        1,
        1,
        5,
        5,
        2,
        2,
        3
        ]
        },
    {
        "name": "Zeke Elliott",
        "photo": "bobross.com",
        "scores": [
        5,
        1,
        5,
        2,
        5,
        2,
        1,
        5,
        3,
        4
        ]
        }
];

// Export the array. This makes it accessible to other files using require.
module.exports = friendArray;