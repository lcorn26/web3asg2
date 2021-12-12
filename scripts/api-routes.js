// Filename: api-routes.js
// Initialize express router
const helper = require('../scripts/helpers.js');

const handleAll = (app, controller) => {
    app.get('/api/list', helper.ensureAuthenticated, (req,resp) => {         
      const data = controller.getAll();
      data.find({}, (err, data) => {
        if (err) {
        resp.json({ message: 'Unable to connect to images' });
        } else {
        // return JSON retrieved by Mongo as response
        resp.json(data);
        }
        });
   } );
};


// // return just the requested book
// const handleISBN10 = (app, controller) => {
//    app.get('/api/isbn10/:isbn10', helper.ensureAuthenticated, (req,resp) => {
//       const data = controller.findByISBN10(req.params.isbn10);
//       if (data) {
//          resp.json(data);
//       } else {
//          resp.json(jsonMessage(`ISBN ${req.params.isbn10} not found`));
//       }  
//    });
// };

// const handleTitle = (app, controller) => {
//    app.get('/api/title/:substring', helper.ensureAuthenticated, (req,resp) => {
//       const data = controller.findByTitle(req.params.substring);
//       if (data) {
//          resp.json(data);
//       } else {
//          resp.json(jsonMessage(`No title matches found for ${substring}`));
//       }          
//    });
// };

// error messages need to be returned in JSON format
const jsonMessage = (msg) => {
   return { message : msg };
};


module.exports = {
   handleAll
};