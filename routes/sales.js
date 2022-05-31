const con = require('../lib/db');
const express = require('express');
module.exports = {
    getSales: function (req, res) {
        con.query('SELECT * FROM Sales', (err, rows) => {

            if (err) res.status(500).send(err);

            res.status(200).send(rows);
        });
    },
    getCurrentDaySales: function (req, res) {
        con.query('select SUM(TotalPrice) as sum , SUM(TotalCost) as  cost from Sales where Sales_Date = curdate()', (err, rows) => {

            if (err) res.status(500).send(err);

            res.status(200).send(rows);
        })
    },
    getWeekSales: function (req, res) {
        con.query('select DAYNAME(Sales_Date) as day, sum(coalesce(TotalPrice,0)) as total from Sales where Sales_Date <= NOW() and Sales_Date >= Date_add(Now(), interval - 7 day) group by Sales_Date; ', (err, rows) => {

            if (err) res.status(500).send(err);

            res.status(200).send(rows);
        })
    },
    getTopSales: function (req, res) {
        con.query('select ItemName, sum(QTY) as total from Sales, ItemInformation where Sales.ITEM_ID = ItemInformation.ITEM_ID and Sales_Date= curdate() group by ItemName order by sum(QTY) desc limit 3; ', (err, rows) => {

            if (err) res.status(500).send(err);

            res.status(200).send(rows);
        })
    },
    getMonthlySales: function (req, res) {
        con.query(`select date_format(Sales_Date,'%M') as month,sum(TotalPrice) as total from Sales group by year(Sales_Date), month(Sales_Date) order by year(Sales_Date), month(Sales_Date); `, (err, rows) => {

            if (err) res.status(500).send(err);

            res.status(200).send(rows);
        })
    }
}