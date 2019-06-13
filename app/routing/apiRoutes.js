var friendData = require("../data/friends");

module.exports = function(app) {

  app.get("/api/friends", function (req, res) {
    console.log(friendData);
    res.json(friendData);
  });

  

  app.post("/api/friends", function(req, res) {
    console.log("post"); 
    var friend = {
      "name": "Ahmed",
      "photo": "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
      "scores": [
        5,
        1,
        4,
        4,
        5,
        1,
        2,
        5,
        4,
        1
      ]
    }

  });


  app.post("/api/clear", function(req, res) {
    tableData.length = 0;
    waitListData.length = 0;

    res.json({ ok: true });
  });
};
