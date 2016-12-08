var http=require("http"),
	fs=require("fs"),
	parser=require("./params_parse.js"); //Añadir el nuevo modulo creado

var p=parser.parse; //Importar la funcion

http.createServer(function(req, res){

	if(req.url.indexOf("favicon.ico")>0){
		return;
	}

	fs.readFile("./index.html",function (err,html) {
		var html_string=html.toString();

		//Expresion regular que busca en el html {x}
		var variables=html_string.match(/[^\{\}]+(?=\})/g);
		
		var parametros =p(req); //Llamar a la funcion del modulo

		for (var i = variables.length - 1; i >= 0; i--) {
			//[nombre,apellido]
			var variable=variables[i];
			//parametros[variable]
			//parametros[]
			html_string=html_string.replace("{"+variables[i]+"}",parametros[variable]);
		}
		
		//Mandar el contenido
		res.writeHead(200,{"Content-Type":"text/html"});
		res.write(html_string);
		res.end();
	});
}).listen(8080);