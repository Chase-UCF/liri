var twitter = require('twitter');
var keys = require('./key.js');
var twitKeys = keys.twitterKeys;
var client = new twitter(twitKeys);
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
    client.get('search/tweets', {q: 'Chase_w_r', count: 20}, function(error, tweet, response) {
        if(error){
            console.log(error);
        }else{
            console.log(tweet);
        }
    });
};