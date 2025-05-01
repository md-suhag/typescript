"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
{
    var friends1 = ["suhag", "suhan", "shihab", "sourob"];
    var friends2 = ["abdul", "rahim", "karim", "josim"];
    var allFriends = __spreadArray(__spreadArray([], friends1, true), friends2, true);
    console.log(allFriends);
    var greetUser = function () {
        var userNames = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            userNames[_i] = arguments[_i];
        }
        userNames.forEach(function (userName) { return console.log("hi ".concat(userName)); });
    };
    greetUser("fahim", "sharif", "mahbub", "josim");
}
