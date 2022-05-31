const con = require('../lib/db');
const express = require('express');
module.exports = {
    getShopDetails: function (req, res) {
        con.query('SELECT * FROM BusinessInformation', (err, rows) => {

            if (err) res.status(500).send(err);

            res.status(200).send(rows);
        });
    }
}