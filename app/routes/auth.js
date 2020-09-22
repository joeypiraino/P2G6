/** @format */

var authController = require("../controllers/authcontroller");

module.exports = function (app, passport) {
	app.get("/signup", authController.signup);
	app.get("/signin", authController.signin);
	app.post(
		"/signup",
		passport.authenticate("local-signup", {
			successRedirect: "/dashboard",
			failureRedirect: "/signup",
		})
	);

	app.get("/dashboard", isLoggedIn, authController.dashboard);
	app.get("/logout", authController.logout);
	app.post(
		"/signin",
		passport.authenticate("local-signin", {
			successRedirect: "/dashboard",
			failureRedirect: "/signin",
		})
	);

	app.get("/myVehicles", isLoggedIn, authController.myVehicles);
	app.get("/dashboard", authController.dashboard);
	app.post(
		"/myVehicles",
		passport.authenticate("local-signin", {
			successRedirect: "/myVehicles",
			failureRedirect: "/dashboard",
		})
	);

	function isLoggedIn(req, res, next) {
		if (req.isAuthenticated()) return next();
		res.redirect("/signin");
	}
};
