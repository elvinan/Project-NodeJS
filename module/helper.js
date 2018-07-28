const fs = require('fs');
const url = require('url');

function error404(res){
    res.writeHead(404);
    res.write('Fage not found!');
    res.end();
  }
  
  function showHTML(path, res){
    fs.readFile(path, (err, data) => {
      if (err){
        error404(res);
      }
      else{
        res.write(data);
      }
      res.end();
    });
  }
  
 module.exports = {
    onRequire: function onRequire(req, res) {
    const path = url.parse(req.url).pathname;
    switch(path){
      case '/': showHTML('./page/home.html', res);
      break;
  
      case '/about': showHTML('./page/about.html', res);
      break;
  
      default:
       error404(res);
      break;
    }
  }
}
  