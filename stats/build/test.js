"use strict";
var HoldAnything = /** @class */ (function () {
    function HoldAnything(data) {
        this.data = data;
    }
    Object.defineProperty(HoldAnything.prototype, "read", {
        get: function () {
            return console.log(this.data);
        },
        enumerable: false,
        configurable: true
    });
    return HoldAnything;
}());
var holdNumber = new HoldAnything(123);
var holdString = new HoldAnything("Hello there");
var holdBoolean = new HoldAnything(true);
holdNumber.read;
holdString.read;
holdBoolean.read;
