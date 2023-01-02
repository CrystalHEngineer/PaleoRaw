const express = require("express"); //Gets the "express" package.

const bodyParser = require("body-parser"); //Gets the "body-parser" package.

const app = express(); //Assigns "express" under "app".
app.use(express.urlencoded({extended: true})); //Uses express's "urlencoded" option to pass to the server data from an HTML form that has been received through a form.

app.get("/calculator", function(req, res){ //Saying to retrieve any requests (in this case, an HTML form) and send back a response.
    res.sendFile(__dirname + "/calculator.html"); //Says to respond with a file, "__dirname" means the 'directory name' as in "Desktop/javasscript/fullstack/PaleoRaw" + "/calculator.html"
});

app.post("/calculator", function(req, res){ //Says to respond to a "get" request by posting in response on the /calculator" page:
    var num1 = parseFloat(req.body.num1);
    var num2 = parseFloat(req.body.num2);

    var result = (num1 * num2);
    res.send("The result is " + result);
});

app.get("/Calculator", function(req, res){
    res.sendFile(__dirname + "/calculator.html")
});

app.post("/bmiCalculator", function(req, res){
    var weight = req.body.weight //This would accept a "string" input. 
    var weight = parseFloat(req.body.weight); //The "parseFloat" is what converts the value into decimals.
    var height = parseFloat(req.body.height);

    var bmi = weight / (height * height);

    res.send("Your BMI is " + bmi);
});

app.listen(3000, function(){ //Tells the server to "listen" for any requests (button clicks, form submissions, etc) on port 3000
    console.log("Server is running on port 3000."); 
});