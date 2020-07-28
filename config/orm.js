// Import MySQL connection.
var connection = require("../config/connection.js");

const orm = {
    selectAll: (tableName, cb) => {
        const query = `SELECT * FROM ${tableName}`;
        connection.query(query, (err, res) => {
            if (err) throw err;
            cb(res);
          
        });
    },
    insertOne: (tableName, _cars, cb) => {
        const query = `INSERT INTO ${tableName} (car_make, car_model, car_Year, car_VIN) VALUES ${carMake, carModel, carYear, carVIN}`;
        connection.query(query, (err, res) => {
            if (err) throw err;
            cb(res);
         
        });
    },
    updateOne: (tableName, carsId, cb) => {
        const query = `UPDATE ${tableName} SET devoured = true  WHERE id = ${carId}`;
        connection.query(query, (err, res) => {
            if (err) throw err;
            cb(res);
    
        });
    }
};



module.exports = orm;