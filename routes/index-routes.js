/** @format */

// Requiring path to so we can use relative routes to our HTML files
const path = require("path");
const express = require("express");
const router = express.Router();

// Requiring our custom middleware for checking if a user is logged in
const isAuthenticated = require("../config/middleware/isAuthenticated");

router.get("/", function (req, res) {
  res.render("login", {
    layout: "login",
  });
});

router.get("/dashboard", function (req, res) {
  res.render("dashboard");
});

// module.exports = function (app) {
//   app.get("/", (req, res) => {
//     // If the user already has an account send them to the members page
//     if (req.user) {
//       res.redirect("/members");
//     }
//     res.sendFile(path.join(__dirname, "../public/signup.handlebars"));
//   });

//   app.get("/login", (req, res) => {
//     // If the user already has an account send them to the members page
//     if (req.user) {
//       res.redirect("/members");
//     }
//     res.sendFile(path.join(__dirname, "../public/login.handlebars"));
//   });

//   // Here we've add our isAuthenticated middleware to this route.
//   // If a user who is not logged in tries to access this route they will be redirected to the signup page
//   app.get("/members", isAuthenticated, (req, res) => {
//     res.sendFile(path.join(__dirname, "../public/members.handlebars"));
//   });
// };

module.exports = router;
