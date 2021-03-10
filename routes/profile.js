var events = require('../views/events.json');
exports.view = function(req, res){
    res.render('profile', events);
};