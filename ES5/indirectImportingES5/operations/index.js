var add = require("./add");
var subtract = require("./substract");
var multiply = require("./multiplyAndDivide").multiply;
var divide = require("./multiplyAndDivide").howManyTimes;

module.exports = {
    add: add,
    subtract: substract,
    multiply: multiply,
    divide: divide
}