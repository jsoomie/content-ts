"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HtmlReports = void 0;
var fs_1 = __importDefault(require("fs"));
var HtmlReports = /** @class */ (function () {
    function HtmlReports() {
    }
    HtmlReports.prototype.print = function (report) {
        var html = "\n  <!DOCTYPE html>\n  <html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\">\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <title>Report</title>\n  </head>\n  <body>\n    <div>\n      <h1>Analysis Output</h1>\n      <div>" + report + "</div>\n    </div>\n    <footer>  \n      <p>This Report was created by a class inside!</p>\n    </footer>\n  </body>\n  </html>\n    ";
        fs_1.default.writeFileSync("report.html", html);
    };
    return HtmlReports;
}());
exports.HtmlReports = HtmlReports;
