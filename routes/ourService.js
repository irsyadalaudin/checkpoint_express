const express = require('express');
const ourServiceRouter = express.Router();

/* GET ourService page */
ourServiceRouter.get('/', (req, res, next) => {		    // Define a route for handling GET requests to the '/ourService' URL
	res.render('ourService', {title: 'our service'});	// Handle the GET request by rendering the 'ourService' view (template)
});													    // and passing the title 'our service' to the view

module.exports = ourServiceRouter;						// Export the ourServiceRouter so it can be used in other parts of the application