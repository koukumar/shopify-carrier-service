var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/', function(req, res, next) {
          resp = {
           "rates": [
               {
                   "service_name": "canadapost-overnight",
                   "service_code": "ON",
                   "total_price": "1295",
                   "description": "This is the fastest option by far",
                   "currency": "CAD",
                   "min_delivery_date": "2017-04-12 14:48:45 -0400",
                   "max_delivery_date": "2017-04-12 14:48:45 -0400"
               },
               {
                   "service_name": "fedex-2dayground",
                   "service_code": "2D",
                   "total_price": "2934",
                   "currency": "USD",
                   "min_delivery_date": "2017-04-12 14:48:45 -0400",
                   "max_delivery_date": "2017-04-12 14:48:45 -0400"
               },
               {
                   "service_name": "fedex-priorityovernight",
                   "service_code": "1D",
                   "total_price": "3587",
                   "currency": "USD",
                   "min_delivery_date": "2017-04-12 14:48:45 -0400",
                   "max_delivery_date": "2017-04-12 14:48:45 -0400"
               }
           ]
        }

        res.status(200).send(resp);
           
});

module.exports = router;
