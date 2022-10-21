"use strict";
exports.__esModule = true;
exports.Regex = void 0;
var Regex = /** @class */ (function () {
    function Regex() {
        this.takeClass = /^(C|A|P)[0-9]{4}(G|H|I|K|L|M)$/;
        this.phoneNumber = /^(0|\+84)(5[6|8|9]|3[2-9]|7[6-9|0]|9[0-4|6-9]|8[0-6|8|9]|)]$/;
    }
    Regex.prototype.scheckTakeClass = function (className) {
        return this.takeClass.test(className);
    };
    Regex.prototype.checkPhone = function (sdt) {
        return this.phoneNumber.test(sdt);
    };
    return Regex;
}());
exports.Regex = Regex;
