// Filename: api-routes.js
// Initialize express router
const helper = require('../scripts/helpers.js');

let router = require('express').Router();
// Set default API response
router.get('/',  helper.ensureAuthenticated, function (req, res) {
    res.json({
        status: 'API Its Working',
        message: 'Welcome to RESTHub crafted with love!'
    });
});
// Export API routes
module.exports = router;

const handlelist = (app, play) => {
    app.route('/api/list', helper.ensureAuthenticated)
    .get( (req,resp) => {
    // use mongoose to retrieve all from Mongo
    play.find({}, (err, data) => {
    if (err) {
    resp.json({ message: 'Unable to connect to list' });
    } else {
    // return JSON retrieved by Mongo as response
    resp.json(data);
    }
    });
    });
   }; 


  const handleplay = (app, play) => {
      app.route('/api/play/:id')
  .get( (req,resp) => {
      play.find({id: req.params.id}, (err, data) => {
      if (err) {
          resp.json({message: 'Unable to find ID'});
      } else {
          resp.json(data);
      }
  });
  });
  };

  const handleUser = (app, user) => {
     app.route('/api/user/:id')
.get( (req,resp) => {
    user.find({id: req.params.id}, (err, data) => {
    if (err) {
         resp.json({message: 'Unable to find User'});
    } else {
         resp.json(data);
     }
 });
 });
 };

 module.exports = {
    handlelist,handleplay,handleUser
   };