var http=require("http"),
	fs=require("fs");

http.createServer(function(req, res){

	if(req.url.indexOf("favicon.ico")>0){
		return;
	}

	fs.readFile("./index.html",function (err,html) {
		var html_string=html.toString();

		//Expresion regular que busca en el html {x}
		var variables=html_string.match(/[^\{\}]+(?=\})/g);
		var parametros=[];
		//Hay parametros
		if(req.url.indexOf("?")>0){
			// /?nombre=Raquel&apellido=Diaz
			var url_data=req.url.split("?");
			var parametros=url_data[1].split("&");
			// [nombre=Raquel, apellido=Diaz] 
		}

		for (var i = parametros.length - 1; i >= 0; i--) {
			var parametro=parametros[i];
			// nombre=Raquel
			var param_data=parametro.split("=");
			//[nombre,Raquel]
			parametros[param_data[0]]=param_data[1];
			//{nombre:Raquel}
		}
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