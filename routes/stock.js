const con = require('../lib/db');
const express = require('express');
module.exports = {
    getStock: function (req, res) {
        con.query('select * from Stock join ItemInformation II on Stock.ITEM_ID = II.ITEM_ID', (err, rows) => {

            if (err) res.status(500).send(err);

            res.status(200).send(rows);
        });
    }
}