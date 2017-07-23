//var http = require('http')
//	, qs = require('querystring');
//var port = process.env.port || 9000;

//http.createServer(function (req, res) {
//	console.log(req.body);
//	let body = [];
//	var postBody = '';
//	req.on('data', (chunk) => {
//		body.push(chunk);
//		postBody += chunk;
//	});
//	req.on('end', () => {
//		var post = qs.parse(postBody);
//		console.log(post);

//		console.log(body);
//		body = Buffer.concat(body).toString();
//		console.log(body);
//		console.log(body[0]);
//		// 여기서 `body`에 전체 요청 바디가 문자열로 담겨있습니다.
//	});
//	console.log("body");
//	for (var i = 0; i < body.length; i++) {
//		console.log(body[i]);
//	}
//	//res.json("Loud and clear");
//	res.writeHead(200, { 'Content-Type': 'application/json' });
//	res.end("{\"dsa\" : \"dsa\"}");
//}).listen(port);


////!/usr/bin / env node
//var WebSocketServer = require('websocket').server;
//var http = require('http');

//var server = http.createServer(function (request, response) {
//	console.log((new Date()) + ' Received request for ' + request.url);
//	response.writeHead(404);
//	response.end();
//});
//server.listen(9000, function () {
//	console.log((new Date()) + ' Server is listening on port 8080');
//});

//wsServer = new WebSocketServer({
//	httpServer: server,
//	// You should not use autoAcceptConnections for production
//	// applications, as it defeats all standard cross-origin protection
//	// facilities built into the protocol and the browser.  You should
//	// *always* verify the connection's origin and decide whether or not
//	// to accept it.
//	autoAcceptConnections: false
//});

//function originIsAllowed(origin) {
//	// put logic here to detect whether the specified origin is allowed.
//	return true;
//}

//wsServer.on('request', function (request) {
//	if (!originIsAllowed(request.origin)) {
//		// Make sure we only accept requests from an allowed origin
//		request.reject();
//		console.log((new Date()) + ' Connection from origin ' + request.origin + ' rejected.');
//		return;
//	}

//	var connection = request.accept(null, request.origin);
//	console.log((new Date()) + ' Connection accepted.');
//	connection.on('message', function (message) {
//		if (message.type === 'utf8') {
//			console.log('Received Message: ' + message.utf8Data);
//			connection.sendUTF(message.utf8Data);
//		}
//		else if (message.type === 'binary') {
//			console.log('Received Binary Message of ' + message.binaryData.length + ' bytes');
//			connection.sendBytes(message.binaryData);
//		}
//	});
//	connection.on('close', function (reasonCode, description) {
//		console.log((new Date()) + ' Peer ' + connection.remoteAddress + ' disconnected.');
//	});
//});


// setup
var express = require('express');
var app = express();
var logger = require('morgan');
var bodyParser = require('body-parser');
var cors = require('cors');

// Parses unlecoded bodies
app.use(bodyParser.urlencoded({ extended: false }));
// Send JSON responds
app.use(bodyParser.json());
// Log requests to API using morgan
app.use(logger('dev'));
app.use(cors());

app.post('/', function (req, res) {
	console.log(req.body);

	var response = JSON.stringify({"retval":"1"});
	res.json(response);
});

app.listen(9000);
console.log("App listening on port 9000");





//var express = require('express')
//	, http = require('http')
//	, bodyParser = require('body-parser');
//var app = express();
//app.use(bodyParser.urlencoded({ extended: true }));
////app.use(bodyParser.json());
//app.post("/", function (req, res) {
//	res.writeHead(200, { "Content-Type": "text/plain" });
//	//post데이터확인
//	console.log(req.param('title', null));
//	res.end('test');
//});
//app.use(function (req, res) {
//	res.writeHead(404, { "Content-Type": "text/plain" });
//	res.end('404 ERROR');
//});
//http.createServer(app).listen(9000);

