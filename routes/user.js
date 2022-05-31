const con = require('../lib/db');
const express = require('express');
module.exports = {
    getUsers: function (req, res) {
        const username = req.body.username.toString();
        const password = req.body.password.toString();
        con.query('SELECT USER_ID FROM Users where Username=? and Password=?',
            [ username, password ], (err, rows) => {

                if (err) res.status(500).send(err);
                res.status(200).send(rows[ 0 ]);
            });
    },
    getUser: function (req, res) {
        con.query('SELECT USER_ID, UserName, FullName FROM Users WHERE USER_ID = ?', [ String(req.params.id) ], (err, rows) => {

            if (err) res.status(500).send(err);

            res.status(200).send(rows);
        });
    },
    getAllUsers: function (req, res) {
        con.query('select EmployeeName, EMP_ID, Designation, Address, PhoneNo from Employee;', (err, rows) => {

            if (err) res.status(500).send(err);

            res.status(200).send(rows);
        });
    }
}