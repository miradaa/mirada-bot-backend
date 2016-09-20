var express = require('express');
var router = express.Router();
var request = require('request');

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
