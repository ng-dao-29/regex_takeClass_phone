export class Regex {
    private takeClass: RegExp = /^(C|A|P)[0-9]{4}(G|H|I|K|L|M)$/;
    private phoneNumber: RegExp = /^(0|\+84)(5[6|8|9]|3[2-9]|7[6-9|0]|9[0-4|6-9]|8[0-6|8|9]|)]$/;

    scheckTakeClass(className: string): boolean {
        return this.takeClass.test(className)
    }
    checkPhone(sdt: string): boolean {
        return this.phoneNumber.test(sdt)
    }
}