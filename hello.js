var http=require("http");

var manejador=function(solicitud, respuesta){
	console.log("Hola mundo"); //se muestra en consola
	respuesta.end("Hola mundo"); //se muestra en el navegador
};

var servidor= http.createServer(manejador);

servidor.listen(8080);