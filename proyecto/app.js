var express=require("express");

var app=express();

//Servir archivos estaticos (imagenes,css,js)
//la ruta sería esta: http://localhost:8080/app.css
app.use(express.static("public")); 

app.set("view engine","jade");

app.get("/",function(req,res){
	res.render("index");
});

app.get("/login",function(req,res){
	res.render("login");
});

app.listen(8080);