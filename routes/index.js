var events = require('../views/events.json');
/*
 * GET home page.
 */

exports.view = function(req, res){
  res.render('index', events);
};