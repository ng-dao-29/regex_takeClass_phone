import {Regex} from "./regex";

let regex = new Regex();
let checkPhone = ["0986123456","0379123491","03712344567","0781234567"];
let checkPhone2 = ["05412434","023765353","0678134141341","09993453235"];

let checkClass1 = ["C0822H","A0889G","P1234M","A0987K"];
let checkClass2 = ["c0822h","Mu897L","reggg","EDM8D"];

function checkPhoneNumber() {
    for (let phone1 of checkPhone) {
        let check: boolean = regex.checkPhone(phone1);
        console.log(`sdt ${phone1} đúng định dạng? ${check}`)
    }
    for (let phone2 of checkPhone2) {
        let check: boolean = regex.checkPhone(phone2);
        console.log(`sdt ${phone2} đúng định dạng? ${check}`)
    }
}
function checkClass() {
    for (let takeClass of checkClass1) {
        let check: boolean = regex.scheckTakeClass(takeClass);
        console.log(`teen lớp ${takeClass} hợp lệ ? ${check}`)
    }

    for (let takeClass of checkClass2) {
        let check: boolean = regex.scheckTakeClass(takeClass);
        console.log(`teen lớp ${takeClass} hợp lệ ? ${check}`)
    }
}

checkPhoneNumber();
checkClass()