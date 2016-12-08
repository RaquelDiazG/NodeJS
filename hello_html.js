var http=require("http"),
	fs=require("fs");

// LECTURA SINCRONA
// var html=fs.readFileSync("./index.html");

// http.createServer(function(req, res){
// 	res.write(html);
// 	res.end();
// }).listen(8080);


// LECTURA ASINCRONA
http.createServer(function(req, res){
	fs.readFile("./index.html",function (err,html) {
		res.write(html);
		res.end();
	});
}).listen(8080);

