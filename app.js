// local httpserver at 80
// if you dont have internet access
// sudo vi etc/host
// 127.0.0.1 iuqerfsodp9ifjaposdfjhgosurijfaewrwergwea.com
// node js required
var app = require('express')();
var server = app.listen(80, '0.0.0.0', function () {
	console.log('[%d]- http server listening',process.pid);
});
app.use(function (req, res) {
// you can explore req.body or req.query parameters,,,,
  res.sendStatus(200);
});
