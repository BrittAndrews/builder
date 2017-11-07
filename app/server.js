//dependencies
var express = require("express"),
    bodyParser = require("body-parser"),
    path = require("path"),
    app = express(),
    method = require("method-override"),
    PORT = process.env.PORT || 8080;

//middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
app.use(express.static(path.join(__dirname, "public")));
app.use(method("_method"));
//initalizing the listener
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});
//routes 
require("./routes/pageRoutes")(app);