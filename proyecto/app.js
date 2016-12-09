var express=require("express");
var bodyParser=require("body-parser");

var app=express();

//Servir archivos estaticos (imagenes,css,js)
//la ruta sería esta: http://localhost:8080/app.css
app.use(express.static("public")); 

app.use(bodyParser.json()); //para peticiones application/json
app.use(bodyParser.urlencoded({extended:true})); 

app.set("view engine","jade");

app.get("/",function(req,res){
	res.render("index");
});

app.get("/login",function(req,res){
	res.render("login");
});

app.post("/users",function(req,res){
	console.log("Email: "+ req.body.email);
	console.log("Contraseña: "+ req.body.password);
	res.send("Recibimos tus datos");
});

app.listen(8080);