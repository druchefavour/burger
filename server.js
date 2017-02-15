// Require the following npm packages inside of the server.js file:
		// express
		// body-parser
		// method-override
		
var express = require("express");
var bodyParser = require("body-parser");
var methodOveride = require("method-override");

var app = express();
var port = 3000;

// Serve static content for the app from the "public" directory in the application directory

app.use(express.static(process.cwd() + "/public"));

// Parse application/x-www-form-urlencoded

app.use(bodyParser.urlencoded({ extended: false }));

// Override with POST having ?_method=DELETE

app.use(methodOverride("_method"));
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var mysql = require("mysql");


