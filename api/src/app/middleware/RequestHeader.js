function addRequestHeader(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Expose-Headers", "x-access-token")
    res.header(
      "Access-Control-Allow-Headers", 
      "Content-Type, x-access-token, Origin, X-Requested-With, Accept, Authorization, X-XSRF-TOKEN"
    )
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE')
   
    next()
}

module.exports = addRequestHeader; 