const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const https = require("https");
const app = express();

app.use(express.static("public")); //Allows the server to take in the static pages (CSS, Bootstrap)
app.use(express.urlencoded({extended: true})); //Uses express's "urlencoded" option to pass to the server data from an HTML form that has been received through a form.


app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
});