/**
 * Реализуйте класс Validator, который будет проверять строки.
 * К примеру, у него будет метод isEmail параметром принимает строку и проверяет, является ли она корректным емейлом или нет.
 * Если является - возвращает true, если не является - то false.
 * Кроме того, класс будет иметь следующие методы: метод isDomain для проверки домена,
 * метод isDate для проверки даты и метод isPhone для проверки телефона:
 */
class Validator {
    constructor(email, domain, date, phone) {
        // this.email = email
        // this.domain = domain
        // this.date = date
        // this.phone =phone
    }

    isEmail(email) {
        // return !!email.includes('@');
        return /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,})+$/.test(email);
    }
    isDomain(domain) {
        return /^[a-z\d]+(-[a-z\d]+)*(\.[a-z\d]+(-[a-z\d]+)*)*$/i.test(domain);
    }

    isDate(date) {
        return /^\d{2}.\d{2}.\d{4}$/.test(date);
    }

    // isPhone(phone) {
    //     return /^(?!\+.*\(.*\).*--.*$)(?!\+.*\(.*\).*-$/.test(phone);
    // }

}

const validator = new Validator();

console.log(validator.isEmail('phphtml@mail.ru'));
console.log(validator.isDomain('phphtml.net'));
console.log(validator.isDate('12.05.2020'));
// console.log(validator.isPhone('+375 (29) 817-68-92')); //тут можете формат своей страны






