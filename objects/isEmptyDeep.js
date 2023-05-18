/**

 * Описание задачи: Напишите функцию, которая делает глубокую проверку на пустоту объекта.
 * Пустые значения: '', null, NaN, undefined, [], {}
 * Ожидаемый результат: ({}) => true,
 ({ a: { b: undefined } }) => true,
 ({ a: { b: [] } }) => true
 * @param {Object} object - любой объект
 * @returns {boolean}
 */

 const isEmptyDeep = (object) => {
    if (object === '' || object === null || Number.isNaN(object) || object === undefined) {
        return true;
    }  //пуст

    if (Array.isArray(object)) {
        if (object.length === 0) {
            return true
        }
        // for (let i = 0; i < object.length; i++) {
        //     if (!isEmptyDeep(object[i])) {
        //         return false
        //     }
        // }
        for (let item of object) {
            if (!isEmptyDeep(item)) {
                return false
            }
        }
    }

    if (typeof object === 'object') {
        let keys = Object.keys(object);

        if (keys.length === 0) {
            return true
        }

        for (let key of keys) {
            if (!isEmptyDeep(object[key])) {
                return false
            }
        }

        return true
    }

    return false
};

const data = {a: {b: undefined}};
const data2 = {a: {b: 1}};
console.log(isEmptyDeep(data)); // true
console.log(isEmptyDeep(data2)); // false
