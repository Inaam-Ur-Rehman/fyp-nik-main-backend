const con = require('../lib/db');
const express = require('express');
module.exports = {
    getSuppliers: function (req, res) {
        con.query('SELECT * FROM Supplier', (err, rows) => {

            if (err) res.status(500).send(err);

            res.status(200).send(rows);
        });
    }
}