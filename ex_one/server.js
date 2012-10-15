var http = require('http');

function ejecutar(){
	function onRequest(req, res){
		res.writeHead(200, {'Content-Type':'text/html'});
		var arr = [
			'<html>',
			'<head>',
			'<title>Hello Universe</title>',
			'<style type="text/css">h1{background:black;padding:10px;color:white;font-family:"Helvetica";}</style>',
			'</head>',
			'<body>',
			'<h1>HELLO UNIVERSE</h1>',
			'</body>',
			'</html>'
		];
		res.write(arr.join(''));
		res.end();
	}

	var server = http.createServer(onRequest).listen(6969);
	console.log("Server ON");
}

exports.ejecutar = ejecutar;