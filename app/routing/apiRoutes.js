let friends = require("../data/friends");

module.exports = function (app) {

  for (var i = 0; i < friends.length; i++) {
    const sum = friends[i].scores.reduce(add);
    console.log(friends[i].name +': '+sum);
  }
  app.get("/api/friends", function (request, response) {
    response.json(friends);
  });

  app.post("/api/friends", function (request, response) {
    var friend = request.body;

    let minimumDifference = 50;
    let bestFriend = null;
    for (let i = 0; i < friends.length; i++) {
      let currentDifference = getDifference(friend, friends[i]);
      if (currentDifference < minimumDifference) {
        minimumDifference = currentDifference;
        bestFriend = friends[i];
      }
    }
    friends.push(friend);
    response.json(bestFriend);
  });

};

function getDifference(friend1, friend2) {
  let difference = 0;
  for (let i = 0; i < friend1.scores.length; i++) {
    difference += Math.abs(friend1.scores[i] - friend2.scores[i]);
  }
  return difference;
}