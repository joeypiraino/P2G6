/** @format */

const express = require("express");
const mysql = require("mysql2");
/* const connectDB = require("./config/connection.js"); */
const path = require("path");

var PORT = process.env.PORT || 8080;

const app = express();
/* const dotevn = require("dotenv"); */

app.use(googleStrategy);
app.use(passport.initialize());
// Api call for google authentication
app.get(
	"/",
	passport.authenticate("google", { scope: ["email", "profile"] }),
	(req, res) => {}
);
// Api call back function
app.get(
	"/callback",
	passport.authenticate("google", { scope: ["email", "profile"] }),
	(req, res) => {
		return res.send("Congrats");
	}
);

//Load config
/* dotevn.config({ path: "./config/config.env" }); */

// Serve static content for the app from the "public" directory in the application directory.
/* app.use(express.static("public")); */

// Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "login" }));
app.set("view engine", "handlebars");

//Static Folder
app.use(express.static(path.join(__dirname, "public")));

// Routes
app.use("/", require("./routes/index-routes"));

// Import routes and give the server access to them.
/* var routes = require("./routes");
app.use(routes); */

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function () {
	// Log (server-side) when our server has started
	console.log("Server listening on: http://localhost:" + PORT);
});
