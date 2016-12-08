function parse(req){
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
	
	return parametros;
}

//Exportar
module.exports.parse=parse;