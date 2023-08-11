// Import the 'express' module to create a router
const express = require('express');
const auth = require('../middlewares/userAuth');
const homePageRouter = express.Router();

/* GET home page */
homePageRouter.get('/', (req, res, next) => {                   // Define a route for handling GET requests to the '/homePage' URL
    res.render('homePage', { title: 'home page express' });	    // Handle the GET request by rendering the 'homePage' view (template)
});                                                             // and passing the title 'home page express' to the view 

/* route to test the middleware auth */
homePageRouter.get('/auth', auth ,(req, res, next) => {         // This route is protected by the 'auth' middleware, which ensures authentication
    res.send('you are authorized');                             // If the user is authenticated, the middleware allows access and this handler sends 'you are authorized'
})

module.exports = homePageRouter;                                // Export the homePageRouter so it can be used in other parts of the application