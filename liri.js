var Twitter = require('twitter');
var Spotify = require('spotify');
var Colors = require('colors');
var keys = require('./key.js');
var twitKeys = keys.twitterKeys;
var client = new Twitter(twitKeys);
var command = process.argv[2];
var userInput = process.argv;


switch (command) {
    case "my-tweets":
        myTweets();
        break;

    case "spotify-this-song":
        myPlayList();
        break;

    case "movie-this":
        myMovie();
        break;

    case "do-what-it-says":
        randomPick();
        break;
}

function myTweets() {
    var params = { screen_name: 'Chase_w_r', count: 20 };
    client.get('statuses/user_timeline', params, function(error, tweet, response) {
        if (error) {
            console.log(error);
        } else {
            for (var i = 0; i < tweet.length; i++) {
                console.log('\nCreated at: ' + tweet[i].created_at.bold.magenta + '\ntext: ' + tweet[i].text.bold.cyan);
            }
        }
    });
};

function myPlayList() {
    for (var i = 2; i < userInput.length; i++) {

        // Build a string with the address.
        song = userInput[i];
    }
    Spotify.search({ type: 'track', query: userInput }, function(err, data) {
        if (err) {
            console.log('Error occurred: ' + err);
            return;
        } else {
            console.log(data.tracks.href);
        }
    });

};
