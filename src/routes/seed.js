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
                var firstWords = [];

                JSON.parse(twitterData).forEach((tweet) => {
                    var input = tweet.text.replace(/(?:https?|ftp):\/\/[\n\S]+/g, '');  //Remove URLs
                    while(input[0] === '@') {       //Remove leading @handles
                        input = input.substr(input.indexOf(' ') + 1);
                    }
                    input = input.trim();
                    input = input.substr(0, input.indexOf(" "));
                    if(input.length > 0) {
                        input = input.toLowerCase();
                        firstWords.push(input);
                    }
                });

                res.status(200).send(firstWords);
            }
        }
    );
});

module.exports = router;
