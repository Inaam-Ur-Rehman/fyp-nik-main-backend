const con = require('../lib/db');

module.exports = {
    getAttendance: function (req, res) {
        con.query('select EmployeeName, Present, Absent,attendance.EMP_ID  from attendance inner join employee e on attendance.EMP_ID = e.EMP_ID where AttendanceDate=curdate() ;', (err, rows) => {

            if (err) res.status(500).send(err);

            res.status(200).send(rows);
        });
    },
    getAttendanceByID: function (req, res) {
        console.log(req.params.id)
        con.query('select * from attendance inner join employee e on attendance.EMP_ID = e.EMP_ID where e.EMP_ID=? ;', req.params.id, (err, rows) => {

            if (err) res.status(500).send(err);

            res.status(200).send(rows);
        });
    }
}