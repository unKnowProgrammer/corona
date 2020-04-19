const express = require("express");
const fs = require("fs"); 
const axios = require("axios")

let app = express();
let header = fs.readFileSync("./head.html" , "utf8");
app.use("/public" , express.static("public"))

app.set("view engine" , "ejs");
var data;
var total;
app.get("/" , (req , res) => {
	
	res.render("test" , {data : "Merhaba Dünya"});
		
})


app.listen(process.env.PORT)

