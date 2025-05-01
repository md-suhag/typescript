"use strict";
function addValue(num1, num2) {
    return num1 + num2;
}
var subtractValue = function (a, b) { return a - b; };
var userAccount = {
    name: "suhag",
    balance: 1000,
    addBalance: function (balance) {
        return "My new balance is : ".concat(this.balance + balance);
    },
};
var arr = [1, 2, 5, 6, 1];
var squareOfArr = arr.map(function (elem) { return elem * elem; });
