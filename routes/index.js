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
    var url = "https://api.ciscospark.com/v1/webhooks/incoming/Y2lzY29zcGFyazovL3VzL1dFQkhPT0svMjk1NjYyYjYtZDk4Zi00YmE5LWEzNzEtMGZlMWQyOTM4Njg4";
    var data = {"text":"Shawn is a bitch"};
    var headers = {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization':'Bearer MmIzMzc1YjktNDdlYS00YjE0LTg4ZmUtMDYzN2VhNGZlZGZhNzQ2YWVhZDYtNmFi'
    };
    // console.log(req.body);

    var options = {
        url: url,
        body: data,
        json: true,
        headers: headers
    };
    if(req.body.personId != 'Y2lzY29zcGFyazovL3VzL1BFT1BMRS9jODdiOWE2MS0zZjU0LTQzOTYtOTA3Mi1hYzcyYzUzMDZmYzA'){
        request.post(options,function (error, response, body) {
            if (!error && (response.statusCode == 200 || response.statusCode == 202)) {
                console.log('[DEBUG] SMS sent!');
                console.log(response.body);
                res.json("200OK");

            }else if (response.statusCode == 403){
               console.log('[DEBUG] An error occured while sending the Delivery Report. Authentication error');
            }else{
               console.log('[DEBUG] An error occured while sending the SMS.');
               console.log(error);
            }
        });
    }else{
        res.json("200OK");
    }
});
module.exports = router;
