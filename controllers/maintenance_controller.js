const express = require("express");

const carMaintenance = require("../models/index.js");

const router = express.Router();

const connection = require("../config/connection.js")


// @desc Login/Landing page
//@route GET /
router.get('/', (req, res) => {
    res.render('login')
})

// @desc Dashboard
//@route GET / dashboard
router.get('/dashboard', (req, res) => {
    res.render('dashboard')
})




router.get("/", function(req, res) {
    index.selectAll((data) => {
        var hbsObject = {
            index: data
        };
        console.log(hbsObject)
        res.render("index", hbsObject);
    });
});

router.get("/api/burgers", function(req, res) {
    burger.selectAll((data), function() {
        const hbsObject = {
            burgers: data
        };
        res.json(hbsObject)
    });
});

router.post("/", function(req, res) {
    const newBurgerName = req.body.burger;
    const query = `INSERT INTO burgers (burger_name, devoured) VALUES (?, false);`
    connection.query(query, [newBurgerName], (err, result) => {
        if (err) throw err;
    });
    res.redirect("/");
    console.log(`you sent ${newBurgerName}`)
});

// router.get("/:id", function(req, res) {
//     const idNumber = req.params.id;
//     const query = "UPDATE burgers SET devoured = true  WHERE id = ?";
//     connection.query(query, [idNumber], (err, result) => {
//         if (err) throw err
//     });
// });

// router.delete("/:id", function(req, res) {
//     const idNumber = req.params.id;
//     const query = "DELETE FROM burgers WHERE id = ?;"
//     connection.query(query, [idNumber], function(err, res) {
//         if (err) throw err;
//     })
// });




module.exports = router;