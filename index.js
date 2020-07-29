const server = require('./server.js');
const port = process.env.PORT || 1337
server.listen(port, () => {
   console.log(`*\ *** Server is running on port ${port}. *** \*`)
})