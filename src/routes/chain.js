const markovChain = require('../util/markovChain');
const unionChains = require('../util/unionChains');
const chainToObject = require('../util/chainToObject');

const express = require('express');
const OAuth = require('oauth');
const bodyParser = require('body-parser');
const router = express.Router();

router.use(bodyParser.json());

router.get('/', (req, res) => {
    let oauth = new OAuth.OAuth(
        'https://api.twitter.com/oauth/request_token',
        'https://api.twitter.com/oauth/access_token',
        process.env.TWIRKOV_API_KEY,
        process.env.TWIRKOV_API_SECRET,
        '1.0A',
        null,
        'HMAC-SHA1'
    );

    oauth.get(
        `https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=${req.query.screen_name || 'jack'}&count=200&include_rts=false&trim_user=true`,
        process.env.TWIRKOV_ACCESS_TOKEN,
        process.env.TWIRKOV_ACCESS_TOKEN_SECRET,
        (twitterErr, twitterData, twitterRes) => {
            if(twitterErr) {
                res.status(twitterErr.statusCode).send(twitterErr);
            }
            else {
                var perTweetChains = [];

                JSON.parse(twitterData).forEach((tweet) => {
                    var input = tweet.text.replace(/(?:https?|ftp):\/\/[\n\S]+/g, '');  //Remove URLs
                    while(input[0] === '@') {       //Remove leading @handles
                        input = input.substr(input.indexOf(' ') + 1);
                    }
                    input = input.trim();   //Remove unneccessary whitespace
                    input = input.toLowerCase();    //Set uppercase letters to lowercase
                    input = input.concat(' ||');    //Add ending sequence
                    input = input.split(' ');       //Split into array along spaces

                    perTweetChains.push(markovChain(input, req.query.order || 1));
                });

                res.status(200).send(chainToObject(perTweetChains.reduce(unionChains)));
            }
        }
    );
});

module.exports = router;
