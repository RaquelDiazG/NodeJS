var http=require("http"),
	fs=require("fs");

http.createServer(function(req, res){
	fs.readFile("./index.html",function (err,html) {
		var html_string=html.toString();

		//Expresion regular que busca en el html {x}
		var variables=html_string.match(/[^\{\}]+(?=\})/g);
		var nombre="Coco";

		for (var i = variables.length - 1; i >= 0; i--) {
			//Ejecutar como codigo JS para obtener el valor de dicha variable
			var value = eval(variables[i]);
			//Reemplazar el contenido con llaves por su valor correspondiente
			html_string=html_string.replace("{"+variables[i]+"}",value)
		}
		
		//Mandar el contenido
		res.writeHead(200,{"Content-Type":"text/html"});
		res.write(html_string);
		res.end();
	});
}).listen(8080);