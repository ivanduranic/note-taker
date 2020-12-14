var express = require('express');
var app = express();
var apiRoutes = require("./routes/apiRoutes");
var htmlRoutes = require("./routes/htmlRoutes");
var PORT = process.env.PORT || 3000

//handle express data parsing || middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname + "./public"));

app.use("/api", apiRoutes)
app.use("/", htmlRoutes)
//listen to the port
app.listen(PORT, () => {
    console.log(`I am listening on port: ${PORT}`)
});