"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dateStringToDate = void 0;
var dateStringToDate = function (dateString) {
    //  28/10/2018
    var dateParts = dateString.split("/").map(function (value) {
        return parseInt(value);
    });
    var DAY = dateParts[0];
    var MONTH = dateParts[1] - 1;
    var YEAR = dateParts[2];
    return new Date(YEAR, MONTH, DAY);
};
exports.dateStringToDate = dateStringToDate;
