var twitter = require('Twitter');
var keys = require('./key.js');
var twitKeys = keys.twitterKeys;
var userInput = process.argv[2];

switch(userInput) {
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
function myTweets(){
    twitKeys.get('search/tweets', {screen_name: 'Chase_w_r', count: 20}, function(error, tweet, response) {
        if(error){
            console.log(error);
        }else{
            console.log(tweet);
        }
    });
};