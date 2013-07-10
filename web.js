var express = require('express');

var app = express.createServer(express.logger());

//var fs = require('fs');
//var content = fs.readFileSync('index.html', function (err, data) {console.log(data);});

app.get('/', function(request, response) {
  response.send('Hello World 3!' + ' index.html' );
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
