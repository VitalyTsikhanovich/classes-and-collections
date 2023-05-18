/**
 * Реализуйте класс MyString, который будет иметь следующие методы:
 * метод reverse(), который параметром принимает строку, а возвращает ее в перевернутом виде,
 * метод ucFirst(), который параметром принимает строку, а возвращает эту же строку, сделав ее первую букву заглавной
 * и метод ucWords(), который принимает строку и делает заглавной первую букву каждого слова этой строки.
 */

class MyString {
    constructor() {
    }
    reverse(s) {
        return s.split('').reverse().join('')
    }

    ucFirst(s) {
        return s.charAt(0).toUpperCase() + s.slice(1)
    }

    ucWords(s) {
        return s.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
    }
}

const str = new MyString();

console.log(str.reverse('abcde')); //выведет 'edcba'
console.log(str.ucFirst('abcde')); //выведет 'Abcde'
console.log(str.ucWords('abcde abcde abcde')); //выведет 'Abcde Abcde Abcde'
