var express = require('express')
var app = express()

///////////// WEB ROUTES
app.get('/', function (req, res) {
	res.send('Finally working.. Hi there!Print me!!!')
})

// HTTP SERVER
var server = app.listen(3000, function () {
  console.log('Example app listening at port 3000');
})
