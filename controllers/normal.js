var pg = require('pg');
var path = require("path"); //for traversing of paths
var root = path.dirname(require.main.filename);
var conString = "postgres://kean:soraxy31@localhost/Twittur";

exports.redirectLanding = function(req,res,next){ //callback function
  backURL = req.route;
  if(req.session.email && req.session.utype == 1){
    res.sendFile((path.join(root+'/public'+'/Home.html')));
  } else{
    var backURL = req.session.backURL || '/';
    res.redirect(backURL);
  }
};
