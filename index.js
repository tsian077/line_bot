var linebot = require('linebot');
var express = require('express');

var bot = linebot({
  channelId: 1563159400,
  channelSecret: "3d628e6884b13138f0f464bb6837ed3f",
  channelAccessToken: "ZnuA+qhk6gdU3I97FRJHIh+au33FnDqEajyr9Pck3OOBa3aOn6Y2pFRqwn3sPqhu0IA8vNXbyMK/0RlgUdRouZdOewEJ6nkTWHBvSa4nIwixtVlRhWRdGDbCfgWahBFLcGQZ4LFrXKF3wXSJ0iSsAQdB04t89/1O/w1cDnyilFU="

});

bot.on('message', function(event) {
    console.log(event); //把收到訊息的 event 印出來看看
  });
  
  const app = express();
  const linebotParser = bot.parser();
  app.post('/', linebotParser);
  
  //因為 express 預設走 port 3000，而 heroku 上預設卻不是，要透過下列程式轉換
  var server = app.listen(process.env.PORT || 8080, function() {
    var port = server.address().port;
    console.log("App now running on port", port);
  });