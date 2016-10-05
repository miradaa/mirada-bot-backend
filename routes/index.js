var express = require('express');
var router = express.Router();
var request = require('request');
var apiai = require('apiai');

var app = apiai("a77b2f6f1b8f4747b7d64a9f90cdbde2");


router.post('/request', function(req, res) {
  var request = app.textRequest(req.body.text);

  request.on('response', function(response) {
      console.log(response);
      res.json(response);
  });

  request.on('error', function(error) {
      console.log(error);
      res.json(error);
  });

  request.end()
});
router.get('/', function(req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    console.log(req.body);

    result = {
      message: "Great question! ACC gen 3 is expected to be launched in Q2 of FY17, and I also found some useful information for you.",
      table: [
          {
            type: "progress",
            value: 0.4
          },
          {
            type: "file",
            extension: "pptx",
            filename: "roadmap",
            url: ""
          },
          {
            type: 'link',
            value: 'https://cisco.jiveon.com/docs/DOC-821714'
          },
          {
            type: 'person',
            value:[
              {
                name: 'sacha',
                id: 'tc',
                email: 'sacha@cisco.com',
                address: 'SJ MR1',
                phone: '4089097867',
                title: 'responsible for project'
              },
              {
                name: 'mitchell',
                id: 'nc',
                email: 'mitchell@cisco.com',
                address: 'SJ MR1',
                phone: '4089097867',
                title: 'responsible for content'
              }
            ]
          }
      ]
  }
  res.json(result)
});

module.exports = router;
