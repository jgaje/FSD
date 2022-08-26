const Employee = require('../models/employee');
exports.getdefault = function (req, res) {
    res.send('You are on the root route.');
};
//
exports.addemployee = function (req, res) {
    let empName = req.body.empName;
    let empPass = req.body.empPass;
    res.end(`POST success, you sent ${empName} and ${empPass}, thanks!`);
};
//
exports.aboutus = function (req, res) {
    res.send("You are on the about us route!!!");
};
//
exports.getemployees = function (req, res) {
    Employee.find({}, function (err, results) {
        if (err)
            res.end(err);
        res.json(results);
    });
};