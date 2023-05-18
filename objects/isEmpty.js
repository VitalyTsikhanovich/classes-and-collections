/**

 * Описание задачи: Напишите функцию, которая делает поверхностную проверку объекта на пустоту.
 * Ожидаемый результат: ({}) => true,
 ({ a: undefined }) => true,
 ({ a: 1 }) => false
 * Пустые значения: '', null, NaN, undefined
 * @param {Object} object - объект с примитивами
 * @returns {boolean}
 */

const isEmpty = (object) => {
    // throw new Error(`Напишите здесь свое решение ${object}`);
    for (let key in object) {
        if (object.hasOwnProperty(key)) {
            if (object[key] !== '' && object[key] !== null && !Number.isNaN(object[key]) && object[key] !== undefined) {
                return false
            }
        }
    }
    return true
};

const data = {a: 1, b: undefined};
const data2 = {a: undefined};
console.log(isEmpty(data)); // false
console.log(isEmpty(data2)); // true
