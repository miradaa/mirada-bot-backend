var express = require('express');
var router = express.Router();
var request = require('request');
// options.url = "https://api.ciscospark.com/v1/webhooks/incoming/Y2lzY29zcGFyazovL3VzL1dFQkhPT0svMjk1NjYyYjYtZDk4Zi00YmE5LWEzNzEtMGZlMWQyOTM4Njg4";
  // options.method = 'post';
  // request(options, function (err, rel, body) {
  //   res.reply("There has been an error! I'm unable to find the topic: "+subject);
  //   });
/* GET home page. */
router.post('/', function(req, res) {
    var url = "https://api.ciscospark.com/v1/messages";
    var data = {
      "roomId" : "291d9f00-778d-11e6-bfb0-afd0ebd25e6b",
      "html" : '<h1 style="background-color:powderblue;">Shawn is a superbitch!</h1>'
    }
    var headers = {
        'Content-Type': 'application/json; charset=utf-8',
        'Accept': 'application/json',
        'Authorization':'Bearer OTRlZmQ0ZjUtNDU0MC00MzhkLWI3NjAtNzcyMDZlNjYyZjZhN2M1NjdhMDYtMjRh'
    };
    // console.log(req.body);

    var options = {
        url: url,
        body: data,
        json: true,
        headers: headers
    };
    if(req.body.personId != 'Y2lzY29zcGFyazovL3VzL1BFT1BMRS9jMmRjMWZkMi1iZWYyLTQzNGQtYTE4NS00YjZlN2RlMzc1ZmE'){
        request.post(options,function (error, response, body) {
            if (!error && (response.statusCode == 200 || response.statusCode == 202)) {
                console.log('[DEBUG] SMS sent!');
                console.log(response.body);
                res.json("200OK");

            }else if (response.statusCode == 403){
               console.log('[DEBUG] An error occured while sending the Delivery Report. Authentication error');
            }else{
               console.log('[DEBUG] An error occured while sending the SMS.');
               console.log(body);
            }
        });
    }else{
        res.json("200OK");
    }
});
module.exports = router;
