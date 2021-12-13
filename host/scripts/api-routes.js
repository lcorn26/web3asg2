// Filename: api-routes.js
// Initialize express router
const helper = require('../scripts/helpers.js');

// const handleAllPlays = (app, play) => {
//     app.get('/api/list', helper.ensureAuthenticated, (req,resp) => {         
//       play.find({}, (err, data) => {
//         if (err) {
//         resp.json({ message: 'Unable to connect to images' });
//         } else {
//         // return JSON retrieved by Mongo as response
//         resp.json(data);
//         }
//         });
//    } );
// };

const handleAllPlays = (app, Play) => {
  app.route("/api/list").get((req, resp) => {
    Play.find({}, (err, data) => {
      if (err) {
        resp.json({ message: "Unable to connect to plays" });
      } else {
        resp.json(data);
      }
    });
  });
};

//get play by id
handlePlayByID = (app, Play) => {
   app.route("/api/play/:id").get((req, resp) => {
     Play.find({ id: req.params.id }, (err, data) => {
       if (err) {
         resp.json({ message: "Play not found!" });
       } else {
         resp.json(data);
       }
     });
   });
 };

// error messages need to be returned in JSON format
const jsonMessage = (msg) => {
   return { message : msg };
};

module.exports = {
   handleAllPlays,
   handlePlayByID,
 };