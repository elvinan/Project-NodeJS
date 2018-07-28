const http = require('http');


const moduleConfig = require('./module/config')
const moduleHelper = require('./module/helper')

http.createServer(moduleHelper.onRequire).listen(moduleConfig.port,moduleConfig.hostname);
