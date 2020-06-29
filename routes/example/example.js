var express = require('express');
var router = express.Router();

var Example = require('./example.dao');

/* GET */
router.get('/', function(req, res, next) {
    Example.get({}, function(err, data) {
      if(err) {
          res.json({
              error: err
          })
      }

      res.json({
          example: data
      })
    })
});

router.post('/create', function(req, res, next) {
    Example.create({
      name: req.body.name,
      description: req.body.description
    }, (err) => {
        if(err) {
            res.json({
                error : err
            })
        }

        res.json({
            message : "Hero created successfully"
        })
    });
});


module.exports = router;
