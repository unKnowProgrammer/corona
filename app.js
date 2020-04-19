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
	
	axios.get("https://api.collectapi.com/corona/totalData" , {
		headers : {
			authorization: "apikey 49IHyG0NKyBbydz6hZ9YAN:4MnYcl5y7F2G7I6tpYvpVs"
		}
	}).then(response => {
		total = response.data.result;
		res.render("index.ejs" , {
			totalCases : total.totalCases,
			totalDeaths : total.totalDeaths,
			activeCases : total.activeCases,
			Recovered : total.totalRecovered,
			newCases : total.newCases,
			newDeaths : total.newDeaths,
			header : header

		})
	}).catch(err => {
		console.log("HATA : " + err)
	})
		
})


app.listen(process.env.PORT)

