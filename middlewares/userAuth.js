// custom middleware to verify the time of the request
const authentication = false

const auth = (req, res, next) => {
    if (authentication === true) {
        console.log('middleware');
        next()
    }
    res.send('you are not authorized')
}

module.exports = auth;