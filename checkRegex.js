"use strict";
exports.__esModule = true;
var regex_1 = require("./regex");
var regex = new regex_1.Regex();
var checkPhone = ["0986123456", "0379123491", "03712344567", "0781234567"];
var checkPhone2 = ["05412434", "023765353", "0678134141341", "09993453235"];
var checkClass1 = ["C0822H", "A0889G", "P1234M", "A0987K"];
var checkClass2 = ["c0822h", "Mu897L", "reggg", "EDM8D"];
function checkPhoneNumber() {
    for (var _i = 0, checkPhone_1 = checkPhone; _i < checkPhone_1.length; _i++) {
        var phone1 = checkPhone_1[_i];
        var check = regex.checkPhone(phone1);
        console.log("sdt ".concat(phone1, " \u0111\u00FAng \u0111\u1ECBnh d\u1EA1ng? ").concat(check));
    }
    for (var _a = 0, checkPhone2_1 = checkPhone2; _a < checkPhone2_1.length; _a++) {
        var phone2 = checkPhone2_1[_a];
        var check = regex.checkPhone(phone2);
        console.log("sdt ".concat(phone2, " \u0111\u00FAng \u0111\u1ECBnh d\u1EA1ng? ").concat(check));
    }
}
function checkClass() {
    for (var _i = 0, checkClass1_1 = checkClass1; _i < checkClass1_1.length; _i++) {
        var takeClass = checkClass1_1[_i];
        var check = regex.scheckTakeClass(takeClass);
        console.log("teen l\u1EDBp ".concat(takeClass, " h\u1EE3p l\u1EC7 ? ").concat(check));
    }
    for (var _a = 0, checkClass2_1 = checkClass2; _a < checkClass2_1.length; _a++) {
        var takeClass = checkClass2_1[_a];
        var check = regex.scheckTakeClass(takeClass);
        console.log("teen l\u1EDBp ".concat(takeClass, " h\u1EE3p l\u1EC7 ? ").concat(check));
    }
}
checkPhoneNumber();
checkClass();
