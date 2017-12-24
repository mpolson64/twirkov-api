# twirkov-api
## Overview
A RESTful API used to create n<sup>th</sup>-order Markov chains based on the past tweets from a given Twitter handle. These chains can be used to perform analysis on users or to procedurally generate tweets in their "tweeting-style"
## Routes
### GET chain
Returns a Markov chain object based on a user's recent tweets.
#### Resource Information
|Information    |Name                                           |
|---------------|-----------------------------------------------|
|Resource URL   |https://twirkov-api.herokuapp.com/api/chain    |
|Response format|JSON                                           |
#### Parameters
|Name       |Required   |Description                                            |Default Value  |Example    |
|-----------|-----------|-------------------------------------------------------|---------------|-----------|
|screen_name|optional   |The screen name of the user for whom to return results |*jack*         |*mpolson64*|
|order      |optional   |The order of the Markov chain to be returned           |*1*            |*4*        |
#### Example Request
*GET https://twirkov-api.herokuapp.com/api/chain?screen_name=davidleebron&order=2*
