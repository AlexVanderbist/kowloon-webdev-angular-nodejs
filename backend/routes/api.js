var express = require('express');
var Subscriber = require('../models/subscriber');
var router = express.Router();

/* GET home page. */
router.post('/newsletter', function(req, res, next) {
    if (!req.body.email) return res.status(400).send("No email provided");

    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(req.body.email)) return res.status(400).send('Invalid email address provided');

    var now = new Date();
    var ip = req.headers['x-forwarded-for'] ||
        req.connection.remoteAddress ||
        req.socket.remoteAddress ||
        req.connection.socket.remoteAddress;

    var sub = new Subscriber({
        email: req.body.email,
        ip: ip,
        subscribed_at: now
    });

    Subscriber.find({
        email: req.body.email
    }, function(err, existing) {
        if (err) return res.status(500).send('Something went wrong saving the sub');

        if(existing) return res.status(409).send('This subscriber already exists');
        
        sub.save(function(err) {
            if (err) return res.status(500).send('Something went wrong saving the sub');
    
            return res.send(sub);
        });
    });
});

module.exports = router;
