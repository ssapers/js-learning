/*На входе массив чисел, например: arr = [1,2,3,4,5].
Напишите функцию getSums(arr), которая возвращает массив его частичных сумм.
Иначе говоря, вызов getSums(arr) должен возвращать новый массив из такого же числа элементов,
в котором на каждой позиции должна быть сумма элементов arr до этой позиции включительно.
То есть:*/
const arr = [ 1, 2, 3, 4, 5 ];

function getSums(arr) {
    const result = [];
    const summary = arr.reduce(function(sum, current) {
        result.push(sum);
        return sum + current;
    });
    return result;
}

console.log(getSums(arr));