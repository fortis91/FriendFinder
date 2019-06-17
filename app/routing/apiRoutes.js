let friendData = require("../data/friends");

module.exports = function (app) {

  app.get("/api/friends", function (request, response) {
    response.json(friendData);
  });

  app.post("/api/friends", function (request, response) {
    console.log(request.body);
    var friend = request.body;

    // var bestFriend = {
    //   name: 'friend',
    //   photo: "http://d29k4lz094jbxq.cloudfront.net/wp-content/uploads/2018/03/22085842/Gilligan-Gets-Bugged-gilligans-island-29860649-813-621.jpg",
    // }
    // response.json(bestFriend);
    let minimumDifference = 100;
    let bestFriend = null;
    // let friend = request.body;
    for (let i = 0; i < friendData.length; i++) {
      let currentDifference = getDifference(friend, friendData[i]);
      if (currentDifference < minimumDifference) {
        minimumDifference = currentDifference;
        bestFriend = friendData[i];
      }
    }
    friendData.push(friend);
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