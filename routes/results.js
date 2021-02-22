var events = require('../views/events.json');

exports.view = function(req, res){
    console.log(events);
    res.render('results', events);
};