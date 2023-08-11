// Import the 'express' module to create a router
const express = require('express');
const contactUsRouter = express.Router();

/* GET contactUs page. */
contactUsRouter.get('/', (req, res, next) => {			// Define a route for handling GET requests to the '/contactUs' URL
	res.render('contactUs', {title: 'contact us'});	    // Handle the GET request by rendering the 'contactUs' view (template)
});													    // and passing the title 'contact us' to the view

module.exports = contactUsRouter;						// Export the contactUsRouter so it can be used in other parts of the application